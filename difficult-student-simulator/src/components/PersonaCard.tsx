import type { Persona } from '../types'

export default function PersonaCard({ p, selected, onPick }:{ p: Persona, selected?: boolean, onPick?: ()=>void }){
  return (
    <button onClick={onPick} className={`card w-full text-left p-4 hover:shadow-lg transition ${selected?'ring-2 ring-blue-600':''}`}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{p.grade} • {p.summary}</p>
        </div>
        <span className="text-xs rounded-full px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">{p.difficulty}</span>
      </div>
      <div className="mt-2 text-sm">
        <strong>Traits:</strong> {p.traits.join(', ')}
      </div>
    </button>
  )
}
