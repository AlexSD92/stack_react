import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuestionList() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/questions/').then((response) => {
            setQuestions(response.data);
        });
    }, []);

    if (!questions) return null;

  return (
    <div>
        {questions[0] && questions.map(question => {
            return (
                <div key={question.id}>
                <h6>{question.question}</h6>
                </div>
            )
        })}
    </div>
  );
}

export default QuestionList