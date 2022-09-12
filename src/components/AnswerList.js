import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'

function AnswerList(props) {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/answers/').then((response) => {
            setAnswers(response.data);
        });
    }, []);

    if (!answers) return null;

    return (
        <div>
            <h4>Answers:</h4>
            {answers[0] && answers.filter(answer => answer.question_id === props.questions.id).map(filteredAnswer => {
                return (
                    <Container className='list mt-2'>
                        <div key={filteredAnswer.id}>
                        <p className=''><Link className='unstyle m-0' to={`/answers/${filteredAnswer.id}`}>{filteredAnswer.answer}</Link></p>
                        <h5 className='badge rounded-pill bg-success'>{filteredAnswer.owner}</h5>                  
                        <h5 className='badge rounded-pill bg-secondary'>{filteredAnswer.created_at}</h5>                      
                        <h5 className='badge rounded-pill bg-secondary'>{filteredAnswer.updated_at}</h5>                      
                        </div>
                    </Container>
                )
            })}
        </div>
    );

}

export default AnswerList