import { mount } from '@vue/test-utils'
import HTWCreateConnectionScreen from '../../../../../userDemo/tutorials/TutorialComponents/HTWCreateConnectionScreen.vue'
import { beforeEach, describe, expect, test } from 'vitest'
import i18n from '../../../../../../i18n'
import { createTestingPinia } from '@pinia/testing'
import { vitest } from 'vitest'

describe('HTWCreateConnectionScreen.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(HTWCreateConnectionScreen, {
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

  test('Mount HTW Create Connection Screen Component', () => {
    expect(wrapper.find('[data-type=HTWCreateConnectionContainer]').exists()).toBe(true)
    expect(wrapper.find('[data-type=ConnectionQRCode]').exists()).toBe(true)
  })
})
