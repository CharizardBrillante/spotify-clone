import { BsFillVolumeUpFill, BsFillVolumeMute } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PlayerCommands from './PlayerCommands';

const Player = () => {
    return (
        <div className="player">
            <div className="left-player">

            </div>
            <div className="central-player">
                <PlayerCommands/>
            </div>
            <div className="right-player">

            </div>
        </div>
    )
}

export default Player;