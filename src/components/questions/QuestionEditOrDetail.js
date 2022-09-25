import '../../customcss/questions.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import QuestionDetail from './QuestionDetail';
import NewAnswerForm from '../answers/NewAnswerForm';
import AnswerList from '../answers/AnswerList';
import { axiosReq } from '../../api/axiosDefaults';


function QuestionEditOrDetail() {
    const currentUser = useCurrentUser();

    const params = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axiosReq.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`).then((response) => {
        setQuestions(response.data);
        });
    }, [params]);

    if (!questions) return null;

    return (
        <div>

            <QuestionDetail />

            {currentUser ?
                <NewAnswerForm /> :
                null
            }

            <AnswerList questions={questions} />

        </div>
    )
};

export default QuestionEditOrDetail;