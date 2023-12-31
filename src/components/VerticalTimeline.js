import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
// import DescriptionIcon from '@mui/icons-material/Description';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ApprovalIcon from '@mui/icons-material/Approval';
import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const formatDateRange = (startDate, endDate) => {
  const startDateFormat = new Date(startDate);
  const endDateFormat = new Date(endDate);

  const formattedStartDate = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(startDateFormat);
  const formattedEndDate = endDateFormat ? new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(endDateFormat) : 'Present';

  return formattedStartDate == formattedEndDate ? `${formattedStartDate}` : `${formattedStartDate} - ${formattedEndDate}`;
};

const formatSkills = (skills) => skills.join(' · ');

const VerticalTimeline = ({ data }) => {
  return (
    <Timeline position="alternate" minWidth='100vw'>
      {data.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={event.type === 'work' ? 'primary' : 
                                event.type === 'education' ? 'secondary' : 
                                event.type === 'project' ? 'primary' : 
                                event.type === 'course' ? 'secondary' : 
                                'info'}>
              {event.type === 'work' ? <WorkIcon /> : 
              event.type === 'education' ? <SchoolIcon /> :
              event.type === 'certification' ? <ApprovalIcon /> : 
              event.type === 'course' ? <AutoStoriesIcon /> : 
              <CodeIcon />}
            </TimelineDot>
            {index < data.length && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} style={{ padding: '13px 20px 20px 20px', maxWidth: '380px', marginLeft: index % 2 ? 'auto' : '0px', marginRight: index % 2 ? '0px' : 'auto'}} >
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              {!!(index%2) && (
                <img
                  src={'./logos/' + event.logoURL}
                  alt= {event.company + " Logo"}
                  style={{ maxWidth: '40px', maxHeight: '40px', padding: '5px' }}
                />
              )}
              <Typography variant="h6" component="div" style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                {event.title}
              </Typography>
              {!(index%2) && (
                <img
                  src={'./logos/' + event.logoURL}
                  alt= {event.company + " Logo"}
                  style={{ maxWidth: '40px', maxHeight: '40px', padding: '5px' }}
                />
              )}
              </div>
              {event.type === 'work' && (
                <>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {formatDateRange(event.startDate, event.endDate)}
                    <br />
                    {event.company}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {`${event.location.city}, ${event.location.state}`}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {formatSkills(event.skills)}
                  </Typography>
                </>
              )}
              {event.type === 'education' && (
                <>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {formatDateRange(event.startDate, event.endDate)}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {event.degree}
                  </Typography>
                </>
              )}
              {event.type === 'certification' && (
                <>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {event.agency}
                    <br />
                    {`Certification ID: `}
                    <a href={event.certificationIdURL} target="_blank" rel="noopener noreferrer">
                      {event.certificationId}
                    </a>
                    <br />
                    {`Earned: ${event.earnedDate}`}
                    <br />
                    {`Expires: ${event.expDate}`}
                  </Typography>
                </>
              )}
              {event.type === 'course' && (
                <>
                  <Typography variant="body1" color="text.secondary" display="block">
                    {formatDateRange(event.startDate, event.endDate)}
                    <br />
                    {event.agency}
                    <br />
                    {`Instructor: `}
                    {event.instructor}
                    <br />
                    {event.certificalId != "" && (<span style={{ overflowWrap: "break-word" }}>
                      {`Certificate ID: `}
                    <a href={event.certificationIdURL} target="_blank" rel="noopener noreferrer">
                      {event.certificationId}
                    </a></span>)}
                    <br />
                    {formatSkills(event.skills)}
                    <br />
                    {event.courseURL != "" && (<a href={event.courseURL} target="_blank" rel="noopener noreferrer">
                    View Course
                  </a>)}
                  </Typography>
                </>
              )}
              {event.type === 'project' && (
                <>
                <Typography variant="body1" color="text.secondary" display="block">
                  {formatDateRange(event.startDate, event.endDate)}
                  <br />
                  {event.shortDesc}
                  <br />
                  {formatSkills(event.skills)}
                  <br />
                  {event.projectURL != "" && (<a href={event.projectURL} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>)}
                </Typography>
              </>
              )}
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default VerticalTimeline;