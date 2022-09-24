import '../../customcss/answers.css';
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function NewAnswerForm() {
  const params = useParams();
  const [errors, setErrors] = useState({});
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

  const handleSubmit = async (event) => {
    const formData = new FormData();

    formData.append("answer", answer);
    formData.append("question", params.id);

    try {
      await axios.post("https://stack-drf-api.herokuapp.com/answers/", formData)
      .then(alert('You have successfully created an answer!'));
      history(`/questions/${params.id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.respose?.data)
      }
    }
  };

  return(
    <div className='parentdivmargin'>

      <h3 className='left'>Add an answer to this question:</h3>

      <br/>

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
        {console.log(errors)}
        <br/>
        <Button variant='success' type="submit">Submit</Button>
      </Form>
      
      <br/><br/><hr/><br/><br/>

    </div>
  )
};

export default NewAnswerForm;