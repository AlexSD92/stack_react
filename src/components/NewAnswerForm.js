import React, { useState } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


function NewAnswerForm(props) {
  const params = useParams();
  const question = props.questions.id;
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
    event.preventDefault();
    const formData = new FormData();

    formData.append("answer", answer);
    formData.append("question", question);

    try {
      const { data } = await axios.post("https://stack-drf-api.herokuapp.com/answers/", formData);
      history(`/questions/${params.id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.respose?.data)
      }
    }
  };

  return(
    <div>

      <h1>Answer</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Summary</Form.Label>
          <Form.Control 
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

    </div>

  )

}

export default NewAnswerForm