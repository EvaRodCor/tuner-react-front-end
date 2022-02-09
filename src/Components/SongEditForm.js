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
    .put(`${API}/anime/${id}`, updatedSong)
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
        placeholder="Name of Website"
        required
        />
        <label htmlFor="release">Artist:</label>
        <input
        id="artist"
        type="text"
        value={song.artist}
        onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
    </form>
    <Link to={`/songs/${id}`}>
        <button>Nevermind!</button>
    </Link>
    </div>
    );
}

export default SongEditForm;