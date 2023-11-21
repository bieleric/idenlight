import {mount} from '@vue/test-utils';
import FocusButtons from '../../FocusButtons.vue';
import { beforeEach, describe, expect, test, vitest } from "vitest";
import { createTestingPinia } from '@pinia/testing';

describe("FocusButtons.vue", () => {
    let wrapper = null;
    let pinia = null;

    beforeEach(() => {
        wrapper = mount(FocusButtons, {
            props: {
                user_title: "Anwender",
                developer_title: "Entwickler"
            },
            global: {
                plugins: [
                    pinia = createTestingPinia({
                        createSpy: vitest.fn,
                        initialState: {
                            'focusStore': {
                                userActive: true
                            }
                        }
                    })
                ]
            }
        })
    })
    
    test("Mount FocusButtons Component", () => {
        expect(wrapper.props().user_title).toBe("Anwender")
        expect(wrapper.props().developer_title).toBe("Entwickler"); 
        expect(wrapper.find("#focus-user").exists()).toBe(true); 
        expect(wrapper.find("#focus-developer").exists()).toBe(true); 
    })

    test("Activate Developer", async() => {
        await wrapper.find("[data-type=activateDeveloper]").trigger("click");

        expect(wrapper.vm.state.userActive).toBe(false);
        //expect(pinia.state.value.focusStore.userActive).toBe(false);
    })

    test("Activate User", async() => {
        await wrapper.find("[data-type=activateUser]").trigger("click");

        expect(wrapper.vm.state.userActive).toBe(true);
        expect(pinia.state.value.focusStore.userActive).toBe(true);
    })
});