export default function RestaurantDetails({ restaurant }) {
  if (!restaurant) return null;

  return (
    <div className="page">
      <h1>{restaurant.name}</h1>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Location: {restaurant.location}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>{restaurant.description}</p>

      <h2 className="menu-heading">Menu</h2>
      <div className="menu-grid">
        {restaurant.menu.map((item, index) => (
          <div key={index} className="menu-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
