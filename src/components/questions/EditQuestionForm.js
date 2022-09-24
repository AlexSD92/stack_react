import '../../customcss/questions.css';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function EditQuestionForm() {
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
      .then(alert('You have successfully deleted your question!'));
      history('/questions/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    const formData = new FormData();

    formData.append("summary", summary);
    formData.append("question", question);

    try {
      await axios.put(`https://stack-drf-api.herokuapp.com/questions/${params.id}`, formData)
      .then(alert('You have successfully updated your question!'));
      } catch (err) {
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  return(
    <div className='mt-5 parentdivmargin'>
      <h1>Edit your question.</h1>
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
        {console.log(errors)}
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
        {console.log(errors)}

        <br/>

        <Row>
          <Col><Button variant='success' type="submit">Submit</Button></Col>
          <Col><Button variant='danger' onClick={handleDelete}>Delete</Button></Col>
        </Row>
      </Form>

    </div>
  )
};

export default EditQuestionForm;