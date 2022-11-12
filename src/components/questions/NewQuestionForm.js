import '../../customcss/questions.css';
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosReq } from '../../api/axiosDefaults';


function NewQuestionForm() {

  let customError = '';
  const [errors, setErrors] = useState({});
  const [questionData, setQuestionData] = useState({
    summary: "",
    question: "",
  });
  const { summary, question } = questionData;
  const history = useNavigate();

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
        event.preventDefault();
        const formData = new FormData();  
        formData.append("summary", summary);
        formData.append("question", question);
  
      try {
        await axiosReq.post("https://stack-drf-api.herokuapp.com/questions/", formData)
        .then(toast.success('You question was successfully submitted!'))
        .then(history('/questions'));
 
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.respose?.data)
          console.log(errors)
        }
      }
    }
  };

  return(
    <div className='parentdivmargin mt-5'>

      <h1>Add a new question.</h1>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Summary</Form.Label>
          <Form.Control 
            required
            type="text"
            name="summary"
            value={summary}
            onChange={handleChange}
          />
        </Form.Group>
        {summary.length > 100 ? customError = <Alert variant='warning'>Summary must be less than 100 characters, please resolve or you will be unable to submit</Alert> : null}
        
        <br/>

        <Form.Group>
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
        </Form.Group>
          
        <br/>

        <Button variant="success" type="submit">Submit</Button>
        {/* <ToastContainer /> */}
      </Form>

    </div>
  )
};

export default NewQuestionForm