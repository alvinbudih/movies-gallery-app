import Topbar from './components/Topbar'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getConfig } from './store/middlewares';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfig());
  }, []);

  return (
    <>
      <Topbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App
