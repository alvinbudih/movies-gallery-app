import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../store/middlewares";
import { Card, Col, Image, Row } from "react-bootstrap";

export default function Detail() {
  const { id } = useParams();
  const movie = useSelector(({ movie }) => movie);
  const imgUrl = useSelector(({ imgUrl }) => imgUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card className="mt-3 mb-3 shadow" style={{ width: 1000 }}>
          <Row className="g-0">
            <Col md={4}>
              <Image src={`${imgUrl}/${movie.poster_path}`} fluid className="rounded-start" />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <small className="text-body-secondary">{movie.release_date}</small>
                </Card.Text>
                <Card.Text>
                  Status: {movie.status}
                </Card.Text>
                <Card.Text>
                  Duration: {movie.runtime} minute
                </Card.Text>
                <Card.Text>
                  Tagline: {movie.tagline}
                </Card.Text>
                <Card.Text>
                  Genre: {movie.genres?.map?.(genre => genre.name).join(", ")}
                </Card.Text>
                <Card.Text>
                  Production Companies: {movie.production_companies?.map?.(({ name }) => name).join(", ")}
                </Card.Text>
                <Card.Text>
                  {movie.overview}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}