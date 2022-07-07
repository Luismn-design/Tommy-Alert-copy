import * as React from 'react';
import theme from '../theme/theme';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AndroidIcon from '@mui/icons-material/Android';
import { Link } from "react-router-dom";


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AndroidIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tommy-Alert
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <AndroidIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tommy-Alert
          </Typography>
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            <Link to="/examenes" style={theme.Link}> 
                <Button key={'Examenes'} onClick={handleCloseNavMenu} sx={{my: 2, color: 'White', display:'block'}}>
                    Examenes
                </Button>
            </Link>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={theme.Link}> 
                <Button key={'Materias'} onClick={handleCloseNavMenu} sx={{my: 2, color: 'White', display:'block'}}>
                  Materias
                </Button>
            </Link>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={theme.Link}> 
                <Button key={'Bot'} onClick={handleCloseNavMenu} sx={{my: 2, color: 'White', display:'block'}}>
                  Bot
                </Button>
            </Link>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            <Link to="/" style={theme.Link}> 
                <Button key={'Nosotros'} onClick={handleCloseNavMenu} sx={{my: 2, color: 'White', display:'block'}}>
                Nosotros
                </Button>
            </Link>
          </Box>
          

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
