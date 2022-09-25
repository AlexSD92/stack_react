import '../../customcss/questions.css';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import axios from "axios";


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
            const { data } = await axios.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`);
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

  const handleDelete = async() => {
    try {
      await axios.delete(`https://stack-drf-api.herokuapp.com/questions/${params.id}`)
      history('/questions/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    if (customError) event.preventDefault();
    const formData = new FormData();

    formData.append("summary", summary);
    formData.append("question", question);
    
    try {
      await axios.put(`https://stack-drf-api.herokuapp.com/questions/${params.id}`, formData);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
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
        {summary.length === 0 ? customError = <Alert variant='warning'>You can't leave this field empty, please resolve or you will be unable to submit</Alert> : null}
        {summary.length > 100 ? customError = <Alert variant='warning'>Summary must be less than 100 characters, please resolve or you will be unable to submit</Alert> : null}
        {console.log(errors)}
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
        {console.log(errors)}

        <br/>
        

        <Row>
          <Col><Button variant='success' type="submit">Submit</Button></Col>
          <Col><Button variant='danger'><Link className='unstyle m-0' to={`/questions/${params.id}/delete`}>Delete</Link></Button></Col>
        </Row>

      </Form>

      <br/><br/><hr/><br/><br/>

    </div>
  )
};

export default EditQuestionForm;