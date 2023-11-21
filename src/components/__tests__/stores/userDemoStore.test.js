import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useUserDemoStore } from "../../../stores/userDemoStore";

describe("User Demo Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test("Defaults On Initialization Are Correctly Set", () => {
        const userDemoStore = useUserDemoStore()

        expect(userDemoStore.currentStep).toBe(0)
        expect(userDemoStore.tutorial).toBe(false)
        expect(userDemoStore.showNavigationButtons).toBe(true)
        expect(userDemoStore.descriptionActive).toBe(true)
        expect(userDemoStore.tabMode).toBe(false)
        expect(userDemoStore.steps).toStrictEqual(["Einführung", "Digitaler Nachweis", "Digitale Wallet", "Kontakt herstellen", "Nachweis ausstellen & annehmen", "Nachweis vorzeigen & überprüfen", "Zusammenfassung"])
    })

    test("Increase Current Step", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.increase()

        expect(userDemoStore.currentStep).toBe(1)
    })

    test("Reduce Current Step", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.reduce()

        expect(userDemoStore.currentStep).toBe(-1)
    })

    test("Toggle Description Active", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.toggleDescription(false)

        expect(userDemoStore.descriptionActive).toBe(false)
    })

    test("Set Tab Mode Active", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.setTabMode(true)

        expect(userDemoStore.tabMode).toBe(true)
    })

    test("Set Tutorial Active", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.setTutorial(true)

        expect(userDemoStore.tutorial).toBe(true)
    })

    test("Set Show Navigation Buttons To False", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.setShowNavigationButtons(false)

        expect(userDemoStore.showNavigationButtons).toBe(false)
    })

    test("Reset User Demo To Default", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.resetCurrentStep()

        expect(userDemoStore.currentStep).toBe(0)
        expect(userDemoStore.descriptionActive).toBe(true)
        expect(userDemoStore.tutorial).toBe(false)
        expect(userDemoStore.showNavigationButtons).toBe(true)
    })

    test("Get State Values", () => {
        const userDemoStore = useUserDemoStore()
        userDemoStore.resetCurrentStep()

        expect(userDemoStore.getCurrentStep).toBe(0)
        expect(userDemoStore.getDescriptionActive).toBe(true)
        expect(userDemoStore.getTutorial).toBe(false)
        expect(userDemoStore.getShowNavigationButtons).toBe(true)
        expect(userDemoStore.getSteps).toStrictEqual(["Einführung", "Digitaler Nachweis", "Digitale Wallet", "Kontakt herstellen", "Nachweis ausstellen & annehmen", "Nachweis vorzeigen & überprüfen", "Zusammenfassung"])
        expect(userDemoStore.getStepsLength).toBe(7)
        expect(userDemoStore.getTabMode).toBe(false)
    })
})