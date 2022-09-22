import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditAnswerForm from './EditAnswerForm';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import AnswerDetail from './AnswerDetail'


function AnswerEditOrDetail() {

    const currentUser = useCurrentUser();

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
            {currentUser && currentUser.username === answers.owner ?
                <EditAnswerForm answers={answers} /> :
                <AnswerDetail />
            }               
        </div>
        )
      }



export default AnswerEditOrDetail;