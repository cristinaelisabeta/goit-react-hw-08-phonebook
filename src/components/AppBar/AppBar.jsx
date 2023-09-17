import Avatar from 'react-avatar';

import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLogin = useSelector(getIsLogged);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className={s.header}>
      <div className={s.home_wrapper}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active_link : s.link_nav)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active_link : s.link_nav)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
      {isLogin && (
        <div className={s.logged_box}>
          <div className={s.user_box}>
            <h3 className={s.logged_text}>Welcome: {name}</h3>
            <Avatar
              className={s.user_img}
              githubHandle="sitebase"
              size={30}
              round="20px"
            />
          </div>
          <Button
            sx={{ height: '30px' }}
            onClick={handlerLogout}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
            Log Out
          </Button>
        </div>
      )}
      {!isLogin && (
        <div className={s.register_box}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.active_link : s.link_nav
            }
            to="/register"
          >
            Sign in
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.active_link : s.link_nav
            }
            to="/login"
          >
            Log in
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default AppBar;
