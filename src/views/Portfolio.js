import React from 'react';
import { Container, Grid, Typography, Box, Paper, Avatar, Divider, Button } from "@mui/material";
import { styled } from "@mui/system";
import workData from '../data/workData.json';
import educationData from '../data/educationData.json';
import certificationData from '../data/certificationData.json';
import projectData from '../data/projectData.json';
import courseData from '../data/courseData.json';

const formatDateRange = (startDate, endDate, status = "complete") => {
  const startDateFormat = new Date(startDate);
  const endDateFormat = new Date(endDate);

  const formattedStartDate = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(startDateFormat);
  const formattedEndDate = status == "complete" ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(endDateFormat) : 'Present';

  return formattedStartDate == formattedEndDate ? `${formattedStartDate}` : `${formattedStartDate} - ${formattedEndDate}`;
};

const formatSkills = (skills) => skills.join(', ');

// Combine all data based on the selected filter
const filteredData = (() => {
  return [...workData, ...educationData, ...certificationData, ...courseData, ...projectData].filter((item) =>
    true // selectedFilters.includes(item.type)
  );
})();

// Sort combined data by end date for work and education, and earned date for certification
const sortData = ((data) => {
  return data.sort((a, b) => {
    return new Date(b.endDate || b.earnedDate) - new Date(a.endDate || a.earnedDate);
  })
})

// Styled components for custom look and feel
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  // backgroundColor: ,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function Portfolio() {
  const sortedWorkData = sortData(workData)
  const sortedEducationData = sortData(educationData)
  const sortedCertificationData = sortData(certificationData)
  const sortedCourseData = sortData(courseData)
  const sortedProjectData = sortData(projectData)

  return (
    <Container maxWidth="md">
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Avatar
          alt="Kawalpreet Deol"
          src="/path-to-profile.jpg"
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Kawalpreet Deol
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Software Engineer | Backend, Cloud, Data, DevOps, and Full-Stack Development | Python, SQL, React, Django | AWS, Azure, GCP | Computer Engineering @ UWaterloo
        </Typography>
        <Typography variant="body2" mt={1}>
          Location: Toronto, Canada | Email: kawalpreetdeol@gmail.com | Phone: (647) 332-2048
        </Typography>
        <StyledButton variant="contained" color="primary">
          Download Resume
        </StyledButton>
      </Box>

      {/* Summary Section */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Summary
        </Typography>
        <Typography variant="body1">
          Results-driven Software Engineer with over 3 years of experience in automation, cloud computing, data engineering and full-stack development. 
          Proficient in Python, JavaScript, and SQL, with a strong background in AWS, Azure, GCP and serverless architectures. 
          Demonstrated expertise in designing scalable systems, building ETL pipelines, and deploying production-grade solutions. 
          Skilled in integrating OAuth 2.0 for secure authentication, managing IAM roles, and leveraging tools like AWS CloudWatch and GitHub Actions for performance monitoring and CI/CD automation.
        </Typography>
      </StyledPaper>

      {/* Skills Section */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1">React</Typography>
            <Typography variant="body1">Material-UI</Typography>
            <Typography variant="body1">Node.js</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">Docker</Typography>
            <Typography variant="body1">GitHub Actions</Typography>
            <Typography variant="body1">AWS/GCP</Typography>
          </Grid>
        </Grid>
      </StyledPaper>

      {/* Experience Section */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        {sortedWorkData.map((work, index) => (
          <span>
            {index > 0 ? <Divider />: ''}
            <Box mb={2} mt={index > 0 ? 2 : 0}>
              <Typography variant="h6">{work.title} @ {work.company}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {work.location.city}, {work.location.state} | {formatDateRange(work.startDate, work.endDate, work.status)}
              </Typography>
              <Typography variant="body2" mb={1} mt={1}>
                Top Skills: {formatSkills(work.skills)}
              </Typography>
              <Typography variant="body2">
                <ul>
                  <li>
                    Developed scalable full-stack applications using React and Node.js.
                  </li>
                  <li>
                    Developed scalable full-stack applications using React and Node.js.
                  </li>
                  <li>
                    Developed scalable full-stack applications using React and Node.js.
                  </li>
                </ul>
                
              </Typography>
            </Box>
          </span>
        ))
        }
      </StyledPaper>

      {/* Education Section */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Typography variant="h6">B.Sc. in Computer Engineering</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          University of Waterloo | Graduated June 2020
        </Typography>
      </StyledPaper>

      {/* Projects Section */}
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6">Fuel Cost Calculator App</Typography>
        <Typography variant="body2">
          - Built an Android app using Java to calculate fuel costs along routes.
          - Integrated Google Maps API for real-time navigation.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Portfolio Website</Typography>
        <Typography variant="body2">
          - Designed and deployed a personal portfolio site using React, Material-UI, and Firebase.
          - Showcases projects, blogs, and contact details in a modern layout.
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default Portfolio;

