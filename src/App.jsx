import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Alerts from './pages/Alerts'
import MonitorPage from './pages/MonitorPage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xl">CyberShield</span>
                </div>
                <nav className="hidden md:ml-10 md:flex space-x-4">
                  <NavLink to="/" className={({isActive}) => 
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  } end>
                    Home
                  </NavLink>
                  <NavLink to="/dashboard" className={({isActive}) => 
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }>
                    Dashboard
                  </NavLink>
                  <NavLink to="/alerts" className={({isActive}) => 
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }>
                    Alerts
                  </NavLink>
                  <NavLink to="/monitor" className={({isActive}) => 
                    isActive ? "nav-link nav-link-active" : "nav-link"
                  }>
                    Network Monitor
                  </NavLink>
                </nav>
              </div>
              
              <div className="flex items-center">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Start Scan
                </button>
                <div className="ml-4 relative">
                  <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-sm font-medium">US</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  <svg 
                    className="h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-4 space-y-1">
                <NavLink to="/" className={({isActive}) => 
                  isActive 
                    ? "block px-3 py-2 text-blue-600 font-medium bg-blue-50"
                    : "block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50"
                } end>
                  Home
                </NavLink>
                <NavLink to="/dashboard" className={({isActive}) => 
                  isActive 
                    ? "block px-3 py-2 text-blue-600 font-medium bg-blue-50"
                    : "block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50"
                }>
                  Dashboard
                </NavLink>
                <NavLink to="/alerts" className={({isActive}) => 
                  isActive 
                    ? "block px-3 py-2 text-blue-600 font-medium bg-blue-50"
                    : "block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50"
                }>
                  Alerts
                </NavLink>
                <NavLink to="/monitor" className={({isActive}) => 
                  isActive 
                    ? "block px-3 py-2 text-blue-600 font-medium bg-blue-50"
                    : "block px-3 py-2 text-gray-700 font-medium hover:bg-gray-50"
                }>
                  Network Monitor
                </NavLink>
              </div>
            </div>
          )}
        </header>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/monitor" element={<MonitorPage />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2025 CyberShield Threat Detection System. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
