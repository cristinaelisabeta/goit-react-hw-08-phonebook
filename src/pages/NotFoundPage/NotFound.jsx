import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLogged } from 'redux/auth/auth-selectors';

const NotFound = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/contacts');
      return;
    } else {
      navigate('/login');
      return;
    }
  }, [isLogged, navigate]);
};

export default NotFound;
