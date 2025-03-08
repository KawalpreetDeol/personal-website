import React from 'react';
import { Card, CardContent, Typography, Container, Box } from '@mui/material';

const projects = [
  {
    icon: 'azure_logo_2.jpg',
    title: 'Telemetry Processing',
    description: `Built a pipeline to process vehicle telemetry data retrieved from Amazon S3 and store the results in an Azure 
                  SQL Database using Azure Data Lake Gen2, Azure Data Factory, and Azure Functions App.`,
    link: "https://github.com/KawalpreetDeol/vehicle-telemetry-processing"
  },
  {
    icon: 'android_logo.jpg',
    title: 'Polymorph Games',
    description: `Developed an Android app using Java and Kotlin for the application and Node for the Firebase backend to manage 
                  user scores and ranks for team-built games.`,
    link: "https://github.com/KawalpreetDeol/Polymorph-Games-Backend"
  },
  {
    icon: 'javascript_logo.jpg',
    title: 'Music Connect Backend',
    description: `Led the development of a scalable, serverless backend system for a music social media platform, focusing on 
                  real-time data handling and user authentication with Firebase and Node.`,
    link: "https://github.com/KawalpreetDeol/music-connect-backend"
  },
  // {
  //   icon: 'tableau_software_logo.jpg',
  //   title: 'IMDB Data Analysis',
  //   description: `Analysis and visualization of the IMDB dataset using Tableau. Explored relationships between Facebook Likes 
  //                 and IMDB Score, Facebook Likes and Revenue, Content Rating and Revenue, and Budget over Time by Genre.`,
  //   link: "https://github.com/KawalpreetDeol/imdb-analysis"
  // },
  // {
  //   icon: 'python_logo.jpg',
  //   title: 'Stats Utils',
  //   description: `Developed and published a Python package on PyPi for calculating Binomial and Gaussian distributions, using
  //                 Object-Oriented Programming (OOP) concepts to modularize and abstract the code.`,
  //   link: "https://github.com/KawalpreetDeol/stats-utils"
  // }
  // {
  //   icon: 'python_logo.jpg',
  //   title: 'Pong Game',
  //   description: `Developed Pong utilizing Object-Oriented Programming (OOP) in Python, leveraging the Turtle Graphics Library. 
  //                 This involved designing game mechanics, a user interface, and implementing responsive controls.`,
  //   link: "https://github.com/KawalpreetDeol/pong-game"
  // }
];
const TopProjects = () => {

  return (
    <Container 
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
      Top Projects
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
        {projects.map((project, index) => (
          <Card 
            sx={{
              minWidth: 275,
              maxWidth: 350,
              m: 2,
            }} key={index}
          >
            <CardContent 
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
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
      </Box>
    </Container>
  );
  
};

export default TopProjects;
