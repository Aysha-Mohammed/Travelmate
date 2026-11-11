function Navbar({ onNavigate, user, onLogout }) {
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

      <div className="nav-auth-section">
        {user ? (
          <div className="user-profile-nav">
            <span className="user-greeting">Hi, {user.name}</span>
            <button className="secondary-button logout-btn" onClick={onLogout}>
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="nav-button"
            onClick={(event) => {
              event.preventDefault()
              console.log("Sign In button clicked!")
              onNavigate('login')
            }}
          >
            Sign In / Up
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
