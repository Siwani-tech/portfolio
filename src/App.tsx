import { HashRouter, Routes, Route } from 'react-router-dom'
import StoryPage from './pages/StoryPage'
import TerminalPage from './pages/TerminalPage'

// HashRouter is used (URLs like /#/terminal) instead of BrowserRouter.
// GitHub Pages serves static files with no server-side routing, so a
// plain BrowserRouter would 404 on refresh at /terminal. HashRouter
// sidesteps that entirely with zero extra server config.
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
