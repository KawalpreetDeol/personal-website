// Sidebar.js

import React from 'react';
import { styled } from '@mui/system';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  padding: theme.spacing(2),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LargerIconButton = styled(IconButton)(({ theme }) => ({
  fontSize: '3rem', // Increase the font size by 5%
  marginBottom: theme.spacing(1), // Add margin to the bottom for spacing
}));

const VerticalLine = styled('div')(({ theme }) => ({
  width: '1px',
  height: '15vh', // Adjust the height as needed
  backgroundColor: 'rgba(0, 0, 0, 0.87)', // Adjust the color as needed
  margin: '0 8px', // Adjust the margin as needed
}));

const SocialMediaBox = ({ socialMediaData }) => {
  return (
    <SocialMediaContainer sx={{display: {xs: 'flex', md: 'none'}}}>
      {socialMediaData.map((media, index) => (
          <LargerIconButton href={media.url} key={index} target="_blank" rel="noopener noreferrer">
            {media.icon === 'LinkedInIcon' && <LinkedInIcon fontSize='inherit'/>}
            {media.icon === 'GitHubIcon' && <GitHubIcon fontSize='inherit'/>}
            {media.icon === 'TwitterIcon' && <TwitterIcon fontSize='inherit'/>}
            {media.icon === 'InstagramIcon' && <InstagramIcon fontSize='inherit'/>}
          </LargerIconButton>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMediaBox;
