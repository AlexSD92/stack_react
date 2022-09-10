import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerList from './AnswerList';
import NewAnswerForm from './NewAnswerForm';


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
                <div className='container m-5'>
                <h2><a className='link-style'>{questions.summary}</a></h2>
                <h6 className='badge rounded-pill bg-info'>{questions.question}</h6>
                <h6 className='badge rounded-pill bg-secondary'>{questions.created_at}</h6>
                <h6>{questions.updated_at}</h6>
                </div>                
                <AnswerList questions={questions} />
                <NewAnswerForm questions={questions} />
        </div>
        )
}


export default QuestionDetail;