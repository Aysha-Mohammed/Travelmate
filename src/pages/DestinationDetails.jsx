
import './DestinationDetails.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const destinationGuides = {
  Paris: {
    country: "France",
    tagline: "The city of love, art & timeless beauty.",
    intro:
      "Discover charming streets, historic landmarks, beautiful cafés and unforgettable experiences in the heart of France.",
    season: "April – June and September – October",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1800",

    places: [
      {
        name: "Eiffel Tower",
        description:
          "The iconic symbol of Paris. Enjoy breathtaking city views, explore its observation decks and admire the tower at night.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1000"
      },
      {
        name: "Louvre Museum",
        description:
          "Explore one of the world's greatest art collections, including the famous Mona Lisa and thousands of historic masterpieces.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000"
      },
      {
        name: "Notre-Dame Cathedral",
        description:
          "Discover the remarkable Gothic architecture and history of one of Paris's most celebrated landmarks.",
        image: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=1000"
      },
      {
        name: "Montmartre",
        description:
          "Wander through artistic streets, charming cafés and beautiful viewpoints in this historic Paris neighborhood.",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000"
      }
    ],

    occasions: [
      {
        name: "Bastille Day",
        date: "14 July",
        description:
          "Celebrate France's national day with parades, music, public celebrations and spectacular fireworks."
      },
      {
        name: "Paris Fashion Week",
        date: "Dates vary",
        description:
          "Experience the fashion capital's major designer shows, creative events and stylish atmosphere."
      },
      {
        name: "Christmas Markets",
        date: "November – December",
        description:
          "Enjoy festive decorations, seasonal treats, handmade gifts and beautiful Christmas lights."
      },
      {
        name: "Nuit Blanche",
        date: "Usually in October",
        description:
          "Discover art installations, exhibitions and creative experiences throughout the city at night."
      }
    ],

    experiences: [
      "Take a sightseeing cruise along the River Seine.",
      "Enjoy a picnic near the Eiffel Tower.",
      "Explore the artistic streets of Montmartre.",
      "Visit world-famous museums and galleries.",
      "Enjoy French cafés and traditional bakeries."
    ],

    shopping: [
      "Champs-Élysées – famous fashion and luxury stores.",
      "Galeries Lafayette – a popular department store.",
      "Le Marais – independent boutiques and vintage shops."
    ],

    food: [
      "Croissants",
      "Macarons",
      "Crêpes",
      "French onion soup",
      "Baguettes"
    ]
  },

  Bali: {
    country: "Indonesia",
    tagline: "A tropical escape filled with beauty and adventure.",
    intro:
      "From peaceful beaches to ancient temples and lush green landscapes, Bali offers an unforgettable island experience.",
    season: "April – October",
    hero: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1800",

    places: [
      {
        name: "Uluwatu Temple",
        description:
          "Visit this beautiful sea temple perched on a cliff overlooking the Indian Ocean. Sunset views and traditional performances make it special.",
        image: "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1000"
      },
      {
        name: "Tanah Lot",
        description:
          "A famous ocean temple built on a rock formation. It is especially beautiful during sunset.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1000"
      },
      {
        name: "Tegallalang Rice Terraces",
        description:
          "Walk through beautiful green rice terraces and discover Bali's traditional agricultural landscape.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1000"
      },
      {
        name: "Nusa Penida",
        description:
          "Explore dramatic cliffs, clear blue water and stunning beaches on this island near Bali.",
        image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=1000"
      }
    ],

    occasions: [
      {
        name: "Nyepi – Day of Silence",
        date: "Date varies each year",
        description:
          "Experience the Balinese New Year, a special day of silence, reflection and spiritual renewal."
      },
      {
        name: "Galungan",
        date: "Dates vary",
        description:
          "A major Balinese Hindu celebration marking the victory of good over evil. Streets are decorated with beautiful penjor poles."
      },
      {
        name: "Kuningan",
        date: "Ten days after Galungan",
        description:
          "A religious celebration when families make offerings and take part in traditional ceremonies."
      },
      {
        name: "Bali Arts Festival",
        date: "Usually June – July",
        description:
          "Enjoy traditional dances, music, crafts, cultural performances and local artistic traditions."
      }
    ],

    experiences: [
      "Enjoy swimming and surfing at tropical beaches.",
      "Watch traditional Balinese dance performances.",
      "Explore waterfalls and rice terraces.",
      "Go hiking at Mount Batur.",
      "Try snorkeling and diving.",
      "Take a traditional Balinese cooking class."
    ],

    shopping: [
      "Ubud Art Market – traditional crafts and souvenirs.",
      "Seminyak – boutiques, fashion and accessories.",
      "Kuta – shopping centers and souvenir stores."
    ],

    food: [
      "Nasi Goreng",
      "Mie Goreng",
      "Sate Lilit",
      "Pisang Goreng",
      "Babi Guling"
    ]
  },

  "New York": {
    country: "United States",
    tagline: "The city that never sleeps.",
    intro:
      "Discover towering skyscrapers, famous landmarks, world-class entertainment, exciting neighborhoods and unforgettable city experiences.",
    season: "April – June and September – November",
    hero: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1800",

    places: [
      {
        name: "Statue of Liberty",
        description:
          "Visit one of the world's most recognizable monuments. Take a ferry to Liberty Island and enjoy views of the New York Harbor.",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1000"
      },
      {
        name: "Times Square",
        description:
          "Experience bright digital billboards, entertainment, shopping and the energetic atmosphere of Manhattan.",
        image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1000"
      },
      {
        name: "Central Park",
        description:
          "Escape the busy city with peaceful walking paths, green lawns, lakes and beautiful scenery.",
        image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1000"
      },
      {
        name: "Brooklyn Bridge",
        description:
          "Walk across this historic bridge and enjoy memorable views of the Manhattan skyline.",
        image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1000"
      }
    ],

    occasions: [
      {
        name: "New Year's Eve",
        date: "31 December",
        description:
          "Join the world-famous Times Square countdown and watch the traditional ball drop."
      },
      {
        name: "Thanksgiving Parade",
        date: "November",
        description:
          "Enjoy a spectacular parade featuring giant balloons, marching bands and performances."
      },
      {
        name: "Independence Day",
        date: "4 July",
        description:
          "Celebrate America's national day with fireworks, concerts and special city events."
      },
      {
        name: "New York Fashion Week",
        date: "Dates vary",
        description:
          "Discover designer collections, runway shows and international fashion trends."
      }
    ],

    experiences: [
      "Watch a Broadway musical or theatre performance.",
      "Take a sightseeing cruise around Manhattan.",
      "Walk across the Brooklyn Bridge.",
      "Explore museums and art galleries.",
      "Visit famous skyscraper observation decks.",
      "Enjoy the city's different neighborhoods."
    ],

    shopping: [
      "Fifth Avenue – luxury brands and flagship stores.",
      "SoHo – trendy boutiques and independent shops.",
      "Macy's Herald Square – a famous department store."
    ],

    food: [
      "New York-style pizza",
      "Bagels with cream cheese",
      "New York cheesecake",
      "Hot dogs",
      "Pastrami sandwiches"
    ]
  }
};

function DestinationDetails({ destination, onBack, onNavigate }) {

  const destinationName =
    typeof destination === "string"
      ? destination
      : destination?.name;

  const guide =
    destinationGuides[destinationName] || destinationGuides.Paris;

  return (
    <main className="magazine-page">

      <Navbar onNavigate={onNavigate} />

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
              </div>

            </article>

          ))}

        </div>

      </section>

      {/* CULTURE AND OCCASIONS */}

      <section className="occasion-section">

        <div className="section-heading">
          <span>02 / CULTURE</span>
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
          <span>03 / EXPERIENCE</span>
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

          <span className="eyebrow">04 / SHOPPING</span>

          <h2>Take a little piece home.</h2>

          {guide.shopping.map((item) => (
            <p className="lifestyle-item" key={item}>
              {item}
            </p>
          ))}

        </div>

        <div className="lifestyle-column food-column">

          <span className="eyebrow">05 / LOCAL FLAVOURS</span>

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
