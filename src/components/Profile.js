// Profile.js
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Box style={{ display: 'flex', marginBottom: '6vh', justifyContent: 'center', alignItems: 'center' }}>
      {/* Left Column */}
      <Box style={{ flex: 1, paddingRight: '20px' }}>
        <Typography variant="h1" sx={{ fontWeight: 700, marginBottom: '8px', fontSize: '4.4vw' }}>
          Kawalpreet Deol
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 500, marginBottom: '8px', fontSize: '3.3vw' }}>
          Data Engineer
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '8px', fontSize: '1.1vw' }}>
        I am passionate about solving real-world problems with efficent and effective data solutions.
        Seeking meaningful projects and innovative partnerships, I am eager to bring my talents to 
        a team or project that values excellence and creativity. 
        </Typography>
      </Box>

      {/* Right Column */}
      <Box>
        <Avatar sx={{ width: '50vh', height: '50vh' }}>
          {/* Your profile picture or icon */}
          <img src="your-profile-picture.jpg" alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </Avatar>
      </Box>
    </Box>
  );
};

export default Profile;
