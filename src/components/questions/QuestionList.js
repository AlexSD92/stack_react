import '../../customcss/questions.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import WarningMessage from '../messages/WarningMessage';
import { axiosReq } from '../../api/axiosDefaults';


function QuestionList() {
    const currentUser = useCurrentUser();
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axiosReq.get('https://stack-drf-api.herokuapp.com/questions/').then((response) => {
            setQuestions(response.data);
        });
    }, []);

    if (!questions) return null;

  return (
    <div className='parentdivmargin'>
        <Container  className='list mt-5'>

        {currentUser ? 
        <Link className='unstylelinkbutton' to={`/questions/add/${currentUser.username}`}><Button variant='success'>Add Question</Button></Link>
        : 
        <WarningMessage />}

        <br/><br/><hr/><br/><br/>

        <h2>Current questions:</h2>

        <br/>

        {questions[0] && questions.map(question => {
            return (
                <div className='individualq' key={question.id}>
                    <Row>
                        <Col xs={10}>
                            <h3 className='text-wrap'><Link className='unstyle m-0' to={`/questions/${question.id}`}>{question.summary}</Link></h3>
                            <p className='m-0'>{question.question}</p>                         
                        </Col>
                        <Col>
                            <Row><p>Created by:</p></Row>
                            <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-success'>{question.owner}</h5></Row>
                            <Row><p>Created on:</p></Row>
                            <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{question.created_at}</h5></Row>
                            <Row><p>Updated on:</p></Row>
                            <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{question.updated_at}</h5></Row>
                        </Col>   
                    </Row>
                </div>
            )
        })}
        </Container>
    </div>
    );
}

export default QuestionList