// Home.js
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import VerticalTimeline from '../components/VerticalTimeline';
import SocialMediaSidebar from '../components/SocialMediaSidebar';
import TimelineFilter from '../components/TimelineFilter';

import workData from '../data/workData.json';
import educationData from '../data/educationData.json';
import certificationData from '../data/certificationData.json';
import projectData from '../data/projectData.json';
import courseData from '../data/courseData.json';

import socialMediaData from '../data/socialMediaData.json';

function Home() {
  const [selectedFilters, setSelectedFilters] = useState(['work', 'education', 'certification', 'course', 'project']);

  const handleTimelineFilterChange = (value) => {
    setSelectedFilters(value);
  };

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
    <Box style={{ padding: '20px' }}>
      <TimelineFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <VerticalTimeline data={sortedData} />
      <SocialMediaSidebar socialMediaData={socialMediaData} />
    </Box>
  );
}

export default Home;
