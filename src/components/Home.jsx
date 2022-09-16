import Sidebar from "./Sidebar";
import Main from "./Main";
import Player from "./Player";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home">
            <div className="upper-home">
                <Sidebar/>
                <Main/>
            </div>
            <Player/>      
        </div>
    )
}

export default Home;