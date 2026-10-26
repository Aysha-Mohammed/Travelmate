
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function DestinationDetails({ destination, onNavigate }) {
  if (!destination) {
    return (
      <div className="website">
        <Navbar onNavigate={onNavigate} />
        <main className="explore-page">
          <h1>No destination selected</h1>
          <button
            className="nav-button"
            onClick={() => onNavigate('explore')}
          >
            Explore destinations
          </button>
        </main>
        <Footer onNavigate={onNavigate} />
      </div>
    )
  }

  return (
    <div className="website">
      <Navbar onNavigate={onNavigate} />

      <main className="details-page">
        <img
          className="details-image"
          src={destination.image}
          alt={destination.name}
        />

        <p className="eyebrow">DISCOVER YOUR NEXT ADVENTURE</p>

        <h1>{destination.name}</h1>

        <h3>{destination.country}</h3>

        <p className="details-description">
          {destination.description}. Start exploring the attractions,
          historical landmarks, shopping areas, and accommodation
          options available at this destination.
        </p>

        <div className="details-actions">
          <button
            className="nav-button"
            onClick={() => onNavigate('explore')}
          >
            Explore other destinations
          </button>

          <button
            className="secondary-button"
            onClick={() => onNavigate('home')}
          >
            Back to Home
          </button>
        </div>

        <p className="details-note">
          Detailed attractions, hotels, and map directions will be
          added when we connect real travel data.
        </p>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default DestinationDetails
