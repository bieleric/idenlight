import { mount } from '@vue/test-utils'
import ConnectionScreen from '../../../userDemo/ConnectionScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'
import { useUserDemoStore } from '../../../../stores/userDemoStore'
import { useDemoTutorialStore } from '../../../../stores/demoTutorialStore'

describe('ConnectionScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(ConnectionScreen, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            stubActions: false,
            createSpy: vitest.fn,
            initialState: {
              userDemoStore: {
                tutorial: false,
                showNavigationButtons: true
              },
              demoTutorialStore: {
                connectionTutorialFinished: false,
                currentStep: 3
              }
            }
          })
        ]
      }
    })
  })

  test('Mount Connection Screen Component', () => {
    expect(wrapper.find('[data-type=connectionTitle]').exists()).toBe(true)
    expect(wrapper.find('[data-type=lessonTextContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=scrollHandAnimation]').exists()).toBe(false)
    expect(wrapper.find('[data-type=startConnectionTutorialButton]').exists()).toBe(true)
  })

  test("Start Tutorial 'Create Connection'", async () => {
    const userDemoStore = useUserDemoStore()
    const demoTutorialStore = useDemoTutorialStore()

    expect(userDemoStore.getTutorial).toBe(false)
    expect(userDemoStore.getShowNavigationButtons).toBe(true)
    expect(demoTutorialStore.getCurrentTutorial).toBe(null)
    expect(demoTutorialStore.getCurrentStep).toBe(3)

    await wrapper.find('[data-type=startConnectionTutorialButton]').trigger('click')

    expect(userDemoStore.getTutorial).toBe(true)
    expect(userDemoStore.getShowNavigationButtons).toBe(false)
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getConnectionTutorialName)
    expect(demoTutorialStore.getCurrentStep).toBe(1)
  })
})
