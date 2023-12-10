// TimelineFilter.js
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
    <Box>
      <Typography variant="h6">Filter Timeline:</Typography>
      <FormControlLabel
        control={<Checkbox checked={selectedFilters.length === 5} onChange={handleAllChange} />}
        label="All"
      />
      {['work', 'education', 'certification', 'course', 'project'].map((filter) => (
        <FormControlLabel
          key={filter}
          control={<Checkbox checked={selectedFilters.includes(filter)} onChange={() => handleChange(filter)} />}
          label={filter.charAt(0).toUpperCase() + filter.slice(1)}
        />
      ))}
    </Box>
  );
};

export default TimelineFilter;
