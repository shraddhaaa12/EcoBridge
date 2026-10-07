import { useState } from "react";
import { supabase } from "../supabaseClient";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("HOUSEHOLD");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          role: role,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      setMessage(
        "Account created successfully! Please check your email for verification."
      );
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🌱 EcoBridge</div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join EcoBridge and start making a difference.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Account Type</label>

          <select
            className="auth-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="HOUSEHOLD">Household</option>
            <option value="RECYCLER">Recycler</option>
          </select>

          <button
            type="submit"
            className="auth-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account →"}
          </button>
        </form>

        {message && (
          <p className="auth-message">
            {message}
          </p>
        )}

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="signup-text">
          Already have an account?{" "}
          <span onClick={() => window.location.reload()}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;