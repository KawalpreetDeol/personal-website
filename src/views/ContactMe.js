"use client"
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Tooltip,
  Button,
  Typography,
  Snackbar,
  Container,
  Paper,
  Slide,
  CircularProgress,
  Backdrop
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import socialMediaData from '../data/socialMediaData.json';
import { getFunctions, httpsCallable } from 'firebase/functions';
import '../config/firebaseConfig';
import SocialMediaBox from '../components/SocialMediaBox';

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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [validationTimeout, setValidationTimeout] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    clearTimeout(validationTimeout);
    if (name === 'name') {
      const newTimeout = setTimeout(() => {
        if (((! /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(value)) || value.length > 30) && value.length != 0) {
          setNameError(true);
        }
        else {
          setNameError(false);
        }
      }, 500);
      setValidationTimeout(newTimeout);
    }
    else if (name === 'email') {
      const newTimeout = setTimeout(() => {
        if ((! /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(value))
        && value.length != 0) {
          setEmailError(true);
        }
        else {
          setEmailError(false);
        }
      }, 1000);
      setValidationTimeout(newTimeout);
    }
    
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (! (nameError || emailError)) {
      setSubmitStatus('loading');
      submitContactForm({ name: formData.name, email: formData.email, 
        message: formData.message })
      .then((result) => {
      // Read result of the Cloud Function.
      const data = result.data;
      const sanitizedMessage = data.text;
      setSeverity(true);
      setSnackbarOpen(true);
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('idle');
      })
      .catch((error) => {
      // Getting the Error details.
      const code = error.code;
      const message = error.message;
      const details = error.details;
      setSeverity(false);
      setErrorMessage(message);
      setSnackbarOpen(true);
      setSubmitStatus('idle');
      });
    }
    else {
      setSeverity(false);
      setErrorMessage('')
      setSnackbarOpen(true);
    }
    
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Container className={classes.root} style={{ minHeight: '84vh', maxHeight: '100vh', 
                                                  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Paper className={classes.formContainer}>
          <Typography variant="h5" align="center" gutterBottom>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit}>
            <Tooltip title={nameError ? 'Invalid name. Only alphabetic characters and a single space are allowed. The maximum character length is 30.' : ''} placement="bottom" disableHoverListener={!nameError}>
              <TextField
                className={classes.textField}
                label="Name"
                name="name"
                variant="outlined"
                error={nameError}
                style={{marginBottom: '10px'}}
                fullWidth
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Tooltip>
            <Tooltip title={emailError ? 'Invalid email. Please follow the RFC 5321 and RFC 5322 specifications. e.g. example@example.com' : ''} placement="bottom" disableHoverListener={!emailError}>
              <TextField
                className={classes.textField}
                label="Email"
                name="email"
                error={emailError}
                style={{marginBottom: '10px'}}
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Tooltip>
            <TextField
              className={classes.textField}
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              style={{marginBottom: '10px'}}
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
            {severity ? "Your form was successfully submitted." : `There was an issue with your submission. ${errorMessage}`}
          </Alert>
        </Snackbar>
        <Backdrop className={classes.backdrop} open={submitStatus === 'loading'}>
          <CircularProgress color="primary" />
        </Backdrop>
        
      </Container>
      <SocialMediaBox socialMediaData={socialMediaData}/>
    </div>
  );
};

export default ContactMe;
