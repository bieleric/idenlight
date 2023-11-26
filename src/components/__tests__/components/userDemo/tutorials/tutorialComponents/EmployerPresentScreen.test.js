import { mount } from '@vue/test-utils'
import EmployerPresentScreen from '../../../../../userDemo/tutorials/TutorialComponents/EmployerPresentScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'

describe('EmployerPresentScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(EmployerPresentScreen, {
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

  test('Mount Employer Present Screen Component', () => {
    expect(wrapper.find('[data-type=employerWebsiteContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=presentQRCode]').exists()).toBe(true)
  })
})
