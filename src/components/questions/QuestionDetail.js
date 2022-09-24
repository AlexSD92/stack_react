import '../../customcss/questions.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditQuestionForm from './EditQuestionForm';
import axios from 'axios';


function QuestionDetail() {
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
      <div className='parentdivmargin'>
        <Container className='list mt-5'>
          <h1>Question details.</h1>  

          <br/>

            <div className='individualq'>
              <h2 className=''>{questions.summary}</h2>
              <p className='m-0'>{questions.question}</p>

              <br/>

              <p>This question was created by <strong>{questions.owner}</strong> on <strong>{questions.created_at}</strong>.</p>
              <p><strong>{questions.owner}</strong> last updated this question on <strong>{questions.updated_at}</strong></p>
                            
              {currentUser && currentUser.username === questions.owner ?  
                <EditQuestionForm /> : 
                null
              }
            </div>
            
          <br/><br/><hr/><br/><br/>
      
        </Container>           
      </div>
  )
}


export default QuestionDetail;