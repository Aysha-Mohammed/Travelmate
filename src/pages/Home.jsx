
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import Footer from '../components/Footer'
import { destinations } from '../data/destinations'

function Home({ onNavigate, onSearch, onDestinationSelect, user, onLogout }) {
  return (
    <div className="website">
      <Navbar onNavigate={onNavigate} user={user} onLogout={onLogout} />

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
