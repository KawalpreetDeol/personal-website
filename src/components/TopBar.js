import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CloudIcon from '@mui/icons-material/Cloud';
import { Link } from 'react-router-dom'; 

// const pages = [['Home', '/'], ['Experiences', 'experience'], ['Projects', 'projects']];
const pages = [['Home', '/'], ['Portfolio', '/portfolio']];
const pages_phone = [['Home', '/'], ['Portfolio', '/portfolio'], ['Contact Me', '/contact']];

function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    const pdfFile = 'resume-kawalpreet_deol.pdf';

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfFile;
    anchor.download = 'resume-kawalpreet_deol.pdf';

    // Trigger a click on the anchor to start the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <AppBar position="fixed">
      <Container sx={{paddingLeft: '0px', paddingRight: '0px'}} maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' style={{ all: 'unset', cursor: 'pointer' }}>
            <SelfImprovementIcon width="6%" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link >
          <Typography
            variant="h6"
            noWrap
            width="27%"
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              wordSpacing: '-.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          ><Link to='/' style={{ all: 'unset', cursor: 'pointer' }}>
            KAWALPREET DEOL
            </Link>
          </Typography>
          <Container sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between'}}>
            <Container sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start'}}>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
                aria-label="menu"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {pages_phone.map((page) => (
                  <MenuItem key={page[0]} onClick={handleMenuClose}>
                    <Link to={page[1]} style={{ all: 'unset' }}>
                      <Typography textAlign="center">{page[0]}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                
              </Menu>
            </Container>
            <Container sx={{ display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end', alignItems: 'flex-end'}}>
              <Button
                  key={"ResumePhone"}
                  sx={{ my: 2, color: 'inherit' }}
                  onClick={handleDownload}
                  
                >
                  {"Resume"}
              </Button>
            </Container>
          </Container>
          <Box width="33%" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page[0]} to={page[1]} style={{ all: 'unset' }}>
                <Button
                component={Link}
                to={page[1]}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>

          <Box width="33%" justifyContent="flex-end" alignItems="center" sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'}}}>
            <Button
              key={"Resume"}
              sx={{ my: 2, color: 'inherit', display: 'block' }}
              onClick={handleDownload}
            >
              {"Resume"}
            </Button>
          <span style={{display: { xs: 'none', md: 'block' }}}>
          <Link to='/contact' style={{ all: 'unset' }}>
            <Button
              key={"Contact Me"}
              sx={{ my: 2, color: 'inherit', display: { xs: 'none', md: 'block'} }}
            >
              {"Contact Me"}
            </Button>
          </Link>
          </span>
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
}

export default TopBar;