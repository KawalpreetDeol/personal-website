import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  card: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  cardContent: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
const projects = [
  {
    icon: 'azure_logo_2.jpg',
    title: 'Vehicle Telemetry Processing',
    description: `Built a pipeline to process vehicle telemetry data retrieved from S3 and store the results in a SQL
                  Database using Data Lake Gen2, Data Factory, and Functions App.`,
  },
  {
    icon: 'tableau_software_logo.jpg',
    title: 'IMDB Data Analysis',
    description: `Analysis and visualization of the IMDB dataset using Tableau.`,
  },
  {
    icon: 'python_logo.jpg',
    title: 'Pong Game',
    description: `Developed Pong utilizing Object-Oriented Programming (OOP) in Python, leveraging the Turtle Graphics Library.`,
  }
];
const TopProjects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Top Projects
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <img
                  src={'./logos/' + project.icon} 
                  alt=''
                  style={{ width: '30px', height: '30px' }}
                />
                <Typography variant="h5" component="div" style={{padding: '10px'}}>
                  {project.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TopProjects;
