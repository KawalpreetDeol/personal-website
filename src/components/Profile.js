import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import '../styles/Profile.css';

import SocialMediaBox from '../components/SocialMediaBox';
import socialMediaData from '../data/socialMediaData.json';

const Profile = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const jobTitles = ['Software Engineer', 'Data Engineer', 'Data Analyst', 'Full-Stack Engineer'];

  useEffect(() => {
    let currentIndex = 0;
  
    const typeAnimation = () => {
      const title = jobTitles[currentIndex];
  
      // Delete current title
      for (let i = title.length; i >= 0; i--) {
        setTimeout(() => {
          setJobTitle((prevTitle) => prevTitle.slice(0, -1));
        }, (title.length - i) * 50); // Adjust the erasing speed (50ms per character)
      }
  
      // Pause before typing the next word
      setTimeout(() => {
        setJobTitle(''); // Clear the title
        // Type the next word
        for (let i = 0; i < title.length; i++) {
          setTimeout(() => {
            setJobTitle((prevTitle) => prevTitle + title[i]);
          }, i * 50); // Adjust the typing speed (50ms per character)
        }
      }, (title.length + 1) * 50); // Adjust the pause duration
  
      // Show cursor during typing
      setCursorVisible(true);
  
      // Hide cursor after typing is complete
      setTimeout(() => {
        setCursorVisible(false);
      }, (title.length * 2 + 1) * 50 + 500); // Adjust the delay after typing is complete
    };
    
    const typingInterval = setInterval(() => {
      typeAnimation();
      // Move to the next job title in the array
      currentIndex = (currentIndex + 1) % jobTitles.length;
    }, 3000); // Adjust the interval between title changes
  
    // Clear interval after component unmounts
    return () => clearInterval(typingInterval);
  }, []);
  

  return (
    <Box className="profile-container">
      {/* Left Column */}
      <Box className="left-column">
        <Typography variant="h1" className="name" >
          Kawalpreet Deol
        </Typography>
        <Typography variant="h4" className="job-title" >
          {jobTitle}
          {cursorVisible && <span className="cursor">|</span>}
        </Typography>
        <Typography variant="body1" className="description">
          Hi, I'm Kawal! Welcome to my professional portfolio. I thrive on crafting intuitive and effective solutions to complex challenges. 
          With a sharp focus on stakeholder needs and a strong capacity for critical thinking, I adopt a customer-centric approach in every project. 
          Explore my portfolio to see how my expertise can advance your company’s objectives. I'm eager to join a team where I can deliver meaningful impact.
        </Typography>
      </Box>
      <div style={{paddingTop: '50px'}}>
        <SocialMediaBox socialMediaData={socialMediaData}/>
      </div>
      
      {/* Right Column */}
      <Box className="right-column">
        <Avatar className="avatar">
          <img src="profile_pic.jpg" alt="Profile" className="avatar-image" />
        </Avatar>
      </Box>
      
    </Box>
  );
};

export default Profile;
