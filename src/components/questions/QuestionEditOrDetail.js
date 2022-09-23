import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditQuestionForm from './EditQuestionForm'
import QuestionDetail from './QuestionDetail'
import axios from 'axios';
import NewAnswerForm from '../answers/NewAnswerForm';
import WarningMessage from '../messages/WarningMessage';
import AnswerList from '../answers/AnswerList';

function QuestionEditOrDetail() {
    const currentUser = useCurrentUser();

    const params = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
      axios.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`).then((response) => {
        setQuestions(response.data);
      });
    }, [params]);

    if (!questions) return null;

    return (
        <div>

            {currentUser && currentUser.username === questions.owner ?  
                <EditQuestionForm /> : 
                <QuestionDetail />
            }

            {currentUser ?
                <NewAnswerForm /> :
                <WarningMessage />
            }

            <AnswerList questions={questions} />

        </div>
    )
    }

export default QuestionEditOrDetail;