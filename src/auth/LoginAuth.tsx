import { Visibility, VisibilityOff } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import {
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { FormSubmit, InputChange } from '../utils/Typscript';

const LoginAuth = () => {
  const initialState = { account: '', password: '' };
  const [userLogin, setUserLogin] = useState(initialState);
  const { account, password } = userLogin;
  const [typePass, setTypePass] = useState(false);
  const dispatch = useDispatch();

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(login(userLogin));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Email"
            variant="standard"
            name="account"
            value={account}
            onChange={handleChangeInput}
            autoComplete="off"
            fullWidth
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              fullWidth
              name="password"
              type={typePass ? 'text' : 'password'}
              value={password}
              onChange={handleChangeInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setTypePass(!typePass)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {typePass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div style={{ marginTop: 20 }}>
          <Button
            type="submit"
            disabled={account && password ? false : true}
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
          >
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default LoginAuth;
