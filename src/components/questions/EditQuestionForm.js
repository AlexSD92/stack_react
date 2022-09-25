import '../../customcss/questions.css';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';


function EditQuestionForm() {
  let customError = '';
  const currentUser = useCurrentUser();
  const [errors, setErrors] = useState({});
  const [questionData, setQuestionData] = useState({
    summary: "",
    question: "",
  });
  const { summary, question } = questionData;
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`);
            const { summary, question } = data;
            setQuestionData({ summary, question })
        } catch (err) {
            console.log(err);
        }
    };

    handleMount();
  }, [history, params]);

  const handleChange = (event) => {
    setQuestionData({
      ...questionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    if (customError) {
      event.preventDefault();
    } else {
      const formData = new FormData();
  
      formData.append("summary", summary);
      formData.append("question", question);
      
      try {
        await axiosReq.put(`https://stack-drf-api.herokuapp.com/questions/${params.id}`, formData)
        .then(history(`/questions/${params.id}`));        
      } catch (err) {
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          console.log(errors);
        }
      }
    }
  };
  
  return(
    <div className='mt-5 parentdivmargin'>
      {!currentUser ? customError = <Alert variant='danger'>You aren't authorised to edit this question</Alert> : null }
      <h1>Edit your question.</h1>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          {!currentUser ?
            <>
              <Form.Label>Summary</Form.Label>
              <Form.Control 
              disabled
              required
              type="text"
              name="summary"
              value={summary}
              onChange={handleChange}
            />
            </>
            :
            <>
              <Form.Label>Summary</Form.Label>
              <Form.Control 
              required
              type="text"
              name="summary"
              value={summary}
              onChange={handleChange}
            />   
            </>       
          }

        </Form.Group>
        {summary.length === 0 || summary.length > 100 ? customError = <Alert variant='warning'>Must be between 0 and 100 characters in length, please resolve or you will be unable to submit.</Alert> : null}
        
        <br/>

        <Form.Group>
        {!currentUser ?
          <>
            <Form.Label>Question</Form.Label>
            <Form.Control 
            as='textarea'
            rows='4'
            disabled
            required
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
            />  
          </>
          :
          <>
            <Form.Label>Question</Form.Label>
            <Form.Control 
            as='textarea'
            rows='4'
            required
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
            />  
            </>       
        }
        </Form.Group>
        {question.length === 0 ? customError = <Alert variant='warning'>You can't leave this field empty, please resolve or you will be unable to submit</Alert> : null}

        <br/>
        
        <Row>
          <Col md={6}><Button variant='success' type="submit">Submit</Button></Col>
          <Col md={6}><Link className='unstylelinkbutton m-0' to={`/questions/${params.id}/delete/${params.owner}`}><Button variant='danger'>Delete</Button></Link></Col>
        </Row>

      </Form>

      <br/><br/><hr/><br/><br/>

    </div>
  )
};

export default EditQuestionForm;