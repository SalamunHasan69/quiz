import React from 'react';

const Questions = ({ abc }) => {
  const { question, correctAnswer, options } = abc
  return (
    <div>
      <p>{question}</p>
      <small>{options}</small>
    </div>
  );
};

export default Questions;