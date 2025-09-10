import { useEffect, useRef, useState } from 'react'
import { useSessionStore } from '../store/useSessionStore'
import type { Message } from '../types'
import { chatApi } from '../lib/api'

export default function ChatPane(){
  const { persona, messages, addMessage, mode, setMode, escalation, setEscalation } = useSessionStore()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}) },[messages])

  async function send(role:'user'|'coach'){
    if (!input.trim()) return
    const userMsg: Message = { role: 'user', content: input.trim(), ts: Date.now() }
    addMessage(userMsg)
    setInput('')
    setLoading(true)
    try {
      const res = await chatApi({ role: role==='coach'?'coach':'student', messages: [...messages, userMsg], persona, mode })
      const reply: Message = { role: role==='coach'?'coach':'student', content: res.reply, ts: Date.now() }
      addMessage(reply)
      setEscalation(escalation + (role==='coach' ? -5 : (userMsg.content.includes('now') ? 8 : 2)))
    } catch (e:any) {
      addMessage({ role: 'system', content: 'Error contacting serverless function. Check Netlify logs.', ts: Date.now() })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card p-4 h-[70vh] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm">Mode: <strong>{mode === 'chat' ? 'Role-play' : 'Coach Paused'}</strong></div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Escalation:</span>
          <div className="w-48 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-2 bg-blue-600" style={{ width: `${escalation}%` }} />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto space-y-3 pr-1">
        {messages.map((m,i)=>(
          <div key={i} className={`max-w-[80%] ${m.role==='user'?'ml-auto':''}`}>
            <div className={`px-3 py-2 rounded-2xl border text-sm ${m.role==='user'?'bg-blue-600 text-white border-blue-600':'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'}`}>
              <strong className="mr-2">{m.role === 'user' ? 'You' : (m.role === 'coach' ? 'Coach' : 'Student')}</strong>
              <span>{m.content}</span>
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="mt-3 flex gap-2">
        <input className="input" placeholder={mode==='chat'?'Say something to the student…':'Ask the coach a question…'} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter') send(mode==='chat'?'user':'coach') }} />
        <button className="btn-primary" onClick={()=>send(mode==='chat'?'user':'coach')} disabled={loading}>{loading?'…':'Send'}</button>
        <button className="btn" onClick={()=>setMode(mode==='chat'?'paused':'chat')}>{mode==='chat'?'Pause Coach':'Resume Role-Play'}</button>
      </div>
    </div>
  )
}
