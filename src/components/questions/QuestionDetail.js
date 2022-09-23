import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditQuestionForm from './EditQuestionForm';


function QuestionDetail() {
    const currentUser = useCurrentUser();

    const params = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
      axios.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`).then((response) => {
        setQuestions(response.data);
      });
    }, [params]);

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
                    {currentUser && currentUser.username === questions.owner ?  
                      <EditQuestionForm /> : 
                      <h4>You are unable to edit this question because you are not the owner or you are not currently signed in.</h4>
                    }
                    <Link to={`/questions/${questions.id}/newanswer`}>Add an answer to this question.</Link>
                    </div>
                    <br/><br/>

                <br/><br/>
                
                </Container>           
        </div>
        )
}


export default QuestionDetail;