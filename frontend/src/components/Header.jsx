import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{ backgroundColor: "red", padding: "10px", color: "white", display: "flex", justifyContent: "space-between" }}>
            <h1>Zomato Clone</h1>
            <nav>
                <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>Home</Link>
                <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
            </nav>
        </header>
    );
};

export default Header;
