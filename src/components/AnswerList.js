import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            {answers[0] && answers.filter(answer => answer.question_id === props.questions.id).map(filteredAnswer => {
                return (
                    <div key={filteredAnswer.id}>
                        <Link to={`/answers/${filteredAnswer.id}`}>
                            <h6>{filteredAnswer.answer}</h6>
                        </Link>
                    </div>
                )
            })}
        </div>
    );

}

export default AnswerList