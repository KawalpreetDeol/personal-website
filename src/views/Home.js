import React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import VerticalTimeline from '../components/VerticalTimeline';
import SocialMediaSidebar from '../components/SocialMediaSidebar';

import workData from '../data/workData.json';
import educationData from '../data/educationData.json';
import certificationData from '../data/certificationData.json';
import projectData from '../data/projectData.json';
import courseData from '../data/courseData.json';

import socialMediaData from '../data/socialMediaData.json';

function Home() {
   // Combine all data
   const allData = [...workData, ...educationData, ...certificationData, ...projectData, ...courseData];

   // Sort combined data by end date for work and education, and earned date for certification
   const sortedData = allData.sort((a, b) => {
     if (a.type === 'certification' && b.type === 'certification') {
       return new Date(b.earnedDate) - new Date(a.earnedDate);
     } else {
       return new Date(b.endDate || b.earnedDate) - new Date(a.endDate || a.earnedDate);
     }
   }); 

  return (
    <Box style={{ padding: '20px' }}>
      <VerticalTimeline data={sortedData} />
      <SocialMediaSidebar socialMediaData={socialMediaData} />
    </Box>
  );
}

export default Home;