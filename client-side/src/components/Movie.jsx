import { Button, Card, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const imgUrl = useSelector(({ imgUrl }) => imgUrl);

  return (
    <Col sm={4}>
      <Card className='mt-3 mb-3 shadow'>
        <Card.Img variant="top" src={`${imgUrl}/${movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Subtitle className="mb-3">{movie.release_date}</Card.Subtitle>
            <Link className="btn btn-primary" to={`/detail/${movie.id}`} >
              Detail
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}