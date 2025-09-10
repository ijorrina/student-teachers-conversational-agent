import { describe, it, expect } from 'vitest'
import { useSessionStore } from '../src/store/useSessionStore'

describe('store', () => {
  it('adds messages', () => {
    const { addMessage, messages } = useSessionStore.getState()
    addMessage({ role:'user', content:'hello', ts: Date.now() })
    expect(useSessionStore.getState().messages.length).toBe(messages.length + 1)
  })
})
