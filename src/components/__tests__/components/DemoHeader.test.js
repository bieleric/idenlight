import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vitest } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import DemoHeader from '../../DemoHeader.vue'
import { StepProgress } from 'vue-step-progress'

describe('DemoHeader.vue', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(DemoHeader, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              userDemoStore: {
                currentStep: 0,
                steps: ['1', '2', '3', '4', '5', '6', '7']
              }
            }
          })
        ]
      }
    })
  })

  test('Mount Demo Header Component', () => {
    expect(wrapper.find('#logo')).toBeTruthy
    expect(wrapper.find(StepProgress)).toBeTruthy()
  })
})
