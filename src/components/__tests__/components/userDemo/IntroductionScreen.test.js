import { mount } from '@vue/test-utils';
import IntrocutionScreen from '../../../userDemo/IntroductionScreen.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../i18n';

describe("IntrocutionScreen.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(IntrocutionScreen, {
            global: {
                plugins: [i18n]
            }
        })
    })
    
    test("Mount Introduction Screen Component", async() => {
        expect(wrapper.find("[data-type=introductionTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=lessonTextContainer]").exists()).toBe(true);
        expect(wrapper.find("[data-type=scrollHandAnimation]").exists()).toBe(false);
    })
});