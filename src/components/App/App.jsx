import { Container, MainTitle, SecondaryTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      {isLoading && !error && <Loader />}
      {error && toast.error(error)}
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
