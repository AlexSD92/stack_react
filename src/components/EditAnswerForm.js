import React, { useState, useEffect } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


function EditAnswerForm(props) {
  const question = props.answers.question_id;
  const [errors, setErrors] = useState({});
  const [answerData, setAnswerData] = useState({
    answer: "",
  });
  const { answer } = answerData;
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axios.get(`https://stack-drf-api.herokuapp.com/answers/${params.id}`);
            const { answer } = data;

            setAnswerData({ answer })

        } catch (err) {
            console.log(err);
        }
    };

    handleMount();
  }, [history, params]);

  const handleChange = (event) => {
    setAnswerData({
      ...answerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async() => {
    try {
      await axios.delete(`https://stack-drf-api.herokuapp.com/answers/${params.id}`);
      history('/questions');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("question", question);
    formData.append("answer", answer);

    try {
      await axios.put(`https://stack-drf-api.herokuapp.com/answers/${params.id}`, formData);
      history(`/answers/${params.id}`);
      window.location.reload();
      } catch (err) {
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  return(
    <div>

      <h1>Answer</h1>
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>Answer</Form.Label>
          <Form.Control 
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </Form>

      <Button onClick={handleDelete}>Delete</Button>

    </div>


  )

}

export default EditAnswerForm;