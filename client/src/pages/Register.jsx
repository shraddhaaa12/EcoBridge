function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration functionality will be connected to the backend soon!");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          🌱 EcoBridge
        </div>

        <h1>Create Account</h1>

        <p className="auth-subtitle">
          Join EcoBridge and start making a difference.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <label>Account Type</label>
          <select className="auth-select" defaultValue="HOUSEHOLD">
            <option value="HOUSEHOLD">
              Household
            </option>

            <option value="RECYCLER">
              Recycler
            </option>
          </select>

          <button
            type="submit"
            className="auth-btn"
          >
            Create Account →
          </button>

        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <p className="signup-text">
          Already have an account?{" "}
          <span>Sign in</span>
        </p>

      </div>
    </div>
  );
}

export default Register;