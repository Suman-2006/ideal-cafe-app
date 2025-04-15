
import React from 'react';
import { useNavigate } from 'react-router-dom';  
import { Card, Button, Container } from 'react-bootstrap'; // Bootstrap components

const Profile = () => {
  const navigate = useNavigate();  

  
  const user = {
    name: "XYZ",
    email: "xyz@example.com",
    phone: "+91 9876543210",
    address: "123 Ideal Street, Mangalore, Karnataka"
  };

  const handleEditProfile = () => {
    navigate('/profile/edit');  
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '30rem' }} className="shadow p-4">
        <Card.Body>
          <h3 className="mb-4 text-center">Your Profile</h3>

          <div className="mb-3">
            <strong>Name:</strong>
            <p>{user.name}</p>
          </div>
          <div className="mb-3">
            <strong>Email:</strong>
            <p>{user.email}</p>
          </div>
          <div className="mb-3">
            <strong>Phone:</strong>
            <p>{user.phone}</p>
          </div>
          <div className="mb-3">
            <strong>Address:</strong>
            <p>{user.address}</p>
          </div>

          <Button variant="dark" className="w-100" onClick={handleEditProfile}>
            Edit Profile
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
