import { Route, Routes, Link } from 'react-router-dom'
import Home from './routes/Home'
import Scenario from './routes/Scenario'
import Chat from './routes/Chat'
import Review from './routes/Review'
import TopNav from './components/TopNav'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500">
        Built for practice and learning. No PII stored.
      </footer>
    </div>
  )
}

function NotFound(){
  return (
    <div className="container py-10 text-center space-y-3">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  )
}
