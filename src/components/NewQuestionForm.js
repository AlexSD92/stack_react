import React, { useState } from "react";

import axios from "axios";

import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function NewQuestionForm() {
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
    event.preventDefault();
    const formData = new FormData();

    formData.append("summary", summary);
    formData.append("question", question);

    try {
      const { data } = await axios.post("https://stack-drf-api.herokuapp.com/questions/", formData);
      history('/questions');
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.respose?.data)
      }
    }
  };

  return(
    <div>

      <h1>Question</h1>
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
        {errors.summary?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control 
            required
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.question?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

        <Button type="submit">Submit</Button>
      </Form>

    </div>


  )

}

export default NewQuestionForm