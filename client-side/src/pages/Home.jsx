import { useEffect, useState } from 'react';
import Movie from '../components/Movie'
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getGenres, getPopular, getSearch } from '../store/middlewares';

export default function Home() {
  const movies = useSelector(({ movies }) => movies);
  const genres = useSelector(({ genres }) => genres);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function queryInput(e) {
    const { value } = e.target;

    setQuery(value);
  }

  function onSearch() {
    if (!query) return dispatch(getPopular());
    dispatch(getSearch(query));
  }

  function onFilter(e) {
    const { value } = e.target;

    if (!value) return dispatch(getPopular());
    dispatch(getFilter(value));
  }

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <>
      <Row className='mt-3'>
        <Col sm={6}>
          <h1>Popular Movies</h1>
        </Col>
        <Col sm={3}>
          <Form.Select onChange={onFilter} className='mt-2'>
            <option value="">Filter by Genre</option>
            {genres.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
          </Form.Select>
        </Col>
        <Col sm={3}>
          <InputGroup className='mt-2'>
            <Form.Control onInput={queryInput} name='query' />
            <Button onClick={onSearch} variant="primary" id="button-addon2">
              <i className="bi bi-search"></i>
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </Row>
    </>
  )
}