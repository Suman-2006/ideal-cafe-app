
import React, { useState } from 'react';
import coffee1 from '../assets/coffee2.jpg';
import coffee2 from '../assets/coffee1.jpg';
import fries from '../assets/fries.jpg';
import milkshake from '../assets/milkshake.jpg';

function Cart() {
    const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Cold Coffee', price: 120, image: coffee1, quantity: 1 },
    { id: 2, name: 'French Fries', price: 80, image: fries, quantity: 2 },
    { id: 3, name: 'Milkshake', price: 150, image: milkshake, quantity: 1 },
    { id: 4, name: 'Hot Coffee', price: 100, image: coffee2, quantity: 1 }
    ]);

    const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
    <div className="container mt-4">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
        <p>No items in your cart yet.</p>
        ) : (
        <div>
            {cartItems.map(item => (
            <div key={item.id} className="card mb-3 shadow-sm" style={{ maxWidth: '600px' }}>
                <div className="row g-0">
                <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8 d-flex align-items-center justify-content-between px-3">
                    <div>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">₹{item.price} x {item.quantity}</p>
                    <p className="card-text"><small className="text-muted">Subtotal: ₹{item.price * item.quantity}</small></p>
                    </div>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                    </button>
                </div>
                    </div>
            </div>
        ))}

            <div className="alert alert-primary" role="alert">
            <h4>Total: ₹{total}</h4>
            </div>
        </div>
        )}
    </div>
    );
}

export default Cart;
