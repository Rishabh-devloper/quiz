import React from 'react';
import { Typography, Grid, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Question({ question, handleAnswerOptionClick }) {
  return (
    <Box p={4} borderRadius={2} boxShadow={3} bgcolor="#fff">
      <Typography variant="h5" gutterBottom component={motion.div}>
        {question.questionText}
      </Typography>
      <Grid container direction="column" spacing={2}>
        {question.answerOptions.map((option, index) => (
          <Grid item key={index}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              onClick={() => handleAnswerOptionClick(option.isCorrect)}
              component={motion.button}
              whileHover={{ scale: 1.05 }}
            >
              {option.answerText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Question;
