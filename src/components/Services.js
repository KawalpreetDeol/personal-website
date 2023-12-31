import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Container } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import AnalyticsIcon from '@mui/icons-material/Analytics';

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

const services = [
  {
    icon: 'CodeIcon',
    title: 'Software Engineer',
    description: `Design and implement efficient, modular software solutions utilizing data structures and algorithms. 
                  Optimize performance, collaborate cross-functional teams, and stay updated on emerging technologies for continual 
                  improvement.`,
  },
  {
    icon: 'CloudIcon',
    title: 'Data Engineer',
    description: `Develop and maintain scalable data architectures, ensuring the efficient flow of information. Design robust 
                  data pipelines, optimize data processing, and enhance data accessibility, fostering innovation and 
                  data-driven solutions within enterprises.`,
  },
  {
    icon: 'AnalyticsIcon',
    title: 'Data Analyst',
    description: `Extract actionable insights from complex datasets, employing statistical and analytical techniques. Interpret 
                  trends, create dynamic visualizations, provide valuable business intelligence, and contribute to informed decision-making processes within organizations.`,
  },
  // {
  //   icon: 'CloudIcon',
  //   title: 'Cloud Architect',
  //   description: `Design and implement scalable, secure cloud solutions, translating business needs into efficient architectures. 
  //                 Optimize performance, collaborate cross-functionally, and stay updated on emerging technologies for continual 
  //                 improvement.`,
  // },
  
];

const Services = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Services
      </Typography>

      <div className={classes.cardContainer}>
        {services.map((service, index) => (
          <Card className={classes.card} key={index}>
            <CardContent className={classes.cardContent}>
              {service.icon === 'CodeIcon' ? <CodeIcon style={{width: '30px', height: '30px'}}/> : service.icon === 'CloudIcon' ? 
              <CloudIcon style={{width: '30px', height: '30px'}}/> : <AnalyticsIcon  style={{width: '30px', height: '30px'}}/>}
              <Typography variant="h5" component="div" style={{padding: '10px'}}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Services;
