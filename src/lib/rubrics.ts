import type { RubricWeights, Message } from '../types'

export const defaultWeights: RubricWeights = { relationship:1, deescalation:1, clarity:1, equity:1, questioning:1, collaboration:1, closure:1 }

export function scoreTranscript(msgs: Message[], w = defaultWeights) {
  const text = msgs.map(m => m.content.toLowerCase()).join(' ')
  const contains = (k: string) => text.includes(k)
  const clamp = (n: number) => Math.max(0, Math.min(4, n))

  const relationship = clamp((contains('thank') as any) + (contains('appreciate') as any) + (contains('listen') as any) + 1)
  const deescalation = clamp((contains('i hear') as any) + (contains('let\'s pause') as any) + (contains('i notice') as any) + 1)
  const clarity = clamp((contains('expect') as any) + (contains('next time') as any) + (contains('deadline') as any) + 1)
  const equity = clamp((contains('fair') as any) + (contains('respect') as any) + (contains('choice') as any) + 1)
  const questioning = clamp((contains('how') as any) + (contains('what') as any) + (contains('can you') as any) + 1)
  const collaboration = clamp((contains('plan') as any) + (contains('together') as any) + (contains('agree') as any) + 1)
  const closure = clamp((contains('summary') as any) + (contains('next step') as any) + (contains('follow up') as any) + 1)

  const raw = { relationship, deescalation, clarity, equity, questioning, collaboration, closure }
  const weighted = Object.fromEntries(Object.entries(raw).map(([k,v]) => [k, v * (w as any)[k]]))
  const totalWeight = Object.values(w).reduce((a,b)=>a+b,0)
  const sum = Object.values(weighted).reduce((a,b)=>a+(b as number),0)
  const outOf = 4 * totalWeight
  const percent = Math.round((sum / outOf) * 100)
  return { raw, weighted, percent }
}
