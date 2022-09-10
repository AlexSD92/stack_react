import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                    <div key={profile.id}>
                        <Link to={`/profiles/${profile.id}`}>
                            <h6>{profile.owner}</h6>
                        </Link>
                    </div>
                )
            })}
        </div>
    );

}

export default ProfileList