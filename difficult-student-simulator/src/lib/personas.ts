import type { Persona } from '../types'

export const personas: Persona[] = [
  {
    id: 'reluctant',
    name: 'Alex (Reluctant Participant)',
    grade: '9th',
    summary: 'Quiet, minimal responses, avoids eye contact.',
    traits: ['minimal responses', 'avoidant', 'low trust'],
    triggers: ['public call-outs', 'rapid questioning'],
    goals: ['avoid embarrassment', 'end convo quickly'],
    difficulty: 'Typical',
    behaviorDials: { assertiveness: 2, brevity: 8, volatility: 3, willingnessToRepair: 4 }
  },
  {
    id: 'disruptor',
    name: 'Jordan (Chronic Disruptor)',
    grade: '10th',
    summary: 'Sarcastic, attention-seeking, tests boundaries.',
    traits: ['sarcasm', 'peer-driven'],
    triggers: ['public correction', 'power struggles'],
    goals: ['gain status', 'avoid accountability'],
    difficulty: 'Hard',
    behaviorDials: { assertiveness: 7, brevity: 6, volatility: 7, willingnessToRepair: 3 }
  },
  {
    id: 'techie',
    name: 'Riley (Off-Task Techie)',
    grade: '8th',
    summary: 'Constantly on device, distracted.',
    traits: ['distractible', 'tech-savvy'],
    triggers: ['device confiscation', 'sudden directives'],
    goals: ['keep device', 'avoid work'],
    difficulty: 'Typical',
    behaviorDials: { assertiveness: 5, brevity: 6, volatility: 4, willingnessToRepair: 5 }
  },
  {
    id: 'anxious',
    name: 'Sam (Anxious Perfectionist)',
    grade: '7th',
    summary: 'Fearful of failure, seeks reassurance.',
    traits: ['rumination', 'hesitation'],
    triggers: ['tight deadlines', 'public critique'],
    goals: ['avoid mistakes', 'stay safe'],
    difficulty: 'Easy',
    behaviorDials: { assertiveness: 3, brevity: 5, volatility: 3, willingnessToRepair: 7 }
  },
  {
    id: 'absentee',
    name: 'Casey (Frequent Absentee)',
    grade: '11th',
    summary: 'Defensive about absences, gaps in understanding.',
    traits: ['defensive', 'ashamed'],
    triggers: ['public attendance talk', 'accusations'],
    goals: ['save face', 'reduce workload'],
    difficulty: 'Typical',
    behaviorDials: { assertiveness: 6, brevity: 6, volatility: 5, willingnessToRepair: 4 }
  },
  {
    id: 'dominator',
    name: 'Taylor (High-Flyer Dominator)',
    grade: '12th',
    summary: 'Over-participates, steamrolls peers.',
    traits: ['confident', 'impatient'],
    triggers: ['being slowed down', 'peer critique'],
    goals: ['control discussion', 'get high marks'],
    difficulty: 'Typical',
    behaviorDials: { assertiveness: 8, brevity: 5, volatility: 4, willingnessToRepair: 5 }
  },
  {
    id: 'misunderstood',
    name: 'Morgan (Culturally Misunderstood)',
    grade: '9th',
    summary: 'Sensitive around identity; seeks respect.',
    traits: ['watchful', 'values fairness'],
    triggers: ['microaggressions', 'biased assumptions'],
    goals: ['be respected', 'be understood'],
    difficulty: 'Typical',
    behaviorDials: { assertiveness: 6, brevity: 5, volatility: 6, willingnessToRepair: 6 }
  },
  {
    id: 'dishonesty',
    name: 'Quinn (Academic Dishonesty Suspect)',
    grade: '10th',
    summary: 'Evasive when questioned about work.',
    traits: ['evasiveness', 'excuse-making'],
    triggers: ['accusatory tone', 'public confrontation'],
    goals: ['avoid consequences'],
    difficulty: 'Hard',
    behaviorDials: { assertiveness: 5, brevity: 6, volatility: 6, willingnessToRepair: 3 }
  }
]
