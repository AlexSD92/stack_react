import '../../customcss/answers.css';
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';
import WarningMessage from '../messages/WarningMessage';


function NewAnswerForm() {
  const currentUser = useCurrentUser();
  const params = useParams();
  const [errors, setErrors] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answerData, setAnswerData] = useState({
    answer: "",
  });
  const { answer } = answerData;
  const history = useNavigate();

  const handleChange = (event) => {
    setAnswerData({
      ...answerData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    axiosReq.get(`https://stack-drf-api.herokuapp.com/questions/${params.question_id}`).then((response) => {
      setQuestions(response.data);
    });
  }, [params]);

  if (!questions) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("answer", answer);
    formData.append("question", params.question_id);

    try {
      await axiosReq.post("https://stack-drf-api.herokuapp.com/answers/", formData)
      .then(history(`/questions/${params.question_id}`));
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.respose?.data);
        console.log(errors);
      }
    }
  };

  return(
    <div className='parentdivmargin mt-5'>

          <h3 className='left'>Add an answer to this question:</h3>

          <div className='individualq'>
                  <h2 className=''>{questions.summary}</h2>
                  <p className='m-0'>{questions.question}</p>

                  <br/>

                  <p>This question was created by <strong>{questions.owner}</strong> on <strong>{questions.created_at}</strong>.</p>
                  <p><strong>{questions.owner}</strong> last updated this question on <strong>{questions.updated_at}</strong></p>
                              
                </div>

          <br/>

      {!currentUser ?
        <>
          <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Control 
                disabled
                placeholder='You need to be logged in to post answers'
                as='textarea'
                rows={3}
                required
                type="text"
                name="answer"
                value={answer}
                onChange={handleChange}
              />
            </Form.Group>
            
            <br/>

            <Button variant='success' type="submit">Submit</Button>

          </Form>
          
          <br/><br/><hr/><br/><br/>
        </>
      :
        <>
          <Form onSubmit={handleSubmit}>

            <Form.Group>
              <Form.Control 
                as='textarea'
                rows={3}
                required
                type="text"
                name="answer"
                value={answer}
                onChange={handleChange}
              />
            </Form.Group>
            
            <br/>

            <Button variant='success' type="submit">Submit</Button>

          </Form>
          
          <br/><br/><hr/><br/><br/>
        </>

      
      }

    </div>
  )
};

export default NewAnswerForm;