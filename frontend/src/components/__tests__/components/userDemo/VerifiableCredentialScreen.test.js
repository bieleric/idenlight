import { mount } from '@vue/test-utils'
import VerifiableCredentialScreen from '../../../userDemo/VerifiableCredentialScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../i18n'

describe('VerifiableCredentialScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(VerifiableCredentialScreen, {
      global: {
        plugins: [i18n]
      }
    })
  })

  test('Mount Verifiable Credential Screen Component', () => {
    expect(wrapper.find('[data-type=verifiableCredentialTitle]').exists()).toBe(true)
    expect(wrapper.find('[data-type=lessonTextContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=scrollHandAnimation]').exists()).toBe(false)
  })
})
