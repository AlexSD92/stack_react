import '../../customcss/answers.css';
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
        </div>
        )
      };
      
export default AnswerDetail;