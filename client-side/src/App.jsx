import { useState } from 'react'
import Topbar from './components/Topbar'
import Container from 'react-bootstrap/esm/Container'
import Movie from './components/Movie'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useEffect } from 'react';
import { getConfig, getPopular } from './store/middlewares';

function App() {
  const movies = useSelector(({ movies }) => movies);
  const config = useSelector(({ configuration }) => configuration);
  const [imgUrl, setImgUrl] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getConfig());
  }, []);

  useEffect(() => {
    if (config.hasOwnProperty("images")) {
      setImgUrl(`${config.images.secure_base_url}${config.images.poster_sizes[5]}`);
    }
  }, [config]);

  return (
    <>
      <Topbar />
      <Container>
        <Row>
          <Col sm={6}>
            <h1>Popular Movies</h1>
          </Col>
          <Col sm={3}>
            <Form.Select className='mt-3'>
              <option value="">Filter by Genre</option>
            </Form.Select>
          </Col>
          <Col sm={3}>
            <InputGroup className="mt-3">
              <Form.Control />
              <Button variant="outline-primary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          {movies.map(movie => <Movie key={movie.id} movie={movie} imgUrl={imgUrl} />)}
        </Row>
      </Container>
    </>
  )
}

export default App
