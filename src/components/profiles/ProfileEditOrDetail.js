import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import EditProfileForm from './EditProfileForm';
import ProfileDetail from './ProfileDetail';
import axios from 'axios';

function ProfileEditOrDetail() {
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
            {currentUser && currentUser.username === profiles.owner ? 
                <EditProfileForm /> : 
                <ProfileDetail />
            }
        </div>
        )
}

export default ProfileEditOrDetail;