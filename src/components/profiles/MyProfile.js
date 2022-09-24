import '../../customcss/profiles.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import axios from 'axios';

function ProfileList() {
    const currentUser = useCurrentUser();
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/profiles/').then((response) => {
            setProfiles(response.data);
        });
    }, []);

    if (!profiles) return null;

    return (
        <div>
            {profiles[0] && profiles.filter(profile => profile.owner === currentUser.username).map(filteredProfile => {
                return (
                    <div key={filteredProfile.id} className='list mt-5'>
                        <div className='parentdivmargin left individualp mt-5'>
                            <Row>
                                <Col xs={10}>
                                    <h3>{filteredProfile.owner}</h3>
                                    {filteredProfile.bio ?
                                        <p>{filteredProfile.bio}</p> :
                                        <p>{filteredProfile.owner} hasn't added a bio yet. <br/>
                                            To add a bio you must:
                                            <ol>
                                                <li>Log in to your account.</li>
                                                <li>Click your username at the top right of the page</li>
                                            </ol>
                                        </p>
                                        } 
                                </Col>
                                <Col>
                                    <p>Created on:</p>
                                    <h5 className='p-2 badge rounded-pill bg-secondary'>{filteredProfile.created_at}</h5>    
                                    <p>Updated on:</p>                  
                                    <h5 className='p-2 badge rounded-pill bg-secondary'>{filteredProfile.updated_at}</h5>
                                </Col>
                            </Row>  
                            <Button><Link className='unstyle' to={`/profiles/${filteredProfile.id}`}>Edit</Link></Button>            
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ProfileList;