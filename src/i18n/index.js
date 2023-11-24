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
    verifiable_credential: {
        "max_mustermann": "Max Mustermann",
        "musterstadt": "Musterstadt",
        "01012000": "01.01.2000",
        "bachelor": "Bachelor of Science",
        "computer_science": "Informatik",
        "17": "1.7"
    },
    alert_messages: {
        "doConnectionTutorial": "Absolviere zuerst das Tutorial 'Kontakt herstellen'!",
        "doIssueTutorial": "Absolviere zuerst das Tutorial 'Nachweis ausstellen & annehmen'!"
    },
    steps: {
        general: {
            "description": "Erklärung",
            "graphic": "Grafik"
        },
        user: {
            introduction: {
                title: "Einführung",
                paragraph1: "IDEnlight ist eine Anwendung, welches Ihnen das Konzept von selbstbestimmten digitalen Identitäten näher bringt.",
                paragraph2: "Dazu müssen wir zuerst festhalten: Was ist überhaupt eine digitale Identität und was bedeutet selbstbestimmt?",
                paragraph3: "Unsere digitale Identität bildet sich typischerweise aus unzähligen Accounts von Goolge, Facebook, Twitter und so weiter - das heißt aus Daten, die unsere Eigenschaften und Merkmale enthalten (Name, Herkunft, Familie, ...). Das Problem dabei ist, dass wir die Kontrolle über unsere Daten mit der Nutzung jener Services und Plattformen abgeben.",
                paragraph4: "Im realen Leben wird unsere Identität dagegen nicht durch Nutzeraccounts geformt, sondern durch Nachweise, die Sie selbst besitzen und bei denen Sie selbst entscheiden können, mit wem sie diese Daten teilen (Personalausweis, Führerschein, Zeugnis, ...). Diese können wir allerdings nicht im Internet nutzen - höchtens durch aufwändige Videoidentifikationen oder Ähnlichem.",
                paragraph5: "Selbstbestimmte digitale Identitäten lösen beide Probleme. Um dies zu verstehen, werden Sie im Folgenden beispielhaft ein Szenario durchgehen und dabei 3 verschiedene Rollen einnehmen: die HTW Dresden, einen Absolventen der HTW Dresden und einen Arbeitgeber."
            },
            verifiable_credential: {
                title: "Digitaler Nachweis",
                paragraph1: "Ein digitaler Nachweis ist ein Dokument, wie beispielsweise ein Personalausweis, jedoch digital und überprüfbar.",
                paragraph2: "Genau wie bei einem analogen Ausweis sind bei einem digitalen Nachweis Sicherheitsmechanismen vorgesehen, um ihn fälschungssicher zu machen und den Herausgeber zu identifizieren.",
                paragraph3: "In unserem Szenario werden wir ein Abschlusszeugnis betrachten und dieses:",
                actions: {
                    issue: "Ausstellen",
                    store: "Speichern",
                    present: "Vorzeigen",
                    proof: "Überprüfen"
                }
            },
            wallet: {
                title: "Digitale Wallet",
                paragraph1: "Um das digitale Abschlusszeugnis speichern zu können, benötigen wir eine digitale Wallet.",
                paragraph2: "Sie können sich diese wie ein normales Portmonnaie vorstellen, in welchem Ihre Nachweise enthalten sind. Der Unterschied ist nur, dass sie diese nun digital auf ihrem Smartphone haben.",
                paragraph3: "Diese Anwendung unterstützt folgende digitale Wallets:",

            },
            connection: {
                title: "Kontakt herstellen",
                paragraph1: "Sie wissen nun, was ein digitaler Nachweis ist und was eine digitale Wallet ist. Somit können wir mit dem Szenario beginnen.",
                paragraph2: "Wie bereits erwähnt, werden Sie dabei 3 Rollen einnehmen: HTW Dresden, Absolvent und Arbeitgeber.",
                paragraph3: "Im ersten Schritt werden wir eine sichere Verbindung zwischen der HTW Dresden und dem Absolventen herstellen. Diese dient dazu, um das digitale Abschlusszeugnis sicher zu übertragen.",
            },
            issue: {
                title: "Nachweis ausstellen & annehmen",
                paragraph1: "Da wir eine Verbindung zwischen der HTW Dresden und dem Absolventen hergestellt haben, können wir jetzt das digitale Abschlusszeugnis ausstellen."
            },
            present: {
                title: "Nachweis vorzeigen & überprüfen",
                paragraph1: "Nachdem wir der Absolvent das digitale Abschlusszeugnis erhalten hat, kann dieses nun bei einem Bewerbungsprozess genutzt werden.",
                paragraph2: "Dazu prüft der Arbeitgeber die digitale Unterschrift der HTW Dresden auf dem Abschlusszeugnis des Absolventen.",
                paragraph3: "Hinweis: Es wird vorerst wieder eine Verbindung zwischen dem Absolvent und dem Arbeitgeber hergestellt."
            },
            summary: {
                title: "Zusammenfassung",
                paragraph1: "Sie haben nun aus 3 verschiedenen Rollen den Umgang mit digitalen Nachweisen kennengelernt. Dabei haben Sie einen digitalen Nachweis ausgestellt, gespeichert, vorgezeigt und überprüft.",
                paragraph2: "Wie Sie möglicherweise währenddessen festgestellt haben, hat diese Vorgehensweise auch einen hohes Automatisierungspotenzial und kann auf viele unterschiedliche Szenarien im alltäglichen angewendet werden. Die Rollen bleiben dabei aber stets: Aussteller, Besitzer und Prüfer.",
                paragraph3: "Welche weiteren Möglichkeiten kennen Sie für die Verwendung von digitalen Nachweisen?"
            }
        }
    },
    tutorial: {
        roles: {
            youarenow: "Sie sind nun...",
            alumni: "Absolvent",
            htw: "HTW Dresden",
            employer: "Arbeitgeber"
        },
        htw_website: {
            home: "Startseite",
            teach: "Lehre",
            research: "Forschung",
            service: "Service",
            digital_credentials: "Digitale Nachweise",
            create_connection: "Kontakt herstellen",
            issue_credential: "Nachweis ausstellen",
            issue_digital_diploma: "Digitales Abschlusszeugnis ausstellen",
            name: "Name",
            birthplace: "Geburtsort",
            birthdate: "Geburtsdatum",
            degree: "Abschluss",
            course: "Studiengang",
            grade: "Gesamtnote",
            load_data_of_max_mustermann: "Lade Daten von Max Mustermann",
            calculate_grade: "Berechne Gesamtnote"
        },
        create_connection: {
            title: "Tutorial: Kontakt herstellen",
            instruction: "Die HTW Dresden stellt Ihnen auf ihrer Website einen QR-Code bereit. Scannen Sie diesen mit Ihrer digitalen Wallet, um einen Kontakt herzustellen."
        },
        issue_credential: {
            title: "Tutorial: Nachweis ausstellen & annehmen",
            instruction1: "Sie befinden sich nun auf der HTW Dresden Website und können dort als HTW Dresden das digitale Abschlusszeugnis von Max Mustermann ausstellen. Klicken Sie dazu auf 'Digitales Abschlusszeugnis ausstellen'",
            instruction2: "Sie haben das digitale Abschlusszeugnis ausgestellt. Nehmen Sie es nun in Ihrer Wallet-App an. Damit ist der Ausstellungsvorgang abgeschlossen."
        },
        present_proof: {
            title: "Tutorial: Nachweis vorzeigen & überprüfen",
            instruction1: "Sie befinden sich jetzt auf dem Bewerberportal des Arbeitgebers. Scannen Sie den bereitgestellten QR-Code (oder klicken Sie auf den Link), um wiederum den Kontakt zum Arbeitgeber herzustellen. Klicken Sie daraufhin auf den Button 'Digitales Abschlusszeugnis vorzeigen'. Achten Sie darauf, dass nicht alle Daten des Abschlusszeugnisses übermittelt werden, sondern nur die, die der Arbeitgeber wirklich benötigt. Sie können dem zustimmen oder nicht.",
            instruction2: "Sie sind nun in der Webanwendung des Arbeitgebers und können die eingereichten digitalen Abschlusszeugnisse der Absolventen einsehen."
        },
        employer_website: {
            cover_letter: "Anschreiben",
            cv: "Lebenslauf",
            digital_diploma: "Digitales Abschlusszeugnis",
            present_digital_diploma: "Digitales Abschlusszeugnis vorzeigen",
            create_connection: "Kontakt herstellen",
            load_data: "Lade Daten",
            check_signature: "Prüfe Unterschriften",
            applicants: "Bewerber:innen",
            applicant: "Bewerber:in",
            diploma: "Abschlusszeugnis",
            course: "Studiengang",
            degree: "Abschluss",
            grade: "Note",
            verified: "Verifiziert",
            applicant_portal: "Bewerberportal"
        }
    },
    navigation: {
        user: {
            step1: "Einführung",
            step2: "Digitaler Nachweis",
            step3: "Digitale Wallet",
            step4: "Kontakt herstellen",
            step5: "Nachweis ausstellen & annehmen",
            step6: "Nachweis vorzeigen & überprüfen",
            step7: "Zusammenfassung",
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
