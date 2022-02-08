import { Link } from "react-router-dom";


function NavBar() {
return (
    <nav>
        <h1>
            <Link to="/">Home</Link>
        </h1>
        <button>
            <Link to="/songs">Songs</Link>
        </button>
        <button>
            <Link to="/songs/new">New Song</Link>
        </button>
    </nav>
    )

}



export default NavBar;