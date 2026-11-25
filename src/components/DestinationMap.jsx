// Interactive map for a destination guide.
// Uses Google Maps' keyless embed, so no API key or extra package is needed.

function buildEmbedUrl(query, zoom) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`
}

function buildDirectionsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function DestinationMap({ destinationName, country, places, activePlace, onSelectPlace, cityZoom = 12 }) {
  // City view when nothing is selected, otherwise zoom in on the chosen place.
  const query = activePlace
    ? `${activePlace}, ${destinationName}, ${country}`
    : `${destinationName}, ${country}`
  const zoom = activePlace ? 15 : cityZoom

  return (
    <section className="map-section" id="destination-map">
      <div className="section-heading">
        <span>02 / MAP</span>
        <h2>Find your way around</h2>
      </div>

      <div className="map-layout">
        <div className="map-places">
          <button
            type="button"
            className={`map-place-button ${!activePlace ? 'active' : ''}`}
            onClick={() => onSelectPlace(null)}
          >
            <span>OVERVIEW</span>
            All of {destinationName}
          </button>

          {places.map((place, index) => (
            <button
              type="button"
              key={place.name}
              className={`map-place-button ${activePlace === place.name ? 'active' : ''}`}
              onClick={() => onSelectPlace(place.name)}
            >
              <span>PLACE {String(index + 1).padStart(2, '0')}</span>
              {place.name}
            </button>
          ))}

          <a
            className="map-open-link"
            href={buildDirectionsUrl(query)}
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="map-frame">
          <iframe
            key={query}
            title={`Map of ${activePlace || destinationName}`}
            src={buildEmbedUrl(query, zoom)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default DestinationMap
