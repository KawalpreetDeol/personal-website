"use client"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  Typography,
  Snackbar,
  Container,
  Paper,
  Slide
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import SocialMediaSidebar from '../components/SocialMediaSidebar';
import socialMediaData from '../data/socialMediaData.json';
import { getFunctions, httpsCallable } from 'firebase/functions';
import '../config/firebaseConfig';

const functions = getFunctions();
const submitContactForm = httpsCallable(functions, 'submitContactForm');

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const ContactMe = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name: formData.name, email: formData.email, 
      message: formData.message });
    submitContactForm({ name: formData.name, email: formData.email, 
                        message: formData.message })
    .then((result) => {
      // Read result of the Cloud Function.
      /** @type {any} */
      const data = result.data;
      const sanitizedMessage = data.text;
      setSeverity(true);
      setSnackbarOpen(true);
    })
    .catch((error) => {
      // Getting the Error details.
      const code = error.code;
      const message = error.message;
      const details = error.details;
      setSeverity(false);
      setErrorMessage(message);
      setSnackbarOpen(true);
    });

    
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container className={classes.root} style={{ minHeight: '84vh', maxHeight: '100vh', 
                                                 display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
            style={{marginBottom: '7px'}}
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
            style={{marginBottom: '7px'}}
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
            style={{marginBottom: '7px'}}
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
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        TransitionComponent={TransitionUp}
      >
        <Alert severity={severity ? "success" : "error"}>
          {severity ? "Your form was successfully submitted." : `Your form needs a fix. ${errorMessage}`}
        </Alert>
      </Snackbar>
      <SocialMediaSidebar socialMediaData={socialMediaData} />
    </Container>
  );
};

export default ContactMe;
