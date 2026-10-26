
function Hero({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const destination = formData.get('destination').trim()

    if (destination) {
      onSearch(destination)
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">
          YOUR JOURNEY, YOUR WAY
        </p>

        <h1>
          Discover the world.
          <br />
          <span>Find your journey.</span>
        </h1>

        <p className="hero-description">
          Explore amazing destinations, discover hidden gems,
          and plan your next adventure with TravelMate.
        </p>

        <form className="search-box" onSubmit={handleSubmit}>
          <span>📍</span>

          <input
            type="text"
            name="destination"
            placeholder="Where do you want to go?"
            aria-label="Search destination"
            required
          />

          <button type="submit">Explore →</button>
        </form>

        <div className="hero-note">
          <span>✦</span> Your next adventure starts here.
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
          alt="Beautiful mountains waiting to be explored"
        />

        <div className="image-label">
          <span>✦</span>
          <div>
            <strong>Adventure awaits</strong>
            <p>Discover somewhere new</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
