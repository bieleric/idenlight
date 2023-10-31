import { createI18n } from "vue-i18n";

const messages = {
    de: {
        home: {
            welcome_to: "Willkommen bei",
            lets_go: "Los geht's"
        }
    },
    en: {
        home: {
            welcome_to: "Welcome to"
        }
    }
}


export default createI18n({
    locale: "de",
    fallbackLocale: "en",
    legacy: false,
    messages
})