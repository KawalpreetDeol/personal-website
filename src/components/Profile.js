import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import '../styles/Profile.css'; // Import a separate CSS file for styling

const Profile = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const jobTitles = ['Data Engineer', 'Data Analyst', 'Cloud Architect'];

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
          I am passionate about solving real-world problems with efficient and effective data solutions.
          Seeking meaningful projects and innovative partnerships, I am eager to bring my insights and talents to 
          a team or project that values excellence and creativity. 
        </Typography>
      </Box>

      {/* Right Column */}
      <Box className="right-column">
        <Avatar className="avatar">
          {/* Your profile picture or icon */}
          <img src="your-profile-picture.jpg" alt="Profile" className="avatar-image" />
        </Avatar>
      </Box>
    </Box>
  );
};

export default Profile;
