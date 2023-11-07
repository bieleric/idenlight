import { createI18n } from 'vue-i18n'

const messages = {
  de: {
    home: {
      welcome_to: "Willkommen bei",
      lets_go: "Los geht's"
    },
    
    focus: {
        title: "Ich bin...",
        user_title: "Anwender",
        developer_title: "Entwickler"
    },
    steps: {
        user: {
            introduction: {
                title: "Einführung",
                fact: "Self-Sovereign Identity = selbstbestimmte Identität",
                paragraph_one: "IDEnlight ist eine Demoanwendung um das Konzept Self-Sovereign Identity zu verstehen. Self-Sovereign Identity beschäftigt sich mit digitalen Nachweisen, wie diese ausgestellt, gespeichert, zurückgezogen und überprüft werden können.",
                paragraph_two: "Im Folgenden wirst du dem Umgang mit digitalen Nachweisen ausprobieren können. Dabei wirst du drei verschiedene Rollen einnehmen: HTW Dresden, Absolvent und Arbeitgeber."
            },
        }
    },
    navigation: {
        user: {
            step1: "Einführung",
            step2: "Digitaler Nachweis",
            step3: "Digitale Wallet",
            step4: "Kontakt herstellen",
            step5: "Nachweis ausstellen",
            step6: "Nachweis vorzeigen",
            step7: "Nachweis überprüfen"
        }
    }
  },
  en: {
  }
}

export default createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  legacy: false,
  messages
})
