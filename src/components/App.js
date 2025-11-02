import React, { useState } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {/* Do not remove the main div */}

      <BrowserRouter>
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/login">Login</Link> | <Link to="/home">Playground</Link>
      <span style={{ marginLeft: "15px" }}>
        Status: {isAuthenticated ? "✅ Logged In" : "❌ Logged Out"}
      </span>
      {isAuthenticated && (
        <button style={{ marginLeft: "15px" }} onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default App;
