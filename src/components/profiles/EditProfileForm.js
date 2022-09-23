import React, { useState, useEffect } from "react";

import axios from "axios";

import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


function EditProfileForm() {
  const [errors, setErrors] = useState({});
  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
  });
  const { name, bio } = profileData;
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axios.get(`https://stack-drf-api.herokuapp.com/profiles/${params.id}`);
            const { name, bio } = data;

            setProfileData({ name, bio })

        } catch (err) {
            console.log(err);
        }
    };

    handleMount();
  }, [history, params]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("bio", bio);

    try {
      await axios.put(`https://stack-drf-api.herokuapp.com/profiles/${params.id}`, formData)
      .then(alert('Your profile has been updated!'));
      } catch (err) {
        if (err.response?.status !== 401) {
            setErrors(err.response?.data);
        }
    }
  };

  return(
    <div>

      <h1>Edit Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Bio</Form.Label>
          <Form.Control 
            type="text"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

    </div>


  )

}

export default EditProfileForm;