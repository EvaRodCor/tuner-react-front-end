import { Link } from "react-router-dom";
import "../Style/NavBar.css"
import logo from "../Components/musicLogo.png";


function NavBar() {
return (
    <nav>
        <h1 className="logo">
            <Link to="/"><img className="logo" src={logo} alt="logo"></img></Link>
        </h1>
        <div className="menu">
        <button className="button">
            <Link to="/songs">Songs</Link>
        </button>
        <button className="button">
            <Link to="/songs/new">New Song</Link>
        </button>
        </div>
    </nav>
    )

}



export default NavBar;