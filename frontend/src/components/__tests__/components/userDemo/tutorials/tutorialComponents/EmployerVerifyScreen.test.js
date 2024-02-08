import { mount } from '@vue/test-utils'
import EmployerVerifyScreen from '../../../../../userDemo/tutorials/TutorialComponents/EmployerVerifyScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'

describe('EmployerVerifyScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(EmployerVerifyScreen, {
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

  test('Mount Employer Verify Screen Component', () => {
    expect(wrapper.find('[data-type=employerWebsiteContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=verifyCard]').exists()).toBe(true)
    expect(wrapper.find('[data-type=verificationFailedButton]').exists()).toBe(true)
  })
})
