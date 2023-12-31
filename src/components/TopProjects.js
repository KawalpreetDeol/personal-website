import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center', // center alignment for medium screens and above
    },
    justifyContent: 'flex-start',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center', // center alignment for medium screens and above
    },
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: '80vw'
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
    link: "https://github.com/KawalpreetDeol/vehicle-telemetry-processing"
  },
  {
    icon: 'tableau_software_logo.jpg',
    title: 'IMDB Data Analysis',
    description: `Analysis and visualization of the IMDB dataset using Tableau.`,
    link: "https://github.com/KawalpreetDeol/imdb-analysis"
  },
  {
    icon: 'python_logo.jpg',
    title: 'Pong Game',
    description: `Developed Pong utilizing Object-Oriented Programming (OOP) in Python, leveraging the Turtle Graphics Library.`,
    link: "https://github.com/KawalpreetDeol/pong-game"
  }
];
const TopProjects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
      Top Projects
      </Typography>

      <div className={classes.cardContainer}>
        {projects.map((project, index) => (
          <Card className={classes.card} key={index}>
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
              <hr style={{width: '80%', borderColor: '#d3d3d3', borderWidth: 'thin'}} />
              <Typography variant="body1" color="textSecondary">
                {project.link != "" && (<a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
  
};

export default TopProjects;
