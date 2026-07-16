import { HashRouter, Routes, Route } from 'react-router-dom'
import StoryPage from './pages/StoryPage'
import TerminalPage from './pages/TerminalPage'


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StoryPage />} />
        <Route path="/terminal" element={<TerminalPage />} />
      </Routes>
    </HashRouter>
  )
}
