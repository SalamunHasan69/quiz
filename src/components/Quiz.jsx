import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {

  const loaderData = useLoaderData()
  console.log(loaderData);

  const { data } = loaderData
  const { questions } = data
  console.log(data);

  return (
    <div>
      {
        questions.map(abc => <Questions key={abc.id} abc={abc}></Questions>)
      }
    </div>
  );
};

export default Quiz;