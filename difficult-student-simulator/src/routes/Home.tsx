import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container py-10">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Difficult Student Simulator</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Practice challenging student conversations in a safe space. Choose a persona, set a scenario, role‑play, then get feedback.
        </p>
        <Link to="/scenario" className="btn-primary">Start Practice</Link>
      </div>
    </div>
  )
}
