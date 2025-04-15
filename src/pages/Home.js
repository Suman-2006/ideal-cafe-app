

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


import icecream3 from '../assets/icecream3.jpg';

import icecream1 from '../assets/icecream1.jpg';
import coffee1 from '../assets/coffee1.jpg';

function Home() {
    return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Welcome to Ideal Café</h2>
        <h4 className="mb-4">Our Popular Picks</h4>
        <Row>
        <Col md={4}>
            <Card>
            <Card.Img
                variant="top"
                src={icecream1}
                alt="Chocolate Fudge Sundae"
                style={{ height: "250px", objectFit: "cover" }}/>
            <Card.Body>
                <Card.Title>Chocolate Fudge Sundae</Card.Title>
                <Card.Text>A rich blend of creamy chocolate, nuts, and fudge.</Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col md={4}>
            <Card>
            <Card.Img
                variant="top"
                src={coffee1}
                alt="Classic Cappuccino"
                style={{ height: "250px", objectFit: "cover" }}
/>
            <Card.Body>
                <Card.Title>Classic Cappuccino</Card.Title>
                <Card.Text>The perfect pick-me-up with frothy milk and bold espresso.</Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col md={4}>
            <Card>
            <Card.Img
                variant="top"
                src={icecream3}
                alt="Strawberry Bliss"
                style={{ height: "250px", objectFit: "cover" }}
/>
            <Card.Body>
                <Card.Title>Strawberry Bliss</Card.Title>
                <Card.Text>Sweet and a rich blend of fruity with real strawberry chunks.</Card.Text>
            </Card.Body>
            </Card>
        </Col>
        </Row>

        <p className="text-center mt-5">
        Ideal Café, located in the heart of Mangalore, is known for its handcrafted ice creams and freshly brewed coffee.
        Every item is made with love and the finest ingredients 🍨☕.
        </p>
    </div>
    );
}

export default Home;
