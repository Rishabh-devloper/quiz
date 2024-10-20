import React, { useState } from 'react';
import { questions } from './MCQData';
import { Grid, Container, Button, Typography, Box } from '@mui/material';
import Question from './component/Question';
import Result from './component/Result';
import { motion } from 'framer-motion';
import './App.css'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <Container maxWidth="sm">
      {showResult ? (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Result score={score} totalQuestions={questions.length} />
        </Box>
      ) : (
        <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Question 
            question={questions[currentQuestion]} 
            handleAnswerOptionClick={handleAnswerOptionClick} 
          />
        </Box>
      )}
    </Container>
  );
}

export default App;
