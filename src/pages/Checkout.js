
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Checkout({ cartItems = [], handleConfirmCheckout }) {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'number' ? item.price : parseInt(item.price.replace('₹', ''));
    return total + (price * item.quantity);
    }, 0);

    
    const handleConfirm = () => {
        setShowModal(true);  
        handleConfirmCheckout(); 
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/');  
    };

    return (
    <Container className="my-5">
        <h2 className="text-center mb-4">🧾 Your Order Summary</h2>

        {cartItems.length === 0 ? (
        <Card className="p-4 text-center shadow-sm">
            <h4>Your cart is empty!</h4>
            <p>Why not add something tasty from our <a href="/menu">Menu</a>? ☕🥪</p>
        </Card>
        ) : (
        <Row className="justify-content-center">
            <Col md={8}>
            <Card className="shadow-lg rounded-4 p-4">
                <h4 className="mb-4">Items in Your Cart</h4>
                <ListGroup variant="flush">
                {cartItems.map((item, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{item.name}</strong> × {item.quantity}
                    </div>
                    <Badge bg="success" pill>
                      ₹{(typeof item.price === 'number' ? item.price : parseInt(item.price.replace('₹', ''))) * item.quantity}
                    </Badge>
                    </ListGroup.Item>
                ))}
                </ListGroup>
                <hr />
                <div className="d-flex justify-content-between align-items-center fs-5 mt-3">
                <strong>Total:</strong>
                <span className="text-primary fw-bold">₹{totalPrice}</span>
                </div>
                <div className="text-center mt-4">
                
                <button onClick={handleConfirm} className="btn btn-success">✅Confirm Order</button>
                </div>
            </Card>
            </Col>
        </Row>
        )}

        
        <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>🎉 Order Confirmed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Thank you for your order! Your delicious items will be ready soon. ☕🍽️</p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleModalClose}>
            Back to Home
            </Button>
        </Modal.Footer>
        </Modal>
    </Container>
    );
}

export default Checkout;
