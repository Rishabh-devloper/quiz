import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Result({ score, totalQuestions }) {
  return (
    <Box p={4} borderRadius={2} boxShadow={3} bgcolor="#fff" textAlign="center">
      <Typography variant="h3" gutterBottom component={motion.div}>
        Quiz Completed!
      </Typography>
      <Typography variant="h6" component={motion.div}>

        
        You scored {score} out of {totalQuestions}
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={() => window.location.reload()}
        component={motion.button}
        whileHover={{ scale: 1.05 }}
      >
        Restart Quiz
      </Button>
    </Box>
  );
}

export default Result;
