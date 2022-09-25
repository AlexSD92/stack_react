import '../../customcss/answers.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';


function AnswerDetail() {
  const currentUser = useCurrentUser();

  const params = useParams()
  const [answers, setAnswers] = useState([])
  
  useEffect(() => {
      axiosReq.get(`https://stack-drf-api.herokuapp.com/answers/${params.id}`).then((response) => {
        setAnswers(response.data);
      });
    }, [params]);

    if (!answers) return null;

    return (
      <div className='parentdivmargin mt-5'>
          <h1 className='left'>Answer details.</h1>

          <br/>

          <div className='list individuala'>
          <p>{answers.answer}</p>
          <p>This question was created by <strong>{answers.owner}</strong> on <strong>{answers.created_at}</strong>.</p>
              <p><strong>{answers.owner}</strong> last updated this question on <strong>{answers.updated_at}</strong></p>
          </div>   
          {currentUser && currentUser.username === answers.owner ?
            <Link className='unstylelinkbutton' to={`/answers/${answers.question_id}/${answers.id}/edit`}><Button>Edit</Button></Link>    
            : 
            null
            }             
        </div>
        )
      };
      
export default AnswerDetail;