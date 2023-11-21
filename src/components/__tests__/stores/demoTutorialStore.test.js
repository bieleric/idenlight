import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useDemoTutorialStore } from "../../../stores/demoTutorialStore";

describe("Demo Tutorial Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test("Defaults On Initialization Are Correctly Set", () => {
        const demoTutorialStore = useDemoTutorialStore()

        expect(demoTutorialStore.connectionTutorialName).toBe("Connection Tutorial")
        expect(demoTutorialStore.issueTutorialName).toBe("Issue Tutorial")
        expect(demoTutorialStore.presentTutorialName).toBe("Present Tutorial")
        expect(demoTutorialStore.connectionTutorialFinished).toBe(false)
        expect(demoTutorialStore.issueTutorialFinished).toBe(false)
        expect(demoTutorialStore.presentTutorialFinished).toBe(false)
        expect(demoTutorialStore.connectionTutorialSteps).toBe(3)
        expect(demoTutorialStore.issueTutorialSteps).toBe(6)
        expect(demoTutorialStore.presentTutorialSteps).toBe(6)
        expect(demoTutorialStore.currentStep).toBe(1)
        expect(demoTutorialStore.currentTutorial).toBe(null)
    })

    test("Increment Current Step For Connection Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.incrementConnectionTutorial()
        demoTutorialStore.incrementConnectionTutorial()
        // Should stay at 3
        demoTutorialStore.incrementConnectionTutorial()

        expect(demoTutorialStore.currentStep).toBe(3)
    })

    test("Increment Current Step For Issue Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.incrementIssueTutorial()
        demoTutorialStore.incrementIssueTutorial()
        demoTutorialStore.incrementIssueTutorial()
        demoTutorialStore.incrementIssueTutorial()
        demoTutorialStore.incrementIssueTutorial()
        // Should stay at 6
        demoTutorialStore.incrementIssueTutorial()

        expect(demoTutorialStore.currentStep).toBe(6)
    })

    test("Increment Current Step For Present Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.incrementPresentTutorial()
        demoTutorialStore.incrementPresentTutorial()
        demoTutorialStore.incrementPresentTutorial()
        demoTutorialStore.incrementPresentTutorial()
        demoTutorialStore.incrementPresentTutorial()
        // Should stay at 6
        demoTutorialStore.incrementPresentTutorial()

        expect(demoTutorialStore.currentStep).toBe(6)
    })

    test("Decrement Current Step", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.decrement()

        expect(demoTutorialStore.currentStep).toBe(1)

        demoTutorialStore.incrementConnectionTutorial()
        demoTutorialStore.incrementConnectionTutorial()
        demoTutorialStore.decrement()

        expect(demoTutorialStore.currentStep).toBe(2)
    })

    test("Set Current Tutorial To Connection Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.setCurrentTutorialToConnectionTutorial()

        expect(demoTutorialStore.currentTutorial).toBe(demoTutorialStore.connectionTutorialName)
    })

    test("Set Current Tutorial To Issue Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.setCurrentTutorialToIssueTutorial()

        expect(demoTutorialStore.currentTutorial).toBe(demoTutorialStore.issueTutorialName)
    })

    test("Set Current Tutorial To Present Tutorial", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.setCurrentTutorialToPresentTutorial()

        expect(demoTutorialStore.currentTutorial).toBe(demoTutorialStore.presentTutorialName)
    })

    test("Set Tutorials To Finished", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.setConnectionTutorialFinished()
        demoTutorialStore.setIssueTutorialFinished()
        demoTutorialStore.setPresentTutorialFinished()

        expect(demoTutorialStore.connectionTutorialFinished).toBe(true)
        expect(demoTutorialStore.issueTutorialFinished).toBe(true)
        expect(demoTutorialStore.presentTutorialFinished).toBe(true)
    })

    test("Get State Value", () => {
        const demoTutorialStore = useDemoTutorialStore()
        demoTutorialStore.setCurrentTutorialToConnectionTutorial()

        expect(demoTutorialStore.getCurrentStep).toBe(1)
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.currentTutorial)
        expect(demoTutorialStore.getConnectionTutorialFinished).toBe(false)
        expect(demoTutorialStore.getIssueTutorialFinished).toBe(false)
        expect(demoTutorialStore.getPresentTutorialFinished).toBe(false)
        expect(demoTutorialStore.getConnectionTutorialName).toBe(demoTutorialStore.connectionTutorialName)
        expect(demoTutorialStore.getIssueTutorialName).toBe(demoTutorialStore.issueTutorialName)
        expect(demoTutorialStore.getPresentTutorialName).toBe(demoTutorialStore.presentTutorialName)
        expect(demoTutorialStore.getCurrentTutorialSteps).toBe(demoTutorialStore.connectionTutorialSteps)
        expect(demoTutorialStore.getConnectionTutorialSteps).toBe(demoTutorialStore.connectionTutorialSteps)
        expect(demoTutorialStore.getIssueTutorialSteps).toBe(demoTutorialStore.issueTutorialSteps)
        expect(demoTutorialStore.getPresentTutorialSteps).toBe(demoTutorialStore.presentTutorialSteps)
    })
})