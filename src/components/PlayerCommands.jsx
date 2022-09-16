import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs';
import { ImLoop } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';
import { useState } from 'react';

const PlayerCommands = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [now, setNow] = useState(0);
    const [timerInterval, setTimerInterval] = useState(null);

    const song = useSelector((state) => state.song.selectedSong);
    const duration = song.duration;
    let timerRunner = new Date(now * 1000).toISOString().slice(14, 19);
    let displayDuration = new Date(duration * 1000).toISOString().slice(14, 19);

    const timer = () => {
        let nextSecond = now + 1;        
        setTimerInterval(setInterval(() => {
            setNow(nextSecond)
            nextSecond++;        
        }, 1000));
        console.log('timerInterval:', timerInterval)
    }
    if (now >= duration) {
        clearInterval(timerInterval);
        setNow(0);
        setIsPlaying(false);
    }
    console.log(now);
    return (
        <div className="player-commands">
            <div className="player-buttons">
                <FaRandom className="player-btn" size={20} color="grey"/>
                <BsFillSkipStartFill className="player-btn" size={30} color="grey"/>
                {isPlaying ? 
                    <AiFillPauseCircle className="player-btn" size={40} color="white" onClick={()=>{
                        setIsPlaying(!isPlaying)
                        clearInterval(timerInterval);
                        console.log(isPlaying);
                    }}/> : 
                    <AiFillPlayCircle className="player-btn" size={40} color="white" onClick={()=>{
                        setIsPlaying(!isPlaying); 
                        setTimeout(()=>timer(), 300);
                        
                        console.log(isPlaying)
                    }}/>}
                <BsFillSkipEndFill className="player-btn" size={30} color="grey"/>
                <ImLoop className="player-btn" size={20} color="grey"/>
            </div>
            <div className="player-bar">
                <span>{timerRunner}</span>
                <ProgressBar now={now} max={duration}/>
                <span>{duration === 1 ? '00:00' : displayDuration}</span>
            </div>
        </div>
    )
}

export default PlayerCommands;