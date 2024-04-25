import React from 'react';
import { Card, CardContent, Box, Typography, Container } from '@mui/material';
import skillsData from '../data/topSkillsData.json';

const TopSkills = () => {

  return (
    <Container sx={{width: '100vw', marginTop: '25px', marginBottom: '25px'}}>
        <Typography variant="h4" align="center" gutterBottom>
        Top Skills
        </Typography>
        <Container sx={{display: 'flex', flexDirection: 'row'}}>
            <Container>
                {/* Languages */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Languages
                    </Typography>
                    {skillsData[0].languages.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
                {/* Frameworks */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Frameworks
                    </Typography>
                    {skillsData[0].frameworks.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
                {/* Databases */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Databases
                    </Typography>
                    {skillsData[0].databases.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
            </Container>
            

            {/* Concepts */}
            <Container>
                {/* Software Concepts */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Software Concepts
                    </Typography>
                    {skillsData[0].software.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
                {/* Data Concepts */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Data Concepts
                    </Typography>
                    {skillsData[0].data.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
            </Container>
            <Container>
                {/* Big Data Tools */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Big Data Tools
                    </Typography>
                    {skillsData[0].bigData.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
                {/* Cloud */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Cloud
                    </Typography>
                    {skillsData[0].cloud.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
                {/* Visualization */}
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h5" color="textSecondary">
                        Visualization
                    </Typography>
                    {skillsData[0].visualization.map((txt, index) => (
                        <Typography variant="body1" color="textSecondary" key={'language_'+index}>
                            {txt}
                        </Typography>
                    ))}
                </Box>
            </Container>
        </Container>
        
    </Container>
  );
};

export default TopSkills;
