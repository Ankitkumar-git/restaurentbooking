import { useState } from "react";
import "./styles.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleViewMore = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setActivePage("details");
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1 className="header-title">My Food Delivery Website</h1>
        <nav className="header-nav">
          <span className="nav-link" onClick={() => setActivePage("home")}>
            Overview
          </span>
          <span
            className="nav-link"
            onClick={() => setActivePage("restaurants")}
          >
            Restaurants
          </span>
          <span className="nav-link" onClick={() => setActivePage("about")}>
            About
          </span>
        </nav>
      </header>

      {activePage === "home" && <Home />}
      {activePage === "about" && <About />}
      {activePage === "restaurants" && (
        <Restaurants onViewMore={handleViewMore} />
      )}
      {activePage === "details" && (
        <RestaurantDetails restaurant={selectedRestaurant} />
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 My Food Delivery Website</p>
      </footer>
    </div>
  );
}
