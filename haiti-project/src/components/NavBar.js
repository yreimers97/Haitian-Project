import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar">
            <NavLink to="/"><button className="navbutton">HOME</button></NavLink>
            <NavLink to="/haiti-culture"><button className="navbutton">CULTURE</button></NavLink>
            <NavLink to="/haiti-new-form"><button className="navbutton">NEW FORM</button></NavLink>
        </nav>
    )
}

export default NavBar