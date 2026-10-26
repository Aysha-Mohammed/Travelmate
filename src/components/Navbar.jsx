
function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <a
        href="#home"
        className="logo"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('home')
        }}
      >
        <span>✈</span> TravelMate
      </a>

      <div className="nav-links">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('home')
          }}
        >
          Home
        </a>

        <a
  href="#destinations"
  onClick={(event) => {
    event.preventDefault()
    onNavigate('destinations')
  }}
>
  Destinations
</a>

        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('about')
          }}
        >
          About
        </a>
      </div>

      <button
  className="nav-button"
  onClick={() => onNavigate('destinations')}
>
  Explore Now
</button>
    </nav>
  )
}

export default Navbar
