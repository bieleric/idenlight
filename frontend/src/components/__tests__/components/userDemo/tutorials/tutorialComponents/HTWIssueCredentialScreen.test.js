import { mount } from '@vue/test-utils'
import HTWIssueCredentialScreenVue from '../../../../../userDemo/tutorials/TutorialComponents/HTWIssueCredentialScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'

describe('HTWIssueCredentialScreenVue.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(HTWIssueCredentialScreenVue, {
      global: {
        plugins: [
          i18n,
          createTestingPinia({
            stubActions: false,
            createSpy: vitest.fn,
            initialState: {
              ssiStore: {}
            }
          })
        ]
      }
    })
  })

  test('Mount HTW Issue Credential Screen Component', () => {
    expect(wrapper.find('[data-type=issueCredentialContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=issueCredentialForm]').exists()).toBe(true)
    expect(wrapper.find('[data-type=issueCredentialButton]').exists()).toBe(true)
  })
})
