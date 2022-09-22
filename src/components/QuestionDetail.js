import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AnswerList from './AnswerList';
import { Container, Button } from 'react-bootstrap'
import { useCurrentUser } from '../contexts/CurrentUserContext';


function QuestionDetail() {
    const currentUser = useCurrentUser();

    const params = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
      axios.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`).then((response) => {
        setQuestions(response.data);
      });
    }, []);

    if (!questions) return null;

    return (
        <div>
                <Container className='list mt-5'>
                    <div>
                    <h2 className=''><Link className='unstyle m-0' to={`/questions/${questions.id}`}>{questions.summary}</Link></h2>
                    <p className='m-0'>{questions.question}</p>                      
                    <h5 className='badge rounded-pill bg-success'>{questions.owner}</h5>                  
                    <h5 className='badge rounded-pill bg-secondary'>{questions.created_at}</h5>                      
                    <h5 className='badge rounded-pill bg-secondary'>{questions.updated_at}</h5>   
                    {currentUser.username === questions.owner ? 
                      <Link to={`/questions/${questions.id}/editquestion`}>Edit this question.</Link> : 
                      <h4>You are unable to edit this question because you are not the owner.</h4>
                    }
                    <Link to={`/questions/${questions.id}/newanswer`}>Add an answer to this question.</Link>
                    </div>
                    <br/><br/>

                <br/><br/>
                <AnswerList questions={questions} />
                </Container>           
        </div>
        )
}


export default QuestionDetail;