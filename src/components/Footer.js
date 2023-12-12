import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'; 

function Copyright() {
  return (
    <Typography mt={1} variant="body2" color="text.secondary" align="center">
      {'Copyright © Kawalpreet Deol '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2 }}>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          component="p"
        >
            {"Built with React.js and Material UI."}
        </Typography>
        <Copyright/>
      </Container>
    </Box>
  );
}

export default Footer;