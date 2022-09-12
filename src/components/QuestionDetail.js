import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import AnswerList from './AnswerList';
import NewAnswerForm from './NewAnswerForm';
import { Container } from 'react-bootstrap'


function QuestionDetail() {

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
                    </div>
                    <br/><br/>
                <NewAnswerForm questions={questions} />
                <br/><br/>
                <AnswerList questions={questions} />
                </Container>           
        </div>
        )
}


export default QuestionDetail;