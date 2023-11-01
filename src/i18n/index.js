import { createI18n } from 'vue-i18n'

const messages = {
  de: {
    home: {
      welcome_to: "Willkommen bei",
      lets_go: "Los geht's"
    },
    introduction: {
        title: "Einführung",
        fact: "Self-Sovereign Identity = selbstbestimmte Identität",
        paragraph_one: "IDEnlight ist eine Demoanwendung um das Konzept Self-Sovereign Identity zu verstehen. Self-Sovereign Identity beschäftigt sich mit digitalen Nachweisen, wie diese ausgestellt, gespeichert, zurückgezogen und überprüft werden können.",
        paragraph_two: "Im Folgenden wirst du dem Umgang mit digitalen Nachweisen ausprobieren können. Dabei wirst du drei verschiedene Rollen einnehmen: HTW Dresden, Absolvent und Arbeitgeber."
    },
    focus: {
        title: "Fokus",
        concept: {
            title: "Konzept",
            text: "Es werden die grundlegenden Konzepte von SSI deutlich.",
            target_group: "Empfohlen für: Anwender"
        },
        technology: {
            title: "Technologie",
            text: "Es werden die technischen Konzepte von SSI deutlich.",
            target_group: "Empfohlen für: technisch Interessierte"
        }
    }
  },
  en: {
    home: {
      welcome_to: 'Welcome to'
    }
  }
}

export default createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  legacy: false,
  messages
})
