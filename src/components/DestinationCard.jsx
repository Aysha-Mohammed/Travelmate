
function DestinationCard({ destination, onSelect }) {
  return (
    <article className="destination-card">
      <img
        src={destination.image}
        alt={`${destination.name} destination`}
      />

      <div className="card-info">
        <p>{destination.country.toUpperCase()}</p>

        <h3>{destination.name}</h3>

        <span>{destination.description}</span>

        <button
          className="card-button"
          onClick={() => onSelect(destination)}
        >
          Discover destination →
        </button>
      </div>
    </article>
  )
}

export default DestinationCard
