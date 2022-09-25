import React from 'react'
import '../../customcss/answers.css';
import { Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCurrentUser } from '../../contexts/CurrentUserContext';

function DeleteAnswer() {
    const currentUser = useCurrentUser();
    const history = useNavigate();
    const params = useParams();

    const handleDelete = async() => {
        try {
          await axios.delete(`https://stack-drf-api.herokuapp.com/answers/${params.id}`)
          .then(history(`/questions/${params.question_id}`));
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className='mt-5 pt-5 parentdivmargin'>
      {currentUser ?
      <>
        <h1>Are you sure you want to delete this answer?</h1>
        <br/>
        <Row>
          <Col><Button variant='success' type="submit"><Link className='unstylelinkbutton m-0' to={`/answers/${params.question_id}/${params.id}/edit`}>No, take me back to safety!</Link></Button></Col>
          <Col><Button variant='danger' onClick={handleDelete}>Yes, I'm certain, please continue.</Button></Col>
        </Row>
      </>
      :
      <h1>You're not authorised to use this page.</h1>      
      }
    </div>
  )
}

export default DeleteAnswer