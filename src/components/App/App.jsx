import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const PhonebookPage = lazy(() => import('../../pages/PhonebookPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<PhonebookPage />} />
      </Route>
    </Routes>
  );
};

export default App;
