import React, { useState } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


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
    <div>

      <h4>Add an answer to this question:</h4>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Control 
            required
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
          />
        </Form.Group>
        {console.log(errors)}
        <br/>
        <Button type="submit">Submit</Button>
      </Form>

    </div>

  )

}

export default NewAnswerForm