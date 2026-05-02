import { Routes, Route } from 'react-router-dom'

import WhyItMatters from './components/pages/WhyItMatters'
import About from './components/pages/About';
import Nav from './components/layout/Nav'
import Hero from './components/hero/Hero'
import Footer from './components/layout/Footer';
import EnergyForm from './components/calculator/EnergyForm'
import CalculationDetail from './components/results/CalculationDetail'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Nav />
      <main className="text-slate-900 dark:text-slate-100">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Hero />} />

          {/* Calculator Page */}
          <Route path="/calculator" element={<EnergyForm />} />

          {/* Dynamic Route for Details */}
          <Route path="/details/:id" element={<CalculationDetail />} />

          {/* Info Page */}
          <Route path="/why-it-matters" element={<WhyItMatters />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App