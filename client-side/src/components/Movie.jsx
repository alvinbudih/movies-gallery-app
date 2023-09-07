import { Button, Card, Col } from "react-bootstrap";

export default function Movie({ movie, imgUrl }) {
  return (
    <Col sm={4}>
      <Card className='mt-3'>
        <Card.Img variant="top" src={`${imgUrl}/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}