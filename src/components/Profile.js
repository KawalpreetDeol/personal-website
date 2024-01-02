import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import '../styles/Profile.css';

const Profile = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const jobTitles = ['Software Engineer', 'Data Engineer'];

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
          Welcome to my professional portfolio. I enjoy developing intuitive and effective solutions to solve complex problems. 
          With a keen eye for stakeholder needs and a penchant for critical thinking, I bring a customer-focused approach to every project. 
          Explore my portfolio to understand how my expertise can benefit your company. I am eager to join a team where I can make a meaningful impact.
        </Typography>
      </Box>

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
