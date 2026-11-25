
import { useState } from 'react'
import Navbar from '../components/Navbar'
import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'
import { destinations } from '../data/destinations'

function Explore({
  onNavigate,
  onSearch,
  onDestinationSelect,
  initialQuery = '',
  user,
  onLogout,
}) {
  const [query, setQuery] = useState(initialQuery)

  const filteredPlaces = destinations.filter((place) => {
    const searchText = query.toLowerCase().trim()

    return (
      place.name.toLowerCase().includes(searchText) ||
      place.country.toLowerCase().includes(searchText)
    )
  })

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <div className="website">
      <Navbar onNavigate={onNavigate} user={user} onLogout={onLogout} />

      <main className="explore-page">
        <p className="eyebrow">YOUR NEXT ADVENTURE</p>
        <h1>Explore destinations</h1>

        <p className="explore-description">
          Search for a city or country and discover your next trip.
        </p>

        <form className="search-box explore-search" onSubmit={handleSubmit}>
          <span>📍</span>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Enter a city or country..."
            aria-label="Search cities or countries"
          />

          <button type="submit">Search →</button>
        </form>

        <div className="section-heading">
          <div>
            <p className="eyebrow">TRAVEL INSPIRATION</p>
            <h2>
              {query.trim() ? `Results for "${query}"` : 'Popular destinations'}
            </h2>
          </div>
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="destination-grid">
            {filteredPlaces.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                onSelect={onDestinationSelect}
              />
            ))}
          </div>
        ) : (
          <p className="no-results">
            No matching destinations found. Try{' '}
            {destinations.map((place) => place.name).join(', ')}.
          </p>
        )}
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Explore
