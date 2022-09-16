import { Card, Button } from 'react-bootstrap';
import { AiFillPlayCircle } from 'react-icons/ai';

const SongCard = (props) => {
    return (
        <Card className="song-card">
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.author}</Card.Text>
                <Button onClick={props.play}><AiFillPlayCircle size={30} color="white"/></Button>
            </Card.Body>
        </Card>
    )
}

export default SongCard;