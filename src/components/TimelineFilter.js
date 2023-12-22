import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

const TimelineFilter = ({ selectedFilters, setSelectedFilters }) => {

  const handleChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(updatedFilters);
  };

  const handleAllChange = () => {
    setSelectedFilters(selectedFilters.length === 5 ? [] : ['work', 'education', 'certification', 'course', 'project']);
  };

  return (
    <Box style={{textAlign: 'center'}}>
      <FormControlLabel
        control={<Checkbox checked={selectedFilters.length === 5} onChange={handleAllChange} />}
        label="All"
      />
      {['work', 'education', 'certification', 'course', 'project'].map((filter) => (
        <FormControlLabel
          key={filter}
          control={<Checkbox checked={selectedFilters.includes(filter)} onChange={() => handleChange(filter)} />}
          label={filter.charAt(0).toUpperCase() + filter.slice(1) + (filter === 'course' || filter === 'certification' || filter === 'project' ? 's' : '')}
        />
      ))}
    </Box>
  );
};

export default TimelineFilter;
