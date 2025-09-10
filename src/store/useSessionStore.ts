import { create } from 'zustand'
import type { Message, Persona, Scenario, RubricWeights } from '../types'
import { defaultWeights } from '../lib/rubrics'

type State = {
  persona?: Persona
  scenario?: Scenario
  messages: Message[]
  mode: 'chat' | 'paused'
  rubricWeights: RubricWeights
  escalation: number
}

type Actions = {
  setPersona: (p: Persona) => void
  setScenario: (s: Scenario) => void
  addMessage: (m: Message) => void
  setMode: (m: 'chat' | 'paused') => void
  setEscalation: (v: number) => void
  reset: () => void
}

export const useSessionStore = create<State & Actions>((set) => ({
  persona: undefined,
  scenario: undefined,
  messages: [],
  mode: 'chat',
  rubricWeights: defaultWeights,
  escalation: 10,
  setPersona: (persona) => set({ persona }),
  setScenario: (scenario) => set({ scenario }),
  addMessage: (m) => set((s) => ({ messages: [...s.messages, m] })),
  setMode: (mode) => set({ mode }),
  setEscalation: (v) => set({ escalation: Math.max(0, Math.min(100, v)) }),
  reset: () => set({ messages: [], mode: 'chat', escalation: 10 })
}))
