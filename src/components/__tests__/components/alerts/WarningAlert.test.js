import {mount} from '@vue/test-utils';
import WarningAlert from '../../../alerts/WarningAlert.vue';
import { describe, expect, test } from "vitest";

describe("WarningAlert.vue", () => {
    expect(WarningAlert).toBeTruthy();
    
    test("Mount WarningAlert Component", async() => {
        expect(WarningAlert).toBeTruthy();
        
        const wrapper = mount(WarningAlert, {
            props: {
                text: "Warnung"
            }
        });
        expect(wrapper.text()).toContain("Warnung");
        expect(wrapper.classes()).toEqual(expect.arrayContaining(["alert"]));
        expect(wrapper.classes()).toEqual(expect.arrayContaining(["alert-warning"]));
    })
}); 