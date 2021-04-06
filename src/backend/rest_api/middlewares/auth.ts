import express from "express";
import { getUserOrAdmin } from 'backend/lib/database/database';
import utils from '../utils';
import { UnauthorizedError } from '../../../lib/errors';


export async function authMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.headers.authorization) {
        return next(new UnauthorizedError())
    }

    let auth = await utils.isValidJWT(req)
    if (!auth) {
        return next(new UnauthorizedError())
    }

    let decoded_token = utils.getUnverifiedDecodedJWT(req);
    let user = await getUserOrAdmin({ _id: decoded_token.sub }, true);
    if (!user) {
        return next(new UnauthorizedError())
    }
    
    next();
}
