import { mount } from '@vue/test-utils'
import EmployerWebsiteTemplate from '../../../../userDemo/tutorials/EmployerWebsiteTemplate.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'
import { useDemoTutorialStore } from '../../../../../stores/demoTutorialStore'

describe('EmployerWebsiteTemplate.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(EmployerWebsiteTemplate, {
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
                presentTutorialFinished: false,
                currentTutorial: null
              }
            }
          })
        ]
      }
    })
  })

  test('Mount Employer Website Template Component', () => {
    expect(wrapper.find('[data-type=employerWebsite]').exists()).toBe(true)
    expect(wrapper.find('[data-type=presentScreen]').exists()).toBe(false)
    expect(wrapper.find('[data-type=verifyScreen]').exists()).toBe(false)
  })

  test('Mount Employer Website Template With Present Screen', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToPresentTutorial()
    demoTutorialStore.currentStep = 3
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-type=presentScreen]').exists()).toBe(true)
    expect(wrapper.find('[data-type=verifyScreen]').exists()).toBe(false)
  })

  test('Mount Employer Website Template With Verify Screen', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToPresentTutorial()
    demoTutorialStore.currentStep = 6
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getPresentTutorialName)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-type=presentScreen]').exists()).toBe(false)
    expect(wrapper.find('[data-type=verifyScreen]').exists()).toBe(true)
  })
})
