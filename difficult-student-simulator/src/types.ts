export type Difficulty = 'Easy' | 'Typical' | 'Hard'

export interface Persona {
  id: string
  name: string
  grade: string
  summary: string
  traits: string[]
  triggers: string[]
  goals: string[]
  difficulty: Difficulty
  behaviorDials: { assertiveness: number; brevity: number; volatility: number; willingnessToRepair: number }
}

export interface Scenario {
  id: string
  title: string
  context: string
  constraints: string
  tone: 'warm' | 'firm' | 'restorative' | 'authoritative'
  timeLimitMin: number
  objective: string
  personaId: string
}

export interface RubricWeights {
  relationship: number
  deescalation: number
  clarity: number
  equity: number
  questioning: number
  collaboration: number
  closure: number
}

export interface Message {
  role: 'user' | 'student' | 'coach' | 'system'
  content: string
  ts: number
}
