import { mount } from '@vue/test-utils'
import HTWDresdenWebsiteTemplate from '../../../../userDemo/tutorials/HTWDresdenWebsiteTemplate.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'
import { useDemoTutorialStore } from '../../../../../stores/demoTutorialStore'

describe('HTWDresdenWebsiteTemplate.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(HTWDresdenWebsiteTemplate, {
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

  test('Mount HTW Dresden Website Template Component', () => {
    expect(wrapper.find('[data-type=HTWWebsite]').exists()).toBe(true)
    expect(wrapper.find('[data-type=HTWCreateConnectionScreen]').exists()).toBe(false)
    expect(wrapper.find('[data-type=HTWIssueCredentialScreen]').exists()).toBe(false)
  })

  test('Mount HTW Dresden Website Template With HTW Dresden Connection Screen', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToConnectionTutorial()
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getConnectionTutorialName)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-type=HTWCreateConnectionScreen]').exists()).toBe(true)
    expect(wrapper.find('[data-type=HTWIssueCredentialScreen]').exists()).toBe(false)
  })

  test('Mount HTW Dresden Website Template With HTW Issue Credential Screen', async () => {
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setCurrentTutorialToIssueTutorial()
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getIssueTutorialName)

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-type=HTWCreateConnectionScreen]').exists()).toBe(false)
    expect(wrapper.find('[data-type=HTWIssueCredentialScreen]').exists()).toBe(true)
  })
})
