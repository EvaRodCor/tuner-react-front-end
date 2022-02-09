import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
let navigate = useNavigate();

const addSong = (newSong) => {
    axios
    .post(`${API}/songs/new`, newSong)
    .then(
        () => {
        navigate(`/songs`);
        },
        (err) => console.error(err)
    )
    .catch((err) => console.warn("catch", err));
};

const [song, setSong] = useState({
    name: "",
    time: "",
    artist: "",
    is_favorite: false,
});

const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
};

const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
};

const handleSubmit = (event) => {
    event.preventDefault();
    addSong(song);
};
return (
    <div className="New">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
        id="name"
        value={song.name}
        type="text"
        onChange={handleTextChange}
        placeholder="Name of Anime"
        required
        />
        <label htmlFor="artist">Artist:</label>
        <input
        id="artist"
        type="text"
        value={song.artist}
        onChange={handleTextChange}
        placeholder="Artist name"
        />

        <br />
        <input type="submit" />
    </form>
    <br></br>
        <Link to={`/songs`}>
            <button>Back</button>
        </Link>
    </div>
    );
}

export default SongNewForm;