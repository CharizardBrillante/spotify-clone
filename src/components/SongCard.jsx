import { Card } from 'react-bootstrap';

const SongCard = (props) => {
    return (
        <Card className="song-card">
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.author}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SongCard;