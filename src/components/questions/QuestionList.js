import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import NewQuestionForm from './NewQuestionForm';

function QuestionList() {
    const currentUser = useCurrentUser();
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/questions/').then((response) => {
            setQuestions(response.data);
        });
    }, []);

    if (!questions) return null;

  return (
    <div>
        {currentUser ? <NewQuestionForm /> : null}

        {questions[0] && questions.map(question => {
            return (
                <Container key={question.id} className='list mt-5'>
                    <div>
                    <h3 className=''><Link className='unstyle m-0' to={`/questions/${question.id}`}>{question.summary}</Link></h3>
                    <p className='m-0'>{question.question}</p>                      
                    <h5 className='badge rounded-pill bg-success'>{question.owner}</h5>                  
                    <h5 className='badge rounded-pill bg-secondary'>{question.created_at}</h5>                      
                    <h5 className='badge rounded-pill bg-secondary'>{question.updated_at}</h5>                      
                    </div>
                </Container>
            )
        })}
    </div>
  );
}

export default QuestionList