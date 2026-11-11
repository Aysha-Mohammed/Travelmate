import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Explore from './pages/Explore'
import DestinationDetails from './pages/DestinationDetails'
import Login from './pages/Login'

function App() {
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [user, setUser] = useState(null)

  function handleNavigate(nextPage) {
    console.log("handleNavigate received:", nextPage);
    if (nextPage === 'about' || nextPage === 'destinations') {
      setPage('home')

      setTimeout(() => {
        document
          .getElementById(nextPage)
          ?.scrollIntoView({ behavior: 'smooth' })
      }, 100)

      return
    }

    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleSearch(query) {
    setSearchQuery(query)
    setPage('explore')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleDestinationSelect(destination) {
    setSelectedDestination(destination)
    setPage('details')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleLoginSuccess(userData) {
    setUser(userData)
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleLogout() {
    setUser(null)
    setPage('home')
  }

  
  if (page === 'login') {
    return (
      <Login
        onNavigate={handleNavigate}
        onLoginSuccess={handleLoginSuccess}
      />
    )
  }

  if (page === 'explore') {
    return (
      <Explore
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        onDestinationSelect={handleDestinationSelect}
        initialQuery={searchQuery}
        user={user}
        onLogout={handleLogout}
      />
    )
  }

  if (page === 'details') {
    return (
      <DestinationDetails
        destination={selectedDestination}
        onNavigate={handleNavigate}
        user={user}
        onLogout={handleLogout}
      />
    )
  }

  return (
    <Home
      onNavigate={handleNavigate}
      onSearch={handleSearch}
      onDestinationSelect={handleDestinationSelect}
      user={user}
      onLogout={handleLogout}
    />
  )
}

export default App
