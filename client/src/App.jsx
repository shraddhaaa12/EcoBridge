import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // Show Login page when Login button is clicked
  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          🌱 EcoBridge
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#impact">Impact</a>

          <button
            className="login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => setShowLogin(true)}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="badge">
            ♻️ Building a Greener Tomorrow
          </span>

          <h1>
            Bridging Waste
            <br />
            <span>to the Right Hands.</span>
          </h1>

          <p>
            EcoBridge connects households with recyclers to give
            recyclable waste a second life — making sustainable
            action simple, meaningful, and accessible.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setShowLogin(true)}
            >
              ♻️ Post Your Waste
            </button>

            <button className="secondary-btn">
              Explore How It Works →
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>500+</strong>
              <span>Waste Listings</span>
            </div>

            <div>
              <strong>120+</strong>
              <span>Recyclers</span>
            </div>

            <div>
              <strong>2.5T</strong>
              <span>Waste Recycled</span>
            </div>
          </div>
        </div>

        {/* Hero Visual */}

        <div className="hero-card">
          <div className="floating-card card-one">
            ♻️

            <div>
              <strong>Waste Recycled</strong>
              <span>+24 kg today</span>
            </div>
          </div>

          <div className="earth-circle">
            🌍
          </div>

          <div className="floating-card card-two">
            🌱

            <div>
              <strong>CO₂ Saved</strong>
              <span>18.6 kg</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        className="section"
        id="how-it-works"
      >
        <div className="section-heading">
          <span>HOW ECOBRIDGE WORKS</span>

          <h2>From Waste to Impact</h2>

          <p>
            A simple journey that turns everyday waste
            into environmental impact.
          </p>
        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">01</div>

            <div className="step-icon">
              📦
            </div>

            <h3>Post Waste</h3>

            <p>
              Tell us what recyclable waste you have
              and how much.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">02</div>

            <div className="step-icon">
              🔎
            </div>

            <h3>Find a Recycler</h3>

            <p>
              EcoBridge helps connect your waste with
              suitable recyclers.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">03</div>

            <div className="step-icon">
              🚚
            </div>

            <h3>Schedule Pickup</h3>

            <p>
              Arrange a convenient pickup for your
              recyclable materials.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">04</div>

            <div className="step-icon">
              🌎
            </div>

            <h3>Create Impact</h3>

            <p>
              Track your contribution and see the
              environmental impact.
            </p>
          </div>

        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}

      <section
        className="impact-section"
        id="impact"
      >
        <div>
          <span className="impact-label">
            OUR MISSION
          </span>

          <h2>
            Small Actions.
            <br />
            Big Environmental Impact.
          </h2>

          <p>
            Every kilogram of recyclable waste redirected
            from disposal contributes to a cleaner and more
            sustainable future.
          </p>

          <button
            className="primary-btn"
            onClick={() => setShowLogin(true)}
          >
            Start Making an Impact →
          </button>
        </div>

        <div className="impact-box">

          <div>
            <strong>2,500+</strong>
            <span>kg Waste Diverted</span>
          </div>

          <div>
            <strong>1,200+</strong>
            <span>kg CO₂ Saved</span>
          </div>

          <div>
            <strong>620+</strong>
            <span>People Participating</span>
          </div>

          <div>
            <strong>120+</strong>
            <span>Recycler Partners</span>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="logo">
          🌱 EcoBridge
        </div>

        <p>
          Bridging Waste to the Right Hands.
        </p>

        <span>
          © 2026 EcoBridge. Building a greener tomorrow.
        </span>
      </footer>
    </div>
  );
}

export default App;