import { mount } from '@vue/test-utils';
import TutorialRoleTemplate from '../../../../userDemo/tutorials/TutorialRoleTemplate.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../../i18n';
import { createTestingPinia } from '@pinia/testing';
import { vitest } from 'vitest';
import { useDemoTutorialStore } from '../../../../../stores/demoTutorialStore';


describe("TutorialRoleTemplate.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(TutorialRoleTemplate, {
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
    
    test("Mount Tutorial Role Template Component", () => { 
        expect(wrapper.find("[data-type=roleTextContainer]").exists()).toBe(true);
        expect(wrapper.find("[data-type=alumniTitle]").exists()).toBe(false);
        expect(wrapper.find("[data-type=htwTitle]").exists()).toBe(false);
        expect(wrapper.find("[data-type=employerTitle]").exists()).toBe(false);
        expect(wrapper.find("[data-type=alumniImage]").exists()).toBe(false);
        expect(wrapper.find("[data-type=htwImage]").exists()).toBe(false);
        expect(wrapper.find("[data-type=employerImage]").exists()).toBe(false);
    })

    test("Check Role For Create Connection Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToConnectionTutorial();

        await wrapper.vm.$nextTick();

        expect(demoTutorialStore.getCurrentStep).toBe(1);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getConnectionTutorialName);
        expect(wrapper.find("[data-type=alumniTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=alumniImage]").exists()).toBe(true);
    })

    test("Check Roles For Issue Credential Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToIssueTutorial();

        await wrapper.vm.$nextTick();

        // Role: Issuer
        expect(demoTutorialStore.getCurrentStep).toBe(1);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getIssueTutorialName);
        expect(wrapper.find("[data-type=htwTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=htwImage]").exists()).toBe(true);

        // Role: Holder
        demoTutorialStore.currentStep = 4
        await wrapper.vm.$nextTick();
        expect(demoTutorialStore.getCurrentStep).toBe(4);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getIssueTutorialName);
        expect(wrapper.find("[data-type=alumniTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=alumniImage]").exists()).toBe(true);
    })

    test("Check Roles For Present Proof Tutorial", async() => { 
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setCurrentTutorialToPresentTutorial();

        await wrapper.vm.$nextTick();

        // Role: Holder
        expect(demoTutorialStore.getCurrentStep).toBe(1);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName);
        expect(wrapper.find("[data-type=alumniTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=alumniImage]").exists()).toBe(true);

        // Role: Verifier
        demoTutorialStore.currentStep = 4
        await wrapper.vm.$nextTick();
        expect(demoTutorialStore.getCurrentStep).toBe(4);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName);
        expect(wrapper.find("[data-type=employerTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=employerImage]").exists()).toBe(true);
    })
});