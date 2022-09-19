import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useCurrentUser } from '../contexts/CurrentUserContext';

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
                    <Container key={filteredProfile.id} className='list mt-5'>
                        <div>
                            <h3><Link to={`/profiles/${filteredProfile.id}`}>{filteredProfile.owner}</Link></h3>
                            <h5 className='badge rounded-pill bg-secondary'>{filteredProfile.created_at}</h5>                      
                            <h5 className='badge rounded-pill bg-secondary'>{filteredProfile.updated_at}</h5>
                            {currentUser.username === filteredProfile.owner ? 
                            <Link to={`/profiles/${filteredProfile.id}/editprofile`}>Edit your profile.</Link> : 
                            <h4>You are unable to edit this profile because you are not the owner.</h4>
                    }
                        </div>

                    </Container>
                )
            })}
        </div>
    );

}

export default ProfileList