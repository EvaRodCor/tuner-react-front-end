import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SongEditForm() {
let { id } = useParams();
let navigate = useNavigate();

const [song, setSong] = useState({
    name: "",
    artist: "",
});

const updateSong = (updatedSong) => {
    axios
    .put(`${API}/songs/${id}`, updatedSong)
    .then(
        () => {
        navigate(`/songs/${id}`);
        },
        (error) => console.error(error)
    )
    .catch((c) => console.warn("catch", c));
};

const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
};

const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
};

useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
    (response) => setSong(response.data),
    () => navigate(`/not-found`)
    );
    }, [id, navigate]);


const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
};
return (
    <div className="Edit">
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
        <br/>
        <input type="submit" />
    </form>
    <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
    </Link>
    </div>
    );
}

export default SongEditForm;