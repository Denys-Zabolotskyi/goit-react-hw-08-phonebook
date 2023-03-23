import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, LogoutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <h5>Welcome, {user.name}</h5>
      <LogoutButton onClick={() => dispatch(logOut())}>Logout</LogoutButton>
    </Wrapper>
  );
};
