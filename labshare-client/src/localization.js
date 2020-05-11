let locale = localStorage.getItem('locale')
if (!locale) {
  locale = 'de'
}

export let localization = {
  locale: locale,
  fallbackLocale: "de",
  silentFallbackWarn: true,
  messages: {
    en: {
      "Textqualif-vol": "Scientific staff or technical assistants with training and experience in the use of laboratory equipment, sample preparation or data analysis",
      "Textres-lab": "Academic or industrial research laboratories with access to reagents, devices, or suitable laboratory space (BSL-2/3)",
      "Textdiag-cent": "Active diagnostic centers that currently offer SARS-CoV-2 tests including sample processing and analysis",
      signUp: "Sign up",
      login: "Log In",
      yes: "Yes",
      no: "No",
      
      backend: {
        formValidation: {
          // english should go below here
          invalid_email: "Invalid e-mail address",
          invalid_firstname: "Invalid first name (max. 200 characters)",
          invalid_lastname: "Invalid last name (max. 200 characters)",
          invalid_zipcode: "Invalid zip code (should be 5 digits)",
          invalid_city: "Invalid city (max. 200 characters)",
          invalid_street: "Invalid street (max. 200 characters)",
          invalid_phone: "Please use the format +4992 or 123 without - or /",
          invalid_description: "Invalid description (max. 2000 characters)",
          invalid_name: "Invalid laboratory name (max. 200 characters)",
          invalid_number: "Invalid number",
          invalid_search: "Invalid search parameter",
          invalid_role: "Invalid search type",
          invalid_skills: "Invalid skills",
          invalid_equipment: "Invalid equipment",
          invalid_advice: "Invalid request",
          invalid_consent: "Invalid consent",
          invalid_url: "URL must be shorter than 200 characters.",
          passwordMatch: "Passwords don't match!"
        },
        not_authorized: "Not authorized!",
        invalid_location: "Invalid address!",
        internal_error: "Something went wrong...",
        bad_request: "Invalid request!",
        invalid_password: "Invalid password!",
        invalid_login: "Invalid login details!",
        existing_user: "User already exists!",
        false_consent: "Whithout consent, we're not allowed to process your data.",
        no_results: "No results were found...",
        tokenTooOld: "Please reset your password again, the reset link expired.",
        contact_support: "An error has occurred. Please contact support@labhive.de. We apologize for the inconvenience!",
        user_not_activated: "The user hasn't been activated yet. Please validate the e-mail address. If you registered as laboratory, you will be manually verified by us. When that has been done, you will receive an e-mail from us. If this takes longer than two working days, please contact us at support@labhive.de.",
        user_disabled: "Your account was deactivated. In case of questions, please contact support@labhive.de.",
        featureNotAvailableForRole: "This feature is not available for your user role.",
        success: "Executed successfully"
      },
      save: "Save",
      consentPublicSearch:
        "<p>LabHive can share my data with registered and verified diagnostic centres and research laboratories, in the context of the SARS-CoV-2 pandemic.</p><p>If you disagree, the use of our platform is limited, which means that you as a volunteer cannot be found via the search function. There is no possibility for volunteers to contact a registered and verified diagnostic centre.</p><p>You will find further information in our <a target=\"_blank\" href=\"/#/privacyPolicy\">privacy policy</a>.</p>",
      disclaimerRegistration: "Whether you are allowed to work as a volunteer in a diagnostic center or whether you are released from work, you are responsible for clarifying this with your employer. If you are requested to work in a diagnostic center you, your employer and the diagnostic center in question are responsible for the Labour Law. LabHive assumes no responsibility in this regard.",
      consentMail: "<p>LabHive may occasionally send me e-mail notifications about updates and new features of the website.</p><p>If you disagree, you will not receive any e-mail notifications from us.</p>",
      required: "Required",
      agree: "I give consent.",
      not_agree: "I don't give consent.",
      qualification: "Qualification",
      deleteProfile: "Delete Profile",
      delete: "Delete",
      cancel: "Cancel",
      deleteConfirmation: "Do you really want to delete your profile?",

      bsl1: "Work under BSL1 safety standards",
      bsl2: "Work under BSL2 safety standards",
      bsl3: "Work under BSL3 safety standards",
      bsl4: "Work under BSL4 safety standards",
      qpcr: "qPCR",
      rnaExperience_isolation: "Work with RNA (esp. isolation with kit)",
      sample_processing: "(Pre-)Processing of clinical samples",
      elisa: "ELISA",
      primerProduction: "Primer production",
      dataAnalysis: "Data analysis",

      calibratedPipetteSet: "Calibrated pipette set",
      rtThermocycler: "Thermocycler RT",
      qpcrThermocycler: "Thermocycler qPCR",
      reverseTransKit: "Reverse transcriptase kit",
      pcrMasterMix: "PCR master mix",
      rnaExtractionDevice: "RNA extraction device",
      rnaExtractionKit: "RNA extraction kit",

      virology: "Virology",
      protocolProduction: "Writing of protocols",

      jobTraining: "Job training",
      mtla: "MTLA",
      bta_cta: "BTA/CTA",
      bachelor: "Bachelor (completed)",
      master: "Master (completed)",
      doctorate: "PhD Student",
      postdoc: "Postdoc",
      groupLeader: "Group Leader",
      other: "Other"
    },
    de: {
      "Textqualif-vol": "Wissenschaftliche Mitarbeiter oder Technische Assistenten mit Ausbildung und Erfahrung in der Anwendung von Laborgeräten, Probenvorbereitung oder Datenanalyse",
      "Textres-lab": "Akademische oder industrielle Forschungseinrichtungen mit Zugang zu Reagenzien, Geräte oder geeigneten Laboren (BSL-2/3)",
      "Textdiag-cent": "Aktive Diagnostikzentren, die derzeit SARS-CoV-2 Tests anbieten, d.h. Proben verarbeiten und Analysen durchführen",

      signUp: "Registrieren",
      login: "Login",
      yes: "Ja",
      no: "Nein",

      backend: {
        formValidation: {
          // german translation, no action needed here.
          invalid_email: "Ungültige E-Mail-Adresse",
          invalid_firstname: "Ungültiger Vorname (max. 200 Zeichen)",
          invalid_lastname: "Ungültiger Nachname (max. 200 Zeichen)",
          invalid_zipcode: "Ungültige PLZ (5 Ziffern bitte)",
          invalid_city: "Ungültige Stadt (max. 200 Zeichen)",
          invalid_street: "Ungültige Straße (max. 200 Zeichen)",
          invalid_phone: "Ungültige Telefonnummer. Bitte in der Form +49931123 oder 12344 eingeben ohne - oder /",
          invalid_description: "Ungültige Beschreibung (max. 2000 Zeichen)",
          invalid_name: "Ungültiger Laborname (max. 200 Zeichen)",
          invalid_number: "Ungültige Zahl",
          invalid_search: "Ungültiger Suchparameter",
          invalid_role: "Ungültiger Suchtyp",
          invalid_skills: "Ungültige Fähigkeiten",
          invalid_equipment: "Ungültiges Equipment",
          invalid_advice: "Ungültige Anfrage",
          invalid_consent: "Ungültige Einwilligung",
          invalid_url: "Ungültige URL (max. 200 Zeichen)",
          passwordMatch: "Passwörter stimmen nicht überein!"
        },
        not_authorized: "Nicht authorisiert!",
        invalid_location: "Ungültige Adresse!",
        internal_error: "Es ist etwas schiefgelaufen...",
        bad_request: "Ungültige Anfrage!",
        invalid_password: "Ungültiges Passwort!",
        invalid_login: "Ungültige Zugangsdaten!",
        existing_user: "User existiert bereits!",
        false_consent: "Ohne Einwilligung dürfen wir die Daten nicht verarbeiten.",
        no_results: "Nichts gefunden...",
        tokenTooOld: "Bitte setzen Sie das Passwort erneut zurück, der Link ist abgelaufen.",
        contact_support: "Ein Fehler ist aufgetreten, bitte wenden Sie sich an support@labhive.de. Bitte entschuldigen Sie die Umstände!",
        user_not_activated: "Der Benutzer ist noch nicht aktiviert. Zur Aktivierung Ihres Accounts müssen Sie die E-Mail Adresse bestätigen. Sollten Sie sich als Labor registriert haben, werden Sie von uns manuell verifiziert. Sobald dies geschehen ist, erhalten Sie von uns eine E-Mail. Sollte es länger als 2 Werktage dauern, kontaktieren Sie uns bitte unter support@labhive.de.",
        user_disabled: "Ihr Account wurde von uns deaktiviert. Bei Fragen wenden Sie sich bitte an support@labhive.de.",
        featureNotAvailableForRole: "Die Funktion ist für Ihre Nutzerrolle nicht verfügbar.",
        success: "Erfolgreich ausgeführt."
      },
      save: "Speichern",
      consentPublicSearch:
        "<p>LabHive kann meine Daten zum Zwecke der Zusammenarbeit mit registrierten und verifizierten Diagnostikzentren und Forschungslaboren, im Rahmen der SARS-CoV-2 Pandemie, über die Suchfunktion einsehbar machen.</p><p>Widersprechen Sie dem, ist die Verwendung unserer Plattform nur eingeschränkt möglich, wodurch Sie als Freiwillige:r nicht über die Suche gefunden werden können. Es gibt für Freiwillige keine Möglichkeit, Kontakt zu einem registrierten und verifizierten Diagnostikzentrum aufzunehmen.</p><p>Weitere Hinweise finden Sie in unserer <a target=\"_blank\" href=\"/#/privacyPolicy\">Datenschutzerklärung</a>.</p>",
      disclaimerRegistration: "Ob Sie als Freiwillige:r in Diagnostikzentren arbeiten dürfen, bzw. freigestellt werden, müssen Sie eigenverantwortlich mit Ihrem Arbeitgeber klären. Wenn Sie von einem Diagnostikzentrum angefragt werden, obliegt die arbeitsrechtliche Regelung Ihnen, Ihrem Arbeitgeber und dem betreffenden Diagnostikzentrum. LabHive übernimmt hier keine Verantwortung.",
      consentMail: "<p>LabHive kann mir gelegentlich E-Mail-Benachrichtigungen über Updates und neue Funktionen der Website schicken.</p><p>Widersprechen Sie dem, erhalten Sie keine E-Mail-Benachrichtigungen von uns.</p>",
      required: "Erforderlich",
      agree: "Ja",
      not_agree: "Nein",
      qualification: "Qualifikation",
      deleteProfile: "Profil löschen",
      delete: "Löschen",
      cancel: "Abbruch",
      deleteConfirmation: "Wollen Sie ihr Profil wirklich löschen?",


      bsl1: "Arbeit unter BSL1 Sicherheitsstandards",
      bsl2: "Arbeit unter BSL2 Sicherheitsstandards",
      bsl3: "Arbeit unter BSL3 Sicherheitsstandards",
      bsl4: "Arbeit unter BSL4 Sicherheitsstandards",
      qpcr: "qPCR",
      rnaExperience_isolation: "Arbeit mit RNA (insbes. Isolation mit Kit)",
      sample_processing: "Vor/Aufbereitung klinischer Proben",
      elisa: "ELISA",
      primerProduction: "Primerherstellung",
      dataAnalysis: "Datenanalyse",

      calibratedPipetteSet: "Kalibrierter Pipettensatz",
      rtThermocycler: "Thermocycler RT",
      qpcrThermocycler: "Thermocycler qPCR",
      reverseTransKit: "Reverse Transkriptase-Kit",
      pcrMasterMix: "PCR Master Mix",
      rnaExtractionDevice: "RNA-Extraktionsgerät",
      rnaExtractionKit: "RNA-Extraktionskit",

      virology: "Virologie",
      protocolProduction: "Protokollerstellung",

      jobTraining: "Berufsausbildung",
      mtla: "MTLA",
      bta_cta: "BTA/CTA",
      bachelor: "Bachelor (abgeschlossen)",
      master: "Master (abgeschlossen)",
      doctorate: "Promotionsstudent:in",
      postdoc: "Postdoc",
      groupLeader: "Gruppenleiter:in",
      other: "Andere"
    }
  }
}
