import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function AnswerList() {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/answers/').then((response) => {
            setAnswers(response.data);
        });
    }, []);

    if (!answers) return null;

    return (
        <div>
            {answers[0] && answers.map(answer => {
                return (
                    <div key={answer.id}>
                        <Link to={`/answers/${answer.id}`}>
                            <h6>{answer.answer}</h6>
                        </Link>
                    </div>
                )
            })}
        </div>
    );

}

export default AnswerList