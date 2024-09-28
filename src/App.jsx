import { Route, Routes } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Ranking from './pages/Ranking.jsx'
import Prices from './pages/Prices.jsx'
import Rules from './pages/Rules.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={< Ranking />} />
          <Route path="/prices" element={< Prices />} />
          <Route path="/rules" element={< Rules />} />+
        </Routes>
      </div>
    </>
  )
}

export default App
