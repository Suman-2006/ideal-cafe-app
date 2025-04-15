
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EditProfile({ userProfile, onProfileUpdate }) {
    const [updatedProfile, setUpdatedProfile] = useState(userProfile);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
        ...updatedProfile,
        [name]: value,
    });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    onProfileUpdate(updatedProfile);  
    navigate('/profile');  
    };

    return (
    <div className="container my-5">
        <h2>Edit Profile</h2>
        <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
            type="text"
            name="name"
            value={updatedProfile.name}
            onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
            type="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
            type="text"
            name="phone"
            value={updatedProfile.phone}
            onChange={handleInputChange}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
            type="text"
            name="address"
            value={updatedProfile.address}
            onChange={handleInputChange}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
        💾Save Changes
        </Button>
        </Form>
    </div>
    );
}

export default EditProfile;
