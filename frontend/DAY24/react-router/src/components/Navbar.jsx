import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return(
        <>
            <div className="navbar-style">
                <NavLink exact activeClassName="active-class" to="/">Home</NavLink>
                <NavLink exact activeClassName="active-class" to="/about">About</NavLink>
                <NavLink exact activeClassName="active-class" to="/profile">Profile</NavLink>
                <NavLink exact activeClassName="active-class" to="/dashboard">Dashboard</NavLink>

            </div>
            
            
            {/* <a href="/">About</a> */}
        </>
    )

}
export default Navbar;