import '../../customcss/profiles.css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ProfileList() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/profiles/').then((response) => {
            setProfiles(response.data);
        });
    }, []);

    if (!profiles) return null;

    return (
        <div className='parentdivmargin'>
            {profiles[0] && profiles.map(profile => {
                return (
                    <div key={profile.id} className='mt-5 individualp left'>
                        <Row>
                            <Col xs={10}>
                                <h3><Link to={`/profiles/${profile.id}`}>{profile.owner}</Link></h3>
                                {profile.bio ?
                                    <p>{profile.bio}</p> :
                                    <>
                                    <p>{profile.owner} hasn't added a bio yet. <br/>
                                    To add a bio you must:</p>
                                    <ol>
                                        <li>Log in to your account.</li>
                                        <li>Click your username at the top right of the page</li>
                                    </ol>  
                                    </>                                      
                                    } 
                            </Col>
                            <Col>
                                <Row><p>Created on:</p></Row>
                                <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{profile.created_at}</h5></Row>    
                                <Row><p>Updated on:</p> </Row>                 
                                <Row className='p-3'><h5 className='w-auto p-2 badge rounded-pill bg-secondary'>{profile.updated_at}</h5></Row>
                            </Col>
                        </Row>
                    </div>
                )
            })}
        </div>
    );

}

export default ProfileList