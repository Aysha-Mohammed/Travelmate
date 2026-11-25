import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login({ onNavigate, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const userData = {
      name: isSignUp ? name : email.split('@')[0],
      email: email,
    }
    onLoginSuccess(userData)
  }

  return (
    <div className="website">
      <Navbar onNavigate={onNavigate} />

      <main className="login-page-container">
        <div className="login-split-wrapper">
          {/* Left Side: Form */}
          <div className="login-form-side">
            <div className="login-header-content">
              <p className="eyebrow">{isSignUp ? 'START YOUR JOURNEY' : 'WELCOME BACK'}</p>
              <h1>{isSignUp ? 'Create an account' : 'Log in to Travelmate'}</h1>
              <p className="login-subtext">
                {isSignUp
                  ? 'Sign up to save destinations, plan trips, and explore the world.'
                  : 'Enter your details to access your saved adventures.'}
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                />
              </div>

              <button type="submit" className="nav-button auth-submit-btn">
                {isSignUp ? 'Create Account →' : 'Log In →'}
              </button>
            </form>

            <div className="auth-switch-prompt">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                className="text-toggle-btn"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </div>
          </div>

          {/* Right Side: Travel Image */}
          <div className="login-image-side">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
              alt="Tropical beach paradise"
            />
            <div className="login-image-overlay-card">
              <span>✦</span>
              <div>
                <strong>Explore without limits</strong>
                <p>Your passport to unforgettable journeys</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default Login