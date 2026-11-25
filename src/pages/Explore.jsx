
import { useState } from 'react'
import Navbar from '../components/Navbar'
import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'

const places = [
  {
    name: 'Paris',
    country: 'France',
    description: 'The city of lights',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Bali',
    country: 'Indonesia',
    description: 'Your tropical escape',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'New York',
    country: 'United States',
    description: 'The city that never sleeps',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=80',
  },
]

function Explore({ onNavigate, onSearch, onDestinationSelect, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery)

  const filteredPlaces = places.filter((place) => {
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
      <Navbar onNavigate={onNavigate} />

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
            No matching sample destinations found. Try Paris, France,
            Bali, Indonesia, New York, or United States.
          </p>
        )}
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Explore
