import { HiVolumeUp, HiVolumeOff} from 'react-icons/hi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import PlayerCommands from './PlayerCommands';
import { useSelector } from 'react-redux';
import { useState } from 'react'
const Player = () => {

    const song = useSelector(state => state.song.selectedSong);
    const [volume, setVolume] = useState(true)

    return (
        <div className="player">
            <div className="left-player">
                <img src={song.cover} alt="album cover"/>
                <div className="player-description">
                    <h6>{song.title}</h6>
                    <p>{song.author}</p>
                </div>
            </div>
            <div className="central-player">
                <PlayerCommands/>
            </div>
            <div className="right-player">
                {volume? <HiVolumeUp color="white" onClick={()=>setVolume(false)}/> : <HiVolumeOff color="white" onClick={()=>setVolume(true)}/>}
                <Form.Range className='volume-range'/>
            </div>
        </div>
    )
}

export default Player;