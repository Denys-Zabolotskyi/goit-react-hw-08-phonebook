import GlobalStyle from 'components/App/GlobalStyles';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
// import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Link to="/" end>
            Home
          </Link>
          <nav>
            {/* <Link to="/" end>
              Home
            </Link> */}
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
