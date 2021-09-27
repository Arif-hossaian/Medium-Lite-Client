import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBlog from '../SearchBlog/SearchBlog';
import MenuContent from '../Header-MenuContent/MenuContent';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{
                display: { xs: 'none', sm: 'block' },
                textDecoration: 'none',
                color: 'white',
              }}
              component={Link}
              to="/"
            >
              Medium Lite
            </Typography>
            <Search>
              <SearchBlog />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <MenuContent />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
