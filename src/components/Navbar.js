import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-links">
                <Link to="/">Vartotojai</Link>
                <Link to="/form">Vartotojo sukūrimas</Link>
            </div>
        </div>
    );
}

export default Navbar;