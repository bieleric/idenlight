import { mount } from '@vue/test-utils';
import SummaryScreen from '../../../userDemo/SummaryScreen.vue';
import { beforeEach, describe, expect, test } from "vitest";
import i18n from '../../../../i18n';

describe("SummaryScreen.vue", () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(SummaryScreen, {
            global: {
                plugins: [i18n]
            }
        })
    })
    
    test("Mount Introduction Screen Component", async() => {
        expect(wrapper.find("[data-type=summaryTitle]").exists()).toBe(true);
        expect(wrapper.find("[data-type=lessonTextContainer]").exists()).toBe(true);
        expect(wrapper.find("[data-type=scrollHandAnimation]").exists()).toBe(false);
    })
});