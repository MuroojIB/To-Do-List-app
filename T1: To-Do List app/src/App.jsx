import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TodoApp from "./components/TodoApp";

function App() {
  const [user, setUser] = useState(null);

  // Function to handle user login
  const handleLogin = (credentials) => {
    console.log("Logging in with", credentials);

    // In this example, if valid credentials are provided, we set the user
    if (credentials.email && credentials.password) {
      setUser({ email: credentials.email });
    }
  };

  // Function to handle user signup
  const handleSignup = (credentials) => {
    console.log("Signing up with", credentials);
    
    // In this example, if valid credentials are provided, we set the user
    if (credentials.email && credentials.password) {
      setUser({ email: credentials.email });
    }
  };

  // Function to handle user logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Route for Login page */}
          <Route 
            path="/login" 
            element={<Login user={user} onLogin={handleLogin} />} 
          />
          {/* Route for Signup page */}
          <Route 
            path="/signup" 
            element={<Signup user={user} onSignup={handleSignup} />} 
          />
          {/* Protected route for TodoApp: if user is logged in, show TodoApp; otherwise, navigate to login */}
          <Route
            path="/todo"
            element={user ? <TodoApp onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
          {/* Redirect the root URL to /todo */}
          <Route path="/" element={<Navigate to="/todo" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;