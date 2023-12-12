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
const pages = [['Home', '/']];

function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
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
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SelfImprovementIcon width="6%" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
          >
            KAWALPREET DEOL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={handleMenuClose}>
                  <Link to={page[1]} style={{ all: 'unset' }}>
                    <Typography textAlign="center">{page[0]}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              wordSpacing: '-.4rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KAWALPREET DEOL
          </Typography>
          <Box width="33%" justifyContent="center" alignItems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page[1]} style={{ all: 'unset' }}>
                <Button
                  key={page[0]}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>

          <Box width="33%" display="flex" justifyContent="flex-end" alignItems="center" sx={{ flexGrow: 0 }}>
            <Button
              key={"Resume"}
              sx={{ my: 2, color: 'inherit', display: 'block' }}
              onClick={handleDownload}
            >
              {"Resume"}
            </Button>
          <Link to='/contact' style={{ all: 'unset' }}>
            <Button
              key={"Contact Me"}
              sx={{ my: 2, color: 'inherit', display: 'block' }}
            >
              {"Contact Me"}
            </Button>
          </Link>
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
}

export default TopBar;