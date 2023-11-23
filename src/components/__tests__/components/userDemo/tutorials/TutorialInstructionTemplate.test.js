import { mount } from '@vue/test-utils';
import TutorialInstructionTemplate from '../../../../userDemo/tutorials/TutorialInstructionTemplate.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../../i18n';
import { createTestingPinia } from '@pinia/testing';
import { vitest } from 'vitest';
import { useDemoTutorialStore } from '../../../../../stores/demoTutorialStore';


describe("TutorialInstructionTemplate.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(TutorialInstructionTemplate, {
            global: {
                plugins: [
                    i18n,
                    createTestingPinia({
                        stubActions: false,
                        createSpy: vitest.fn,
                        initialState: {
                            'demoTutorialStore': {
                                currentStep: 1,
                                connectionTutorialFinished: false,
                                issueTutorialFinished: false,
                                presentTutorialFinished: false,
                                currentTutorial: null
                            }
                        }
                    })
                ]
            }
        })
    })
    
    test("Mount Tutorial Instruction Template Component", () => { 
        expect(wrapper.find("[data-type=instructionTextContainer]").exists()).toBe(true);
        expect(wrapper.find("[data-type=connectionInstruction]").exists()).toBe(false);
        expect(wrapper.find("[data-type=issueInstruction1]").exists()).toBe(false);
        expect(wrapper.find("[data-type=issueInstruction2]").exists()).toBe(false);
        expect(wrapper.find("[data-type=presentInstruction1]").exists()).toBe(false);
        expect(wrapper.find("[data-type=presentInstruction2]").exists()).toBe(false);
    })

    test("Check Instruction For Create Connection Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToConnectionTutorial();
        demoTutorialStore.currentStep = 2

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(2);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getConnectionTutorialName);
        expect(wrapper.find("[data-type=connectionInstruction]").exists()).toBe(true);
    })

    test("Check Instruction For Issue Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToIssueTutorial();
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getIssueTutorialName);
        demoTutorialStore.currentStep = 2

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(2);
        expect(wrapper.find("[data-type=issueInstruction1]").exists()).toBe(true);

        demoTutorialStore.currentStep = 5

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(5);
        expect(wrapper.find("[data-type=issueInstruction2]").exists()).toBe(true);
    })

    test("Check Instruction For Present Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToPresentTutorial();
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName);
        demoTutorialStore.currentStep = 2

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(2);
        expect(wrapper.find("[data-type=presentInstruction1]").exists()).toBe(true);

        demoTutorialStore.currentStep = 5

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(5);
        expect(wrapper.find("[data-type=presentInstruction2]").exists()).toBe(true);
    })
});