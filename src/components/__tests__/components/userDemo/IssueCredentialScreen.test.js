import { mount } from '@vue/test-utils'
import IssueCredentialScreen from '../../../userDemo/IssueCredentialScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'
import { useUserDemoStore } from '../../../../stores/userDemoStore'
import { useDemoTutorialStore } from '../../../../stores/demoTutorialStore'

describe('IssueCredentialScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(IssueCredentialScreen, {
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
                currentStep: 3,
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

  test('Mount Issue Credential Component', () => {
    expect(wrapper.find('[data-type=issueCredentialTitle]').exists()).toBe(true)
    expect(wrapper.find('[data-type=lessonTextContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=scrollHandAnimation]').exists()).toBe(false)
    expect(wrapper.find('[data-type=startIssueCredentialButton]').exists()).toBe(true)
  })

  test("Don't Start Tutorial 'Issue Credential' if Tutorial 'Create Connection' isn't finished", async () => {
    const userDemoStore = useUserDemoStore()
    const demoTutorialStore = useDemoTutorialStore()

    expect(userDemoStore.getTutorial).toBe(false)
    expect(userDemoStore.getShowNavigationButtons).toBe(true)
    expect(demoTutorialStore.getCurrentTutorial).toBe(null)
    expect(demoTutorialStore.getCurrentStep).toBe(3)
    expect(wrapper.find('[data-type=warningAlert]').exists()).toBe(false)

    await wrapper.find('[data-type=startIssueCredentialButton]').trigger('click')

    expect(userDemoStore.getTutorial).toBe(false)
    expect(userDemoStore.getShowNavigationButtons).toBe(true)
    expect(demoTutorialStore.getCurrentTutorial).toBe(null)
    expect(demoTutorialStore.getCurrentStep).toBe(3)
    expect(wrapper.find('[data-type=warningAlert]').exists()).toBe(true)
  })

  test("Start Tutorial 'Issue Credential' if Tutorial 'Create Connection' is finished", async () => {
    const userDemoStore = useUserDemoStore()
    const demoTutorialStore = useDemoTutorialStore()

    demoTutorialStore.setConnectionTutorialFinished()

    expect(userDemoStore.getTutorial).toBe(false)
    expect(userDemoStore.getShowNavigationButtons).toBe(true)
    expect(demoTutorialStore.getCurrentTutorial).toBe(null)
    expect(demoTutorialStore.getCurrentStep).toBe(3)
    expect(wrapper.find('[data-type=warningAlert]').exists()).toBe(false)

    await wrapper.find('[data-type=startIssueCredentialButton]').trigger('click')

    expect(userDemoStore.getTutorial).toBe(true)
    expect(userDemoStore.getShowNavigationButtons).toBe(false)
    expect(demoTutorialStore.getCurrentTutorial).toBe(demoTutorialStore.getIssueTutorialName)
    expect(demoTutorialStore.getCurrentStep).toBe(1)
    expect(wrapper.find('[data-type=warningAlert]').exists()).toBe(false)
  })
})
