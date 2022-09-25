import React from 'react'
import '../../customcss/questions.css';
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import axios from "axios";

function DeleteQuestion() {
    const history = useNavigate();
    const params = useParams();

    const handleDelete = async() => {
        try {
          await axios.delete(`https://stack-drf-api.herokuapp.com/questions/${params.id}`)
          history('/questions/');
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className='mt-5 pt-5 parentdivmargin'>
        <h1>Are you sure you want to delete this question?</h1>
        <br/>
        <Row>
          <Col><Button variant='success' type="submit"><Link className='unstylelinkbutton m-0' to={`/questions/${params.id}/edit`}>No, take me back to safety!</Link></Button></Col>
          <Col><Button variant='danger' onClick={handleDelete}>Yes, I'm certain, please continue.</Button></Col>
        </Row>
    </div>
  )
}

export default DeleteQuestion