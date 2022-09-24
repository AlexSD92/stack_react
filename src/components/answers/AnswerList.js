import '../../customcss/answers.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';


function AnswerList(props) {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/answers/').then((response) => {
            setAnswers(response.data);
        });
    }, []);

    if (!answers) return null;

    return (
        <div className='list parentdivmargin'>
            <h2>Recent answers to this question:</h2>

            <br/>

            {answers[0] && answers.filter(answer => answer.question_id === props.questions.id).map(filteredAnswer => {
                return (
                    <div key={filteredAnswer.id} className='list mt-2 individuala'>
                        <Row>
                            <Col xs={10}>
                                <p className=''><Link className='unstyle m-0' to={`/answers/${filteredAnswer.id}`}>{filteredAnswer.answer}</Link></p>
                            </Col>
                            <Col>
                                <Row><p>Created by:</p></Row>
                                <Row><h5 className='p-2 badge rounded-pill bg-success'>{filteredAnswer.owner}</h5></Row>
                                <Row><p>Created on:</p></Row>
                                <Row><h5 className='p-2 badge rounded-pill bg-secondary'>{filteredAnswer.created_at}</h5></Row>
                                <Row><p>Updated on:</p></Row>
                                <Row><h5 className='p-2 badge rounded-pill bg-secondary'>{filteredAnswer.updated_at}</h5></Row>
                            </Col>                        
                        </Row>
                    </div>
                )
            })}
        </div>
    );
};

export default AnswerList;