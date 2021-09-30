import { FormHelperText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LoginAuth from '../auth/LoginAuth';

const LoginPage = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing('2.5rem', 0),
  background: '#fdfdfd',
  display: 'flex',
  justifyContent: 'center',
}));

const Login = () => {
  return (
    <LoginPage>
      <Box
        sx={{
          background: '#fff',
          maxWidth: '400px',
          width: '100%',
          border: '1px solid #ddd',
          padding: '2.7rem 1.7rem ',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Sign In</h2>
        <LoginAuth />
        <FormHelperText
          id="outlined-weight-helper-text"
          component={Link}
          to="/forgot_password"
          style={{ marginLeft: 27 }}
        >
          Forgot password
        </FormHelperText>
        <p style={{ marginLeft: 27 }}>
          You don't have an account?
          <Link to={`/register`} style={{ color: 'crimson' }}>
            {` Register Now`}
          </Link>
        </p>
      </Box>
    </LoginPage>
  );
};

export default Login;
