import s from './Register.module.css';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();
    dispatch(signIn(values));
  };

  const handlerChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.label}>Sign in</h2>
      <Box
        className={s.form_box}
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '25ch',
            display: 'flex',
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handlerSubmit}
      >
        <TextField
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handlerChange}
          label="Name"
          variant="outlined"
          autoComplete="name"
        />
        <TextField
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handlerChange}
          label="Email"
          variant="outlined"
          autoComplete="email"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handlerChange}
          label="Password"
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<AccountBoxOutlinedIcon />}
        >
          Register
        </Button>
      </Box>
    </div>
  );
};

export default RegisterForm;
