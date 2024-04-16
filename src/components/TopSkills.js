import React from 'react';
import { Card, CardContent, Typography, Container } from '@mui/material';
import skillsData from '../data/topSkillsData.json';

const Services = () => {

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" gutterBottom>
        Services
      </Typography>

      {/* <div className={classes.cardContainer}>
        {services.map((service, index) => (
          <Card className={classes.card} key={index}>
            <CardContent className={classes.cardContent}>
              {service.icon === 'CodeIcon' ? <CodeIcon style={{width: '30px', height: '30px'}}/> : service.icon === 'CloudIcon' ? 
              <CloudIcon style={{width: '30px', height: '30px'}}/> : <LayersIcon  style={{width: '30px', height: '30px'}}/>}
              <Typography variant="h5" component="div" style={{padding: '10px'}}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </Container>
  );
};

export default Services;
