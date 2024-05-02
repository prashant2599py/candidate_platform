import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  const { title, company, location, description, experience } = job;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="text.secondary">
          {company} - {location}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <Typography color="text.secondary">
          Experience: {experience}
        </Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;