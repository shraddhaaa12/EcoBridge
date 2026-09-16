import Register from "./Register";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  if (showRegister) {
    return <Register />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login functionality will be connected to the backend soon!");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          🌱 EcoBridge
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Sign in to continue your sustainability journey.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-password">
            Forgot password?
          </div>

          <button
            type="submit"
            className="auth-btn"
          >
            Sign In →
          </button>

        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="signup-text">
          Don't have an account?{" "}

          <span onClick={() => setShowRegister(true)}>
            Create an account
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;