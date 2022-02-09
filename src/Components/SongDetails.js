import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function SongDetails() {
const navigate = useNavigate();
const API = process.env.REACT_APP_API_URL;
const { id } = useParams();
const [song, setSong] = useState({});

useEffect(() => {
    axios
    .get(`${API}/songs/${id}`)
    .then((response) => setSong(response.data))
    .catch((error) => console.warn(error))
}, [API, id]);

const handleDelete = () => {
    axios
    .delete(`${API}/songs/${id}`)
    .then(
        () => {
        console.log("did it");
            navigate(`/songs`);
        },
        (error) => console.error(error)
    )
    .catch((error) => console.warn(error));
};

return (
<article>
    <h4>Song Name: {song.name}</h4>
    <p>{song.time} mins</p>
    <p>Artist: {song.artist}</p>
    <p>{song.is_favorite}</p>
    <div className="showNavigation">
        <div>
            <Link to="/songs">
            <button>Back</button>
            </Link>
        </div>
        <div>
            <Link to={`/songs/${song.id}/edit`}>
            <button>Edit</button>
            </Link>
        </div>
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    </article>
    );
}

export default SongDetails;
