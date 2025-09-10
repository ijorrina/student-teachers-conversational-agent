import { Link } from 'react-router-dom'

export default function TopNav() {
  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur sticky top-0 z-10">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="font-semibold">Difficult Student Simulator</Link>
        <div className="flex items-center gap-3">
          <Link to="/scenario" className="btn">Start Practice</Link>
          <a href="https://www.netlify.com" target="_blank" className="text-sm">Deploy</a>
        </div>
      </div>
    </nav>
  )
}
