
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'

const destinations = [
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

function Home({ onNavigate, onSearch, onDestinationSelect }) {
  return (
    <div className="website">
      <Navbar onNavigate={onNavigate} />

      <main>
        <Hero onSearch={onSearch} />

        <section className="destinations" id="destinations">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE THE WORLD</p>
              <h2>Popular destinations</h2>
            </div>

            <p>Find inspiration for your next getaway.</p>
          </div>

          <div className="destination-grid">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                onSelect={onDestinationSelect}
              />
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">TRAVEL SMARTER</p>

          <h2>One place. Endless possibilities.</h2>

          <p>
            From historical landmarks to local markets and
            comfortable stays, TravelMate will help you discover
            everything your destination has to offer.
          </p>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Home
