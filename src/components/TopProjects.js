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
    description: `Extract actionable insights from complex datasets, employing statistical and analytical techniques. Interpret 
                  trends, create dynamic visualizations, provide valuable business intelligence, and contribute to informed decision-making processes within organizations.`,
  },
  {
    icon: 'tableau_software_logo.jpg',
    title: 'IMDB Data Analysis',
    description: `Develop and maintain scalable data architectures, ensuring the efficient flow of information. Design robust 
                  data pipelines, optimize data processing, and enhance data accessibility, fostering innovation and 
                  data-driven solutions within enterprises.`,
  },
  {
    icon: 'python_logo.jpg',
    title: 'Stock Price Predictor',
    description: `Design and implement efficient, modular software solutions utilizing data structures and algorithms. 
                  Optimize performance, collaborate cross-functionally, and stay updated on emerging technologies for continual 
                  improvement.`,
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
