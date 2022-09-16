import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import SongCard from './SongCard';
import { selectSongAction } from '../redux/actions';
const Main = () => {
    
    const [songs, setSongs] = useState([]);
    useEffect(() => getSongs(), [])

    const dispatch = useDispatch();

    const getSongs = () => {
        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=trend')
        .then(res=>res.json())
        .then(res=>setSongs(res.data))
        .catch(err=>console.log(err));
    }
    return (
        <div className="main">
            <h2>Trends</h2>
            <div className="songs-container">
            {songs.map(song => (
                <SongCard 
                    key={song.id}
                    title={song.title}
                    imgUrl={song.album.cover_big}
                    author={song.artist.name}
                    play={()=>{
                        console.log('song dispatched');
                        dispatch(selectSongAction({
                            title: song.title,
                            author: song.artist.name,
                            cover: song.album.cover_big,
                            duration: song.duration
                        }))
                    }}/>
            ))}
            </div>
        </div>
    )
}

export default Main;