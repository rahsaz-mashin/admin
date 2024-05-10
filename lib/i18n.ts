import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'fa',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fa: {
                translation: {
                    "button": "روم کلیک کن!",
                    officeNumber: "05133445566",
                    callWidget: {
                        endCall: "پایان مکالمه",
                    },
                },
            },
            ar: {
                translation: {
                    "button": "اضغط علي!",
                    officeNumber: "05133445566",
                    callWidget: {
                        endCall: "إلغاء المكالمة",
                    },
                },
            },
            en: {
                translation: {
                    "button": "Click on me!",
                    officeNumber: "+985133445566",
                    callWidget: {
                        endCall: "End Call",
                    },
                },
            },
        },
    });

export default i18n;