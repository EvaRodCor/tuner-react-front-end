import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
let navigate = useNavigate();

const addSong = (newSong) => {
    axios
    .post(`${API}/songs/`, newSong)
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
    artist: "",
    album:"",
    time: "",
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
        placeholder="Name of Song"
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
        <label htmlFor="album">Album:</label>
        <input
        id="album"
        value={song.album}
        type="text"
        onChange={handleTextChange}
        placeholder="Album"
        required
        />
        <label htmlFor="time">Time:</label>
        <input
        id="time"
        value={song.time}
        type="text"
        onChange={handleTextChange}
        placeholder="Time of Song"
        required
        />
        <label htmlFor="is_favorite">is_favorite:</label>
        <input
        id="is_favorite"
        value={song.is_favorite}
        type="checkbox"
        onChange={handleCheckboxChange}
        required
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