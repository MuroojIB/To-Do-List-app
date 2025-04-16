import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ onSignup }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]); // Array to store multiple error messages

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before starting validation
    setErrors([]);
    const newErrors = []; // Define a new array to hold any validation errors

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.push("Please enter a valid email address :(");
    }

    // Validate password strength (at least 8 characters, including an uppercase letter and a number)
    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      newErrors.push("Password must be at least 8 characters long, include a number and an uppercase letter.");
    }

    // If there are validation errors, display them and stop execution
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Continue processing if the input is valid
    try {
      await onSignup({ name, email, password });
      navigate("/todo");
    } catch (err) {
      setErrors(["Signup failed, please try again."]);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </form>
  );
}

export default Signup;