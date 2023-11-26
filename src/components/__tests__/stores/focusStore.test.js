import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, test } from 'vitest'
import { useFocusStore } from '../../../stores/focusStore'

describe('Focus Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('User is active on initialization', () => {
    const focusStore = useFocusStore()

    expect(focusStore.userActive).toBe(true)
  })

  test('Deactivate User Selection', () => {
    const focusStore = useFocusStore()
    focusStore.toggleUserActive(false)

    expect(focusStore.userActive).toBe(false)
  })

  test('Activate User Selection', () => {
    const focusStore = useFocusStore()
    focusStore.toggleUserActive(true)

    expect(focusStore.userActive).toBe(true)
  })

  test('Get Focus Selection', () => {
    const focusStore = useFocusStore()
    const userActive = focusStore.getUserActive

    expect(userActive).toBe(true)
  })
})
