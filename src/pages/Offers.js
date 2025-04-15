
import React, { useState } from 'react';
import offer1 from '../assets/coffee2.jpg';
import offer2 from '../assets/fries.jpg';
import offer3 from '../assets/offer3.jpg';

function Offers({ addToCart }) {
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const offers = [
        { title: "Buy 1 Get 1 Free — Cold Coffee", description: "Order one Cold Coffee and get another free.", image: offer1, name: "Cold Coffee", price: 120 },
        { title: "20% Off on French Fries", description: "Crispy, golden fries now at 20% off.", image: offer2, name: "French Fries", price: 80 },
        { title: "Dessert Combo - Flat ₹50 Off", description: "Any two ice creams + cheesecake — ₹50 off.", image: offer3, name: "Dessert Combo", price: 230 }
    ];

    const handleGrabOffer = (offer) => {
        if (typeof addToCart === 'function') {
            addToCart(offer); 
            setConfirmationMessage(`The offer for ${offer.name} has been added to your cart!`);

            
            setTimeout(() => setConfirmationMessage(""), 3000); 
        } else {
            console.error('addToCart function is not available');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Exclusive Offers</h1>
            {confirmationMessage && <div className="alert alert-success">{confirmationMessage}</div>}
            <div className="row">
                {offers.map((offer, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm h-100">
                            <img src={offer.image} className="card-img-top" alt={offer.title} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{offer.title}</h5>
                                    <p className="card-text">{offer.description}</p>
                                </div>
                                <button 
                                    className="btn btn-success mt-3" 
                                    onClick={() => handleGrabOffer(offer)}
                                >
                                    Grab Offer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offers;
