import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import VerticalTimeline from '../components/VerticalTimeline';
import SocialMediaSidebar from '../components/SocialMediaSidebar';
import TimelineFilter from '../components/TimelineFilter';
import Profile from '../components/Profile';
import Services from '../components/Services';
import { useInView } from 'react-intersection-observer'; // Import useInView

import workData from '../data/workData.json';
import educationData from '../data/educationData.json';
import certificationData from '../data/certificationData.json';
import projectData from '../data/projectData.json';
import courseData from '../data/courseData.json';

import socialMediaData from '../data/socialMediaData.json';
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
    <Container style={{ padding: '20px' }}>
      <Box ref={profileRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '80vw', 
                                     maxHeight: '100vh', opacity: profileInView ? 1 : 0, transition: 'opacity 3s',
                                     minHeight: '100vh' }}>
        <Profile />
      </Box>
      <hr />
      <Box ref={servicesRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '80vw',
                                    maxHeight: '100vh', opacity: servicesInView ? 1 : 0, transition: 'opacity 3s',
                                    minHeight: '50vh' }}>
        <Services />
      </Box>
      <hr />
      <Box ref={projectsRef} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '80vw',
                                    maxHeight: '100vh', opacity: projectsInView ? 1 : 0, transition: 'opacity 3s',
                                    minHeight: '50vh' }}>
        <TopProjects />
      </Box>
      <hr />
      <Box ref={timelineRef} style={{ opacity: timelineInView ? 1 : 0, transition: 'opacity 3s' }}>
        <Typography variant="h4" align="center" gutterBottom style={{paddingTop: '40px', paddingBottom: '10px'}}>
          Experiences
        </Typography>
        <TimelineFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <VerticalTimeline data={sortedData} />
      </Box>
      <SocialMediaSidebar socialMediaData={socialMediaData} />
    </Container>
  );
}

export default Home;
