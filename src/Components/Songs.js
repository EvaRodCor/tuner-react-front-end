import axios from "axios";
import { useState, useEffect } from "react";
import Song from "./Song";


function Songs() {
const API = process.env.REACT_APP_API_URL;
const [songs, setSongs] = useState([]);
useEffect(() => {
    axios
    .get(`${API}/songs`)
    .then((response) => setSongs(response.data))
    .catch((error) => console.warn(error));
}, [API]);


return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, id) => {
                        return<Song key={song.id} song={song} id={id}/>
                    })}
                </tbody>
            </table>
        </section> 
    )
}
    
    
export default Songs;