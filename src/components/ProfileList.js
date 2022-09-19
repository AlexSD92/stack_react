import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function ProfileList() {
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
        axios.get('https://stack-drf-api.herokuapp.com/profiles/').then((response) => {
            setProfiles(response.data);
        });
    }, []);

    if (!profiles) return null;

    return (
        <div>
            {profiles[0] && profiles.map(profile => {
                return (
                    <Container key={profile.id} className='list mt-5'>
                        <div>
                            <h3><Link to={`/profiles/${profile.id}`}>{profile.owner}</Link></h3>
                            <h5 className='badge rounded-pill bg-secondary'>{profile.created_at}</h5>                      
                            <h5 className='badge rounded-pill bg-secondary'>{profile.updated_at}</h5>  
                        </div>

                    </Container>
                )
            })}
        </div>
    );

}

export default ProfileList