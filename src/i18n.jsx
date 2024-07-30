import i18n from 'i18next'
import { initReactI18next, } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import uzTranslation from '../public/locales/uz/uz.json'
import ruTranslation from '../public/locales/ru/ru.json'
const lng = localStorage.getItem('i18nextLng') || 'uz'

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uz',
        lng,
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
        }
    })

export default i18n