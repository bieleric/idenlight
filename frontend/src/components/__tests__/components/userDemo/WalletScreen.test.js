import { mount } from '@vue/test-utils'
import WalletScreen from '../../../userDemo/WalletScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../i18n'

describe('WalletScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(WalletScreen, {
      global: {
        plugins: [i18n]
      }
    })
  })

  test('Mount Wallet Screen Component', () => {
    expect(wrapper.find('[data-type=walletTitle]').exists()).toBe(true)
    expect(wrapper.find('[data-type=lessonTextContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=scrollHandAnimation]').exists()).toBe(false)
  })
})
