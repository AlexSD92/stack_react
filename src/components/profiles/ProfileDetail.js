import '../../customcss/profiles.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';


function ProfileDetail() {
    const currentUser = useCurrentUser();
    const params = useParams()
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      axiosReq.get(`https://stack-drf-api.herokuapp.com/profiles/${params.id}`).then((response) => {
        setProfiles(response.data);
      });
    }, [params]);

    if (!profiles) return null;

    return (
        <div className='parentdivmargin left individualp mt-5'>
          <Row>
              <Col xs={10}>
                  <h3>{profiles.owner}</h3>
                  {profiles.bio ?
                      <p>{profiles.bio}</p> :
                        <>
                        <p>{profiles.owner} hasn't added a bio yet.</p>
                        <br/>
                            To add a bio you must:
                            <ol>
                                <li>Log in to your account.</li>
                                <li>Click your username at the top right of the page</li>
                            </ol>
                        </>                      
                      } 
              </Col>
              <Col>
                  <p>Created on:</p>
                  <h5 className='p-2 badge rounded-pill bg-secondary'>{profiles.created_at}</h5>    
                  <p>Updated on:</p>                  
                  <h5 className='p-2 badge rounded-pill bg-secondary'>{profiles.updated_at}</h5>
              </Col>
          </Row>  
          {currentUser && currentUser.username === profiles.owner ?  
                <Link className='unstylelinkbutton' to={`/profiles/${profiles.id}/edit`}><Button>Edit</Button></Link>   
                : 
                null
            }             
        </div>
        )
}


export default ProfileDetail;