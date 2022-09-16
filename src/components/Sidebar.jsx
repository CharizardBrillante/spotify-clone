import Searcher from './Searcher';
import { Link } from 'react-router-dom';
import logo from '../assets/Spotify_Logo.png';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <Container className="sidebar">
            <Row className="upper-sidebar">
                <Col>
                    <Row>
                        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                    </Row>
                    <Row>
                        <Link to="/">Home</Link>
                    </Row>
                    <Row>
                        <Link to="/library">Library</Link>    
                    </Row>
                    <Row>
                        <Searcher/>
                    </Row>
                </Col>
            </Row>
            <Row className="lower-sidebar">
                <Button className="sidebar-btn">Sign Up</Button>
                <Button className="sidebar-btn">Login</Button>
            </Row>
        </Container>
    )
}

export default Sidebar;