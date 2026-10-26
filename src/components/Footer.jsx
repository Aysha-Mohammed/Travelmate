
function Footer({ onNavigate }) {
  return (
    <footer>
      <a
        href="#home"
        className="logo"
        onClick={(event) => {
          event.preventDefault()
          onNavigate('home')
        }}
      >
        ✈ TravelMate
      </a>

      <p>Explore more. Worry less. Travel better.</p>
    </footer>
  )
}

export default Footer
