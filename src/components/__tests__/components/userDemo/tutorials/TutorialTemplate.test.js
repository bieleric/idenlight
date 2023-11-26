import { mount } from '@vue/test-utils'
import TutorialTemplate from '../../../../userDemo/tutorials/TutorialTemplate.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'
import { useDemoTutorialStore } from '../../../../../stores/demoTutorialStore'

describe('TutorialTemplate.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(TutorialTemplate, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            stubActions: false,
            createSpy: vitest.fn,
            initialState: {
              demoTutorialStore: {
                currentStep: 1,
                connectionTutorialFinished: false,
                issueTutorialFinished: false,
                presentTutorialFinished: false
              }
            }
          })
        ]
      }
    })
  })

  test('Mount Tutorial Template Component', () => {
    expect(wrapper.find('[data-type=tutorialContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=tutorialTitle]').exists()).toBe(true)
    expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(false)
    expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=closeButton]').exists()).toBe(false)
  })

  test('Check Navigation Of Connection Tutorial', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToConnectionTutorial()
    await wrapper.find('[data-type=incrementButton]').trigger('click')

    expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=closeButton]').exists()).toBe(false)
    expect(demoTutorialStore.getCurrentStep).toBe(2)

    await wrapper.find('[data-type=incrementButton]').trigger('click')

    expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(false)
    expect(wrapper.find('[data-type=closeButton]').exists()).toBe(true)
    expect(demoTutorialStore.getCurrentStep).toBe(3)

    await wrapper.find('[data-type=closeButton]').trigger('click')

    expect(demoTutorialStore.getCurrentStep).toBe(3)
    expect(demoTutorialStore.getConnectionTutorialFinished).toBe(true)
  })

  test('Check Navigation Of Issue Tutorial', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToIssueTutorial()

    for (let i = 1; i < demoTutorialStore.getIssueTutorialSteps - 1; i++) {
      await wrapper.find('[data-type=incrementButton]').trigger('click')

      expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
      expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(true)
      expect(wrapper.find('[data-type=closeButton]').exists()).toBe(false)
      expect(demoTutorialStore.getCurrentStep).toBe(i + 1)
    }

    await wrapper.find('[data-type=incrementButton]').trigger('click')

    expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(false)
    expect(wrapper.find('[data-type=closeButton]').exists()).toBe(true)
    expect(demoTutorialStore.getCurrentStep).toBe(6)

    await wrapper.find('[data-type=closeButton]').trigger('click')

    expect(demoTutorialStore.getCurrentStep).toBe(6)
    expect(demoTutorialStore.getIssueTutorialFinished).toBe(true)
  })

  test('Check Navigation Of Present Tutorial', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToPresentTutorial()

    for (let i = 1; i < demoTutorialStore.getPresentTutorialSteps - 1; i++) {
      await wrapper.find('[data-type=incrementButton]').trigger('click')

      expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
      expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(true)
      expect(wrapper.find('[data-type=closeButton]').exists()).toBe(false)
      expect(demoTutorialStore.getCurrentStep).toBe(i + 1)
    }

    await wrapper.find('[data-type=incrementButton]').trigger('click')

    expect(wrapper.find('[data-type=decrementButton]').exists()).toBe(true)
    expect(wrapper.find('[data-type=incrementButton]').exists()).toBe(false)
    expect(wrapper.find('[data-type=closeButton]').exists()).toBe(true)
    expect(demoTutorialStore.getCurrentStep).toBe(6)

    await wrapper.find('[data-type=closeButton]').trigger('click')

    expect(demoTutorialStore.getCurrentStep).toBe(6)
    expect(demoTutorialStore.getPresentTutorialFinished).toBe(true)
  })
})
