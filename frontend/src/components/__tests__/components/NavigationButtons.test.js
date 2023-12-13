import { mount } from '@vue/test-utils'
import NavigationButtons from '../../NavigationButtons.vue'
import { beforeEach, describe, expect, test, vitest } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { useUserDemoStore } from '../../../stores/userDemoStore'
// import { useDemoTutorialStore } from '../../../stores/demoTutorialStore';

describe('NavigationButtons.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(NavigationButtons, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            createSpy: vitest.fn,
            initialState: {
              userDemoStore: {
                currentStep: 0,
                steps: ['1', '2', '3', '4', '5', '6', '7']
              },
              demoTutorialStore: {
                connectionTutorialFinished: true
              }
            }
          })
        ]
      }
    })
  })

  test('Mount NavigationButtons Component', () => {
    expect(wrapper.find('#navigation-buttons').exists()).toBe(true)
    expect(wrapper.find('[data-type=incrementStep]').exists()).toBe(true)
    expect(wrapper.find('[data-type=decrementStep]').exists()).toBe(false)
  })

  test('Increase and Decrease Current Step With Navigation Buttons', async () => {
    const userDemoStore = useUserDemoStore()
    await wrapper.find('[data-type=incrementStep]').trigger('click')

    // arrow left should be visible
    expect(userDemoStore.currentStep).toBe(1)
    expect(wrapper.find('[data-type=decrementStep]').exists()).toBe(true)

    await wrapper.find('[data-type=decrementStep]').trigger('click')

    // arrow left should not be visible
    expect(userDemoStore.currentStep).toBe(0)
    expect(wrapper.find('[data-type=decrementStep]').exists()).toBe(false)
  })

  test('Click Next Navigation Button On Last Step', async () => {
    const userDemoStore = useUserDemoStore()

    // increase until penultimate step
    for (let i = 0; i < userDemoStore.getStepsLength - 2; i++) {
      userDemoStore.increase()
    }

    expect(wrapper.find('[data-type=finishDemoIcon]').exists()).toBe(false)
    await wrapper.find('[data-type=incrementStep]').trigger('click')

    // finish demo
    expect(wrapper.find('[data-type=finishDemoIcon]').exists()).toBe(true)
    await wrapper.find('[data-type=incrementStep]').trigger('click')
  })

  /*test("Check Pulsating Buttons", async () => {
        const demoTutorialStore = useDemoTutorialStore();
        expect(wrapper.classes("pulse-animation")).toBe(true);
    })*/
})
