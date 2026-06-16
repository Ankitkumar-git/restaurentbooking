const featuredRestaurants = [
  {
    id: 1,
    name: "Taste of Italy",
    cuisine: "Italian",
    rating: 4.5,
    address: "123 Main Street, Anytown, USA",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Taste of India",
    cuisine: "Indian",
    rating: 4.7,
    address: "456 Elm Street, Anytown, USA",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
  },
];

export default function Home() {
  return (
    <div className="page">
      <h1>Featured Restaurants</h1>
      {featuredRestaurants.map((r) => (
        <div key={r.id} className="featured-card">
          <img src={r.image} alt={r.name} className="featured-img" />
          <h2>{r.name}</h2>
          <p>
            {r.cuisine} | Rating: {r.rating}
          </p>
          <p>{r.address}</p>
        </div>
      ))}
    </div>
  );
}
