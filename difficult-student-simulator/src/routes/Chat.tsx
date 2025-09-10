import ChatPane from '../components/ChatPane'
import { Link, useNavigate } from 'react-router-dom'

export default function Chat(){
  const nav = useNavigate()
  return (
    <div className="container py-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Role-Play</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Practice active listening and restorative language.</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/scenario" className="btn">Change Scenario</Link>
          <button className="btn-primary" onClick={()=>nav('/review')}>Get Feedback</button>
        </div>
      </div>
      <ChatPane />
      <p className="text-xs text-slate-500">Tip: Use “Pause Coach” to ask for strategy mid-conversation.</p>
    </div>
  )
}
