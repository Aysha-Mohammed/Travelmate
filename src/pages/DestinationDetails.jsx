
import { useState } from 'react'
import './DestinationDetails.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationMap from "../components/DestinationMap";
import { destinationGuides } from "../data/destinations";


function DestinationDetails({ destination, onNavigate, user, onLogout }) {

  const destinationName =
    typeof destination === "string"
      ? destination
      : destination?.name;

  const guide = destinationGuides[destinationName];

  const [activePlace, setActivePlace] = useState(null);

  function showOnMap(placeName) {
    setActivePlace(placeName);
    document
      .getElementById("destination-map")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // No guide written for this destination yet: say so instead of
  // quietly showing a different city.
  if (!guide) {
    return (
      <main className="magazine-page">
        <Navbar onNavigate={onNavigate} user={user} onLogout={onLogout} />

        <section className="magazine-intro guide-missing">
          <p className="eyebrow">GUIDE COMING SOON</p>
          <h2>
            {destinationName
              ? `We're still writing our ${destinationName} guide.`
              : "Choose a destination to start exploring."}
          </h2>
          <p>Browse the destinations we already cover in the meantime.</p>

          <button
            type="button"
            className="nav-button"
            onClick={() => onNavigate("explore")}
          >
            Explore destinations →
          </button>
        </section>

        <Footer onNavigate={onNavigate} />
      </main>
    );
  }

  return (
    <main className="magazine-page">

      <Navbar onNavigate={onNavigate} user={user} onLogout={onLogout} />

      {/* COVER */}

      <header className="magazine-cover">
        <img
          src={guide.hero}
          alt={`${destinationName} landscape`}
        />

        <div className="cover-overlay">
          <p>YOUR NEXT JOURNEY BEGINS HERE</p>
          <h1>{destinationName.toUpperCase()}</h1>
          <h2>{guide.tagline}</h2>
          <span>{guide.country.toUpperCase()}</span>
        </div>
      </header>

      {/* INTRODUCTION */}

      <section className="magazine-intro">

        <p className="eyebrow">THE DESTINATION GUIDE</p>

        <h2>A place worth discovering.</h2>

        <p>{guide.intro}</p>

        <div className="best-time">
          <span>BEST TIME TO VISIT</span>
          <strong>{guide.season}</strong>
        </div>

      </section>

      {/* EXPLORE PLACES */}

      <section className="magazine-section">

        <div className="section-heading">
          <span>01 / EXPLORE</span>
          <h2>Places that tell a story</h2>
        </div>

        <div className="magazine-places">

          {guide.places.map((place, index) => (

            <article
              className={`place-story story-${index + 1}`}
              key={place.name}
            >

              <img src={place.image} alt={place.name} />

              <div className="place-caption">
                <span>
                  PLACE {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{place.name}</h3>

                <p>{place.description}</p>

                <button
                  type="button"
                  className="map-link-button"
                  onClick={() => showOnMap(place.name)}
                >
                  📍 View on map
                </button>
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* MAP */}

      <DestinationMap
        destinationName={destinationName}
        country={guide.country}
        places={guide.places}
        cityZoom={guide.mapZoom}
        activePlace={activePlace}
        onSelectPlace={setActivePlace}
      />

      {/* CULTURE AND OCCASIONS */}

      <section className="occasion-section">

        <div className="section-heading">
          <span>03 / CULTURE</span>
          <h2>Celebrate the moments</h2>
        </div>

        <div className="occasion-grid">

          {guide.occasions.map((occasion) => (

            <article
              className="occasion-card"
              key={occasion.name}
            >

              <span>{occasion.date}</span>

              <h3>{occasion.name}</h3>

              <p>{occasion.description}</p>

            </article>

          ))}

        </div>

      </section>

      {/* EXPERIENCES */}

      <section className="experience-section">

        <div className="section-heading">
          <span>04 / EXPERIENCE</span>
          <h2>Make memories here</h2>
        </div>

        <ul className="experience-list">

          {guide.experiences.map((item) => (
            <li key={item}>{item}</li>
          ))}

        </ul>

      </section>

      {/* SHOPPING AND FOOD */}

      <section className="lifestyle-section">

        <div className="lifestyle-column">

          <span className="eyebrow">05 / SHOPPING</span>

          <h2>Take a little piece home.</h2>

          {guide.shopping.map((item) => (
            <p className="lifestyle-item" key={item}>
              {item}
            </p>
          ))}

        </div>

        <div className="lifestyle-column food-column">

          <span className="eyebrow">06 / LOCAL FLAVOURS</span>

          <h2>A taste of the destination.</h2>

          {guide.food.map((item) => (
            <p className="lifestyle-item" key={item}>
              {item}
            </p>
          ))}

        </div>

      </section>

      {/* FOOTER */}

      <Footer onNavigate={onNavigate} />

    </main>
  );
}

export default DestinationDetails;
