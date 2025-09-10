import { useSessionStore } from '../store/useSessionStore'

export default function ExportButtons(){
  const { messages } = useSessionStore()
  function dl(name: string, content: string){
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
    URL.revokeObjectURL(url)
  }
  return (
    <div className="flex gap-2">
      <button className="btn" onClick={()=>dl('transcript.json', JSON.stringify(messages, null, 2))}>Export JSON</button>
      <button className="btn" onClick={()=>dl('transcript.md', messages.map(m=>`**${m.role.toUpperCase()}**: ${m.content}`).join('\n\n'))}>Export Markdown</button>
    </div>
  )
}
