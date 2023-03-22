import GlobalStyle from 'components/App/GlobalStyles';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from 'components/AppBar/AppBar';
// import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
