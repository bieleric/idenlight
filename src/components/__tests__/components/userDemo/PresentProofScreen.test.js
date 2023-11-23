import { mount } from '@vue/test-utils';
import PresentProofScreen from '../../../userDemo/PresentProofScreen.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../i18n';
import { createTestingPinia } from '@pinia/testing';
import { vitest } from 'vitest';
import { useUserDemoStore } from '../../../../stores/userDemoStore';
import { useDemoTutorialStore } from '../../../../stores/demoTutorialStore';

describe("PresentProofScreen.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(PresentProofScreen, {
            global: {
                plugins: [
                    i18n,
                    createTestingPinia({
                        stubActions: false,
                        createSpy: vitest.fn,
                        initialState: {
                            'userDemoStore': {
                                tutorial: false,
                                showNavigationButtons: true
                            },
                            'demoTutorialStore': {
                                currentStep: 3,
                                connectionTutorialFinished: false,
                                issueTutorialFinished: false,
                                presentTutorialFinished: false,
                            }
                        }
                    })
                ]
            }
        })
    })
    
    test("Mount Issue Credential Component", () => { 
        expect(wrapper.find("[data-type=presentTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=lessonTextContainer]").exists()).toBe(true);
        expect(wrapper.find("[data-type=scrollHandAnimation]").exists()).toBe(false);
        expect(wrapper.find("[data-type=startPresentProofTutorial]").exists()).toBe(true);
    })

    test("Don't Start Tutorial 'Present Proof' if Tutorial 'Issue Credential' isn't finished", async() => { 
        const userDemoStore = useUserDemoStore();
        const demoTutorialStore = useDemoTutorialStore();
        
        expect(userDemoStore.getTutorial).toBe(false);
        expect(userDemoStore.getShowNavigationButtons).toBe(true);
        expect(demoTutorialStore.getCurrentTutorial).toBe(null);
        expect(demoTutorialStore.getCurrentStep).toBe(3);
        expect(wrapper.find("[data-type=warningAlert]").exists()).toBe(false);

        await wrapper.find("[data-type=startPresentProofTutorial]").trigger("click");

        expect(userDemoStore.getTutorial).toBe(false);
        expect(userDemoStore.getShowNavigationButtons).toBe(true);
        expect(demoTutorialStore.getCurrentTutorial).toBe(null);
        expect(demoTutorialStore.getCurrentStep).toBe(3);
        expect(wrapper.find("[data-type=warningAlert]").exists()).toBe(true);
    })

    test("Start Tutorial 'Present Proof' if Tutorial 'Issue Credential' is finished", async() => { 
        const userDemoStore = useUserDemoStore();
        const demoTutorialStore = useDemoTutorialStore();

        demoTutorialStore.setIssueTutorialFinished();

        expect(userDemoStore.getTutorial).toBe(false);
        expect(userDemoStore.getShowNavigationButtons).toBe(true);
        expect(demoTutorialStore.getCurrentTutorial).toBe(null);
        expect(demoTutorialStore.getCurrentStep).toBe(3);
        expect(wrapper.find("[data-type=warningAlert]").exists()).toBe(false);

        await wrapper.find("[data-type=startPresentProofTutorial]").trigger("click");

        expect(userDemoStore.getTutorial).toBe(true);
        expect(userDemoStore.getShowNavigationButtons).toBe(false);
        expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName);
        expect(demoTutorialStore.getCurrentStep).toBe(1);
        expect(wrapper.find("[data-type=warningAlert]").exists()).toBe(false);
    })
});