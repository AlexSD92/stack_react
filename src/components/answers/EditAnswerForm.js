import '../../customcss/answers.css';
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function EditAnswerForm(props) {
  let customError = '';
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
      await axios.delete(`https://stack-drf-api.herokuapp.com/answers/${params.id}`)
      .then(alert('You have successfully deleted your answer!'));
      history('/questions');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    const formData = new FormData();

    formData.append("question", question);
    formData.append("answer", answer);

    try {
      await axios.put(`https://stack-drf-api.herokuapp.com/answers/${params.id}`, formData)
      .then(alert('You have successfully updated your answer!'));
    } catch (err) {
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  return(
    <div className='parentdivmargin mt-5'>

      <h1>Edit your answer.</h1>

      <br/>
      
      <Form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Control 
            as="textarea"
            rows={10}
            required
            type="text"
            name="answer"
            value={answer}
            onChange={handleChange}
          />
        </Form.Group>
        {answer.length === 0 ? customError = <Alert variant='warning'>You can't leave this field empty, please resolve or you will be unable to submit</Alert> : null}
        {console.log(errors)}
        {console.log(customError)}

        <br/>

        <Row>
          <Col><Button variant='success' type="submit">Submit</Button></Col>
          <Col><Button variant='danger' onClick={handleDelete}>Delete</Button></Col>
        </Row>
      </Form>

    </div>
  )
};

export default EditAnswerForm;