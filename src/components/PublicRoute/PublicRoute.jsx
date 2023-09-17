import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const isLogin = useSelector(getIsLogged);
  return isLogin ? <Navigate to="/contacts" /> : children;
}
