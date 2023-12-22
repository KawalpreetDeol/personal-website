import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Typography,
  Snackbar,
  Container,
  Paper,
} from '@material-ui/core';
import SocialMediaSidebar from '../components/SocialMediaSidebar';
import socialMediaData from '../data/socialMediaData.json';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  formContainer: {
    padding: theme.spacing(4),
    boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: theme.spacing(1),
    width: '100%',
    maxWidth: '400px',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const ContactMe = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container className={classes.root} style={{minHeight: '84vh', maxHeight: '100vh'}}>
      <Paper className={classes.formContainer}>
        <Typography variant="h5" align="center" gutterBottom>
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.textField}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.textField}
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            className={classes.submitButton}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Form submitted successfully!"
      />
      <SocialMediaSidebar socialMediaData={socialMediaData} />
    </Container>
  );
};

export default ContactMe;
