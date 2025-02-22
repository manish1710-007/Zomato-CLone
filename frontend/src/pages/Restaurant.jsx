import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

const Restaurant = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/restaurants/${id}`);
                setRestaurant(res.data);
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        };
        fetchRestaurant();
    }, [id]);

    if (!restaurant) return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>;

    return (
        <div>
            <Header />
            <div style={{ padding: "20px", textAlign: "center" }}>
                <h2>{restaurant.name}</h2>
                <img src={restaurant.image} alt={restaurant.name} style={{ width: "80%", height: "300px", borderRadius: "10px", margin: "10px 0" }} />
                <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <p><strong>Location:</strong> {restaurant.location}</p>
                <p><strong>Rating:</strong> {restaurant.rating} ⭐</p>
            </div>
        </div>
    );
};

export default Restaurant;
