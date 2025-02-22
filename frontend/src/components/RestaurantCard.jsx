import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}>
            <img src={restaurant.image} alt={restaurant.name} style={{ width: "100%", height: "200px", borderRadius: "8px" }} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine}</p>
            <Link to={`/restaurant/${restaurant.id}`} style={{ color: "red", textDecoration: "none" }}>View Details</Link>
        </div>
    );
};

export default RestaurantCard;
