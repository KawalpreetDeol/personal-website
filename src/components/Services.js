import React from 'react';
import { Card, CardContent, Typography, Container, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LayersIcon from '@mui/icons-material/Layers';

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
    icon: 'LayersIcon',
    title: 'Full-Stack Engineer',
    description: `Design and develop front-end and back-end systems, integrating user-facing elements with server-side logic. Integrate
                  and build API endpoints. Ensure seamless application performance, troubleshoot and optimize code, and adapt technologies 
                  for cohesive solutions.`,
  },
  // {
  //   icon: 'AnalyticsIcon',
  //   title: 'Data Analyst',
  //   description: `Extract actionable insights from complex datasets, employing statistical and analytical techniques. Interpret 
  //                 trends, create dynamic visualizations, provide valuable business intelligence, and contribute to informed decision-making processes within organizations.`,
  // },
  // {
  //   icon: 'CloudIcon',
  //   title: 'Cloud Architect',
  //   description: `Design and implement scalable, secure cloud solutions, translating business needs into efficient architectures. 
  //                 Optimize performance, collaborate cross-functionally, and stay updated on emerging technologies for continual 
  //                 improvement.`,
  // },
  
];

const Services = () => {

  return (
    <Container 
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Services
      </Typography>

      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: { xs: 'flex-start', md: 'center' },
          gap: 2,
          p: 2,
          maxWidth: '80vw',
        }}
      >
        {services.map((service, index) => (
          <Card 
            sx={{
              minWidth: 275,
              maxWidth: 350,
              m: 2, // margin spacing
            }} 
            key={index}
          >
            <CardContent 
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
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
      </Box>
    </Container>
  );
};

export default Services;
