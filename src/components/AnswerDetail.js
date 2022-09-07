import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function AnswerDetail() {

    const params = useParams()
    const [answers, setAnswers] = useState([])

    useEffect(() => {
      axios.get(`https://stack-drf-api.herokuapp.com/answers/${params.id}`).then((response) => {
        setAnswers(response.data);
      });
    }, []);

    if (!answers) return null;

    return (
        <div>
                <div className='container m-5'>
                <h2><a className='link-style'>{answers.answer}</a></h2>
                <h6 className='badge rounded-pill bg-secondary'>{answers.created_at}</h6>
                <h6>{answers.updated_at}</h6>
                </div>
        </div>
        )
}

export default AnswerDetail;