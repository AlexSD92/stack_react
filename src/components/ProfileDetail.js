import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerList from './AnswerList';
import NewAnswerForm from './NewAnswerForm';


function ProfileDetail() {

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
                <h2><a className='link-style'>{profiles.id}</a></h2>
                <h6 className='badge rounded-pill bg-info'>{profiles.owner}</h6>
                <h6 className='badge rounded-pill bg-info'>{profiles.name}</h6>
                <h6 className='badge rounded-pill bg-info'>{profiles.bio}</h6>
                <h6 className='badge rounded-pill bg-secondary'>{profiles.created_at}</h6>
                <h6>{profiles.updated_at}</h6>
                </div>                
        </div>
        )
}


export default ProfileDetail;