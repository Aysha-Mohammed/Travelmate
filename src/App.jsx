
import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Explore from './pages/Explore'
import DestinationDetails from './pages/DestinationDetails'

function App() {
  const [page, setPage] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDestination, setSelectedDestination] = useState(null)

  function handleNavigate(nextPage) {
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

  if (page === 'explore') {
    return (
      <Explore
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        onDestinationSelect={handleDestinationSelect}
        initialQuery={searchQuery}
      />
    )
  }

  if (page === 'details') {
    return (
      <DestinationDetails
        destination={selectedDestination}
        onNavigate={handleNavigate}
      />
    )
  }

  return (
    <Home
      onNavigate={handleNavigate}
      onSearch={handleSearch}
      onDestinationSelect={handleDestinationSelect}
    />
  )
}

export default App

