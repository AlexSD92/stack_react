import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';


function ProfileDetail() {
    const currentUser = useCurrentUser()

    const params = useParams()
    const [profiles, setProfiles] = useState([])

    useEffect(() => {
      axios.get(`https://stack-drf-api.herokuapp.com/profiles/${params.id}`).then((response) => {
        setProfiles(response.data);
      });
    }, []);

    if (!profiles) return null;

    return (
        <div>
                <div className='container m-5'>
                <h6 className='badge rounded-pill bg-info'>{profiles.owner}</h6>
                <h6 className='badge rounded-pill bg-info'>{profiles.name}</h6>
                <h6 className='badge rounded-pill bg-info'>{profiles.bio}</h6>
                <h6 className='badge rounded-pill bg-secondary'>{profiles.created_at}</h6>
                <h6 className='badge rounded-pill bg-secondary'>{profiles.updated_at}</h6>
                {currentUser.username === profiles.owner ? 
                      <Link to={`/profiles/${profiles.id}/editprofile`}>Edit your profile.</Link> : 
                      <h4>You are unable to edit this profile because you are not the owner.</h4>
                    }
                </div>                
        </div>
        )
}


export default ProfileDetail;