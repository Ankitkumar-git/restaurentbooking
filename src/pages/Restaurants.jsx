const allRestaurants = [
  {
    id: 1,
    name: "The Golden Spoon",
    cuisine: "Italian",
    location: "123 Main Street, Cityville",
    rating: 4.5,
    isOpen: true,
    description: "Experience authentic Italian cuisine in a cozy atmosphere.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60",
    menu: [
      { name: "Spaghetti Carbonara", price: 15 },
      { name: "Margherita Pizza", price: 12 },
      { name: "Tiramisu", price: 8 },
    ],
  },
  {
    id: 2,
    name: "Spice Junction",
    cuisine: "Indian",
    location: "456 Elm Street, Cityville",
    rating: 4.7,
    isOpen: true,
    description:
      "Enjoy authentic Indian cuisine at Spice Junction. Explore a variety of delicious dishes from different regions of India.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60",
    menu: [
      { name: "Butter Chicken", price: 14 },
      { name: "Garlic Naan", price: 4 },
      { name: "Mango Lassi", price: 5 },
    ],
  },
  {
    id: 3,
    name: "Taste of Italy",
    cuisine: "Italian",
    location: "789 Oak Avenue, Cityville",
    rating: 4.6,
    isOpen: false,
    description:
      "Experience the rich flavors of Italy at Taste of Italy. From pasta to tiramisu, every dish is crafted with love.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
    menu: [
      { name: "Fettuccine Alfredo", price: 13 },
      { name: "Bruschetta", price: 7 },
      { name: "Panna Cotta", price: 6 },
    ],
  },
];

export default function Restaurants({ onViewMore }) {
  return (
    <div className="page">
      <h1>Restaurants</h1>
      {allRestaurants.map((r) => (
        <div key={r.id} className="restaurant-card">
          <img src={r.image} alt={r.name} className="restaurant-img" />
          <div className="restaurant-info">
            <h2>{r.name}</h2>
            <p>{r.description}</p>
            <p className="restaurant-meta">
              Rating: {r.rating} | {r.isOpen ? "Open Now" : "Closed"}
            </p>
            <button className="view-more-btn" onClick={() => onViewMore(r)}>
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
