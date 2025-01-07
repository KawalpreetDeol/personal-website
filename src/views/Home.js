import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import VerticalTimeline from '../components/VerticalTimeline';

import TimelineFilter from '../components/TimelineFilter';
import Profile from '../components/Profile';
import Services from '../components/Services';
import { useInView } from 'react-intersection-observer'; // Import useInView

import workData from '../data/workData.json';
import educationData from '../data/educationData.json';
import certificationData from '../data/certificationData.json';
import projectData from '../data/projectData.json';
import courseData from '../data/courseData.json';


import TopProjects from '../components/TopProjects';

function Home() {
  const [selectedFilters, setSelectedFilters] = useState(['work', 'education', 'certification']);
  const [profileRef, profileInView] = useInView(); // Use useInView for Profile
  const [servicesRef, servicesInView] = useInView(); // Use useInView for Skills
  const [timelineRef, timelineInView] = useInView(); // Use useInView for Timeline
  const [projectsRef, projectsInView] = useInView(); // Use useInView for Projects

  // Combine all data based on the selected filter
  const filteredData = (() => {
    return [...workData, ...educationData, ...certificationData, ...courseData, ...projectData].filter((item) =>
      selectedFilters.includes(item.type)
    );
  })();

  // Sort combined data by end date for work and education, and earned date for certification
  const sortedData = filteredData.sort((a, b) => {
    return new Date(b.endDate || b.earnedDate) - new Date(a.endDate || a.earnedDate);
  });

  return (
    <Container style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        maxWidth: '100vw' }}>
      <Box ref={profileRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                                     maxHeight: '100vh', opacity: profileInView ? 1 : 0, transition: {xs: 'opacity 2s', md: 'opacity 3s'},
                                     minHeight: '100vh' }}>
        <Profile />
      </Box>
      <hr style={{flexGrow: 1, maxWidth: '80%', width: '80%'}} />
      <Box ref={servicesRef} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                    maxHeight: '100vh', opacity: servicesInView ? 1 : 0, transition: {xs: 'opacity 2s', md: 'opacity 3s'},
                                    minHeight: '50vh' }}>
        <Services />
      </Box>
      <hr style={{flexGrow: 1, maxWidth: '80%',  width: '80%'}} />
      <Box ref={projectsRef} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                                    maxHeight: '100vh', opacity: projectsInView ? 1 : 0, transition: {xs: 'opacity 2s', md: 'opacity 3s'},
                                    minHeight: '50vh' }}>
        <TopProjects />
      </Box>
      <hr style={{flexGrow: 1, maxWidth: '80%', width: '80%'}} />
      <Box ref={timelineRef} sx={{ minWidth: {xs: '90vw', md: '80vw'}, opacity: timelineInView ? 1 : 0, transition: {xs: 'opacity 2s', md: 'opacity 3s'} }}>
        <Typography variant="h4" align="center" gutterBottom style={{marginTop: '40px', marginBottom: '10px'}}>
          Experiences
        </Typography>
        <TimelineFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <VerticalTimeline data={sortedData} />
      </Box>
    </Container>
  );
}

export default Home;
