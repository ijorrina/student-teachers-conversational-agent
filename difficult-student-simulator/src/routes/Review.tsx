import { useMemo } from 'react'
import { useSessionStore } from '../store/useSessionStore'
import { scoreTranscript } from '../lib/rubrics'
import ExportButtons from '../components/ExportButtons'
import { Link } from 'react-router-dom'

export default function Review(){
  const { messages, rubricWeights } = useSessionStore()
  const results = useMemo(()=>scoreTranscript(messages, rubricWeights), [messages, rubricWeights])

  return (
    <div className="container py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Feedback & Reflection</h2>
        <Link to="/chat" className="btn">Back to Chat</Link>
      </div>

      <div className="card p-4">
        <div className="text-lg font-semibold">Overall Score: {results.percent}%</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          {Object.entries(results.raw).map(([k,v])=>(
            <div key={k} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="text-sm font-medium capitalize">{k}</div>
              <div className="mt-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-2 bg-blue-600" style={{ width: `${(v/4)*100}%` }} />
              </div>
              <div className="text-xs mt-1">{v}/4</div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4 space-y-2">
        <h3 className="font-semibold">Actionable Next Time</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>Name the impact on learning and offer a specific choice (e.g., “You can…” vs “You must…”).</li>
          <li>Ask one open question, then wait 5 seconds before following up.</li>
          <li>Close with a summary, clear next step, and time to check back.</li>
        </ul>
      </div>

      <div className="card p-4 space-y-2">
        <h3 className="font-semibold">Export</h3>
        <ExportButtons />
      </div>
    </div>
  )
}
