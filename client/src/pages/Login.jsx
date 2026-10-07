import Register from "./Register";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Check existing login session and listen for auth changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show Register page
  if (showRegister) {
    return <Register />;
  }

  // Email + Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setUser(data.user);
    setMessage("Login successful! 🎉");
    setLoading(false);
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setMessage("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      setMessage(error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMessage("");
  };

  // Logged-in state
  if (user) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-logo">🌱 EcoBridge</div>

          <h1>Welcome, {user.user_metadata?.full_name || user.email}!</h1>

          <p className="auth-subtitle">
            You are successfully signed in to EcoBridge.
          </p>

          <p className="auth-subtitle">
            Email: <strong>{user.email}</strong>
          </p>

          <button
            type="button"
            className="auth-btn"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🌱 EcoBridge</div>

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
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In →"}
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

        <button
          type="button"
          className="google-btn"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </button>

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