import { mount } from '@vue/test-utils';
import PhoneAcceptCredentialScreen from '../../../../../userDemo/tutorials/TutorialComponents/PhoneAcceptCredentialScreen.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../../../i18n';
import { createTestingPinia } from '@pinia/testing';
import { vitest } from 'vitest';

describe("PhoneAcceptCredentialScreen.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(PhoneAcceptCredentialScreen, {
            global: {
                plugins: [
                    i18n,
                    createTestingPinia({
                        stubActions: false,
                        createSpy: vitest.fn,
                        initialState: {
                            'ssiStore': {

                            }
                        }
                    })
                ]
            }
        })
    })
    
    test("Mount Phone Accept Credential Screen Component", () => { 
        expect(wrapper.find("[data-type=acceptImage]").exists()).toBe(true);
    })
});