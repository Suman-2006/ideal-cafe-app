

import React from 'react';
import coffee1 from '../assets/coffee1.jpg';
import coffee2 from '../assets/coffee2.jpg';
import milkshake from '../assets/milkshake.jpg';
import cheesecake from '../assets/cheesecake.jpg';
import sandwich from '../assets/sandwich.jpg';
import vanilla from '../assets/vanilla.jpg';
import icecream1 from '../assets/icecream1.jpg';
import icecream3 from '../assets/icecream3.jpg';
import butterscotch from '../assets/butterscotch.jpg';
import mint from '../assets/mint.jpg';
import fries from '../assets/fries.jpg';
import garlicbread from '../assets/garlicbread.jpg';

function Menu({ addToCart }) {
    const menuItems = [
        { name: "Cappuccino", price: 150, description: "Rich espresso topped with steamed milk foam.", image: coffee1 },
        { name: "Cold Coffee", price: 120, description: "Chilled coffee served with ice and cream.", image: coffee2 },
        { name: "Chocolate Milkshake", price: 180, description: "Thick milkshake with real chocolate and vanilla ice cream.", image: milkshake },
        { name: "Blueberry Cheesecake", price: 250, description: "Creamy cheesecake with blueberry topping.", image: cheesecake },
        { name: "Veg Sandwich", price: 90, description: "Fresh veggies and cheese between toasted bread.", image: sandwich },
        { name: "Classic Vanilla Ice Cream", price: 100, description: "Smooth and creamy vanilla scoop.", image: vanilla },
        { name: "Chocolate Fudge Sundae", price: 140, description: "Rich chocolate flavor with a silky texture.", image: icecream1 },
        { name: "Strawberry Bliss", price: 130, description: "Sweet strawberry ribbons blended in creamy goodness.", image: icecream3 },
        { name: "Butterscotch Ice Cream", price: 135, description: "Crunchy butterscotch chips in velvety ice cream.", image: butterscotch },
        { name: "Mint Choco Chip Ice Cream", price: 145, description: "Refreshing mint ice cream loaded with chocolate chips.", image: mint },
        { name: "Classic French Fries", price: 80, description: "Golden crispy fries, served with ketchup.", image: fries },
        { name: "Cheese Garlic Bread", price: 110, description: "Oven-baked bread topped with garlic butter and melted cheese.", image: garlicbread },
    ];

    const handleAddToCart = (item) => {
        if (addToCart) {
            addToCart(item); 
            alert(`${item.name} has been added to your cart!`);
        } else {
            console.error('addToCart function is not available.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Our Menu</h1>
            <div className="row">
                {menuItems.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card shadow-sm h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{item.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">₹{item.price}</h6>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <button
                                    className="btn btn-dark mt-3"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
