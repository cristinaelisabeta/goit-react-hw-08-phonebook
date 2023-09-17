import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const accountToken = useSelector(getToken);
  return accountToken ? children : <Navigate to="/login"></Navigate>;
}
