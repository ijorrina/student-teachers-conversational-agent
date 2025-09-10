import { personas } from '../lib/personas'
import PersonaCard from '../components/PersonaCard'
import { useState } from 'react'
import { useSessionStore } from '../store/useSessionStore'
import { useNavigate, Link } from 'react-router-dom'

export default function Scenario(){
  const nav = useNavigate()
  const { setPersona, setScenario } = useSessionStore()
  const [selected, setSelected] = useState<string>('')

  const [tone, setTone] = useState('restorative')
  const [objective, setObjective] = useState('Repair the relationship and set clear expectations.')
  const [limit, setLimit] = useState(8)

  function continueNext(){
    const p = personas.find(p=>p.id===selected) || personas[0]
    setPersona(p)
    setScenario({
      id: crypto.randomUUID(),
      title: 'Default Scenario',
      context: 'Short hallway conversation after class about recent behavior.',
      constraints: 'Keep it under 10 minutes; school policy on device use applies.',
      tone: tone as any,
      timeLimitMin: limit,
      objective,
      personaId: p.id
    })
    nav('/chat')
  }

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Pick a Persona</h2>
        <Link to="/" className="text-sm">Back</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personas.map(p=>(
          <PersonaCard key={p.id} p={p} selected={selected===p.id} onPick={()=>setSelected(p.id)} />
        ))}
      </div>

      <div className="card p-4 space-y-3">
        <h3 className="font-semibold">Scenario Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <label className="label">Tone
            <select className="input mt-1" value={tone} onChange={e=>setTone(e.target.value)}>
              <option value="warm">Warm</option>
              <option value="firm">Firm</option>
              <option value="restorative">Restorative</option>
              <option value="authoritative">Authoritative</option>
            </select>
          </label>
          <label className="label">Time limit (min)
            <input type="number" className="input mt-1" value={limit} onChange={e=>setLimit(parseInt(e.target.value || '8'))} />
          </label>
          <label className="label">Objective
            <input className="input mt-1" value={objective} onChange={e=>setObjective(e.target.value)} />
          </label>
        </div>
        <div className="flex justify-end">
          <button className="btn-primary" onClick={continueNext}>Continue to Chat</button>
        </div>
      </div>
    </div>
  )
}
