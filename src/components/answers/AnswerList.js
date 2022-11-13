import '../../customcss/answers.css';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { axiosReq } from '../../api/axiosDefaults';


function AnswerList(props) {
    const [answers, setAnswers] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchAnswers = async () => {
            try {
                const { data } = await axiosReq.get('https://stack-drf-api.herokuapp.com/answers/');
                setAnswers(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchAnswers();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [pathname]);



    if (!answers) return null;

    return (
        <div className='list parentdivmargin'>
            <h2>Recent answers to this question:</h2>

            <br/>

            {hasLoaded ? (

                answers[0] && answers.filter(answer => answer.question_id === props.questions.id).map(filteredAnswer => {
                    return (
                        <div key={filteredAnswer.id} className='list mt-2 individuala'>
                            <Row>
                                <Col xs={10}>
                                    <p className=''><Link className='unstyle m-0' to={`/answers/${filteredAnswer.id}`}>{filteredAnswer.answer}</Link></p>
                                </Col>
                                <Col>
                                    <Row><p>Created by:</p></Row>
                                    <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-success'>{filteredAnswer.owner}</h5></Row>
                                    <Row><p>Created on:</p></Row>
                                    <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{filteredAnswer.created_at}</h5></Row>
                                    <Row><p>Updated on:</p></Row>
                                    <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{filteredAnswer.updated_at}</h5></Row>
                                </Col>                        
                            </Row>
                        </div>
                    )
                })

            ) : (
                <h1>Data loading.</h1>
            )}

        </div>
    );
};

export default AnswerList;