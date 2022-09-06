import React, { useState } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


function NewQuestionForm() {
  const [errors, setErrors] = useState({});
  const [questionData, setQuestionData] = useState({
    question: "",
  });
  const { question } = questionData;
  const history = useHistory();

  const handleChange = (event) => {
    setQuestionData({
      ...questionData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("question", question);

    try {
      const { data } = await axios.post("https://stack-drf-api.herokuapp.com/questions/", formData);
      history.push('/questions');
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

      <h1>Question</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control 
            type="text"
            name="question"
            value={question}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

    </div>


  )

}

export default NewQuestionForm