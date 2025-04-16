import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]); // Array to store error messages
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = []; // Array to store confirmed error messages

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.push("Please enter a valid email address :(");
    }

    // Validate password (must be at least 8 characters)
    if (!password.trim() || password.length < 8) {
      newErrors.push("Password must be at least 8 characters long :(");
    }

    // If there are any errors, display them and do not submit the form
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Reset errors if input is valid, then proceed with login
    setErrors([]);
    onLogin({ email, password });

    // Navigate to /todo after a successful login
    navigate("/todo");
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Display all error messages if there are any */}
      {errors.length > 0 && (
        <div className="error-container">
          {errors.map((error, index) => (
            <p key={index} className="error-message">{error}</p>
          ))}
        </div>
      )}

      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </form>
  );
}

export default Login;