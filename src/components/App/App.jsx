// import { Container, MainTitle, SecondaryTitle } from './App.styled';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';

import { useEffect, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
// import { Loader } from 'components/Loader/Loader';
// import { toast } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import Home from 'pages/Home';
// import Registr from 'pages/Register';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/register" element={<LoginPage />} />
    //   </Route>
    // </Routes>
    // <Container>
    //   <MainTitle>Phonebook</MainTitle>
    //   <ContactForm />
    //   {isLoading && !error && <Loader />}
    //   {error && toast.error(error)}
    //   <SecondaryTitle>Contacts</SecondaryTitle>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
};

export default App;
