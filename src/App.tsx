import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import CertificateVerification from './pages/CertificateVerification'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certificate/:certificateId" element={<CertificateVerification />} />
      </Routes>
    </Router>
  )
}

export default App