
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
    </div>
  )
}

export default App
