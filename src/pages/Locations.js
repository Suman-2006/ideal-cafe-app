
//Locations.js
import React from 'react';
import location1 from '../assets/location1.jpg';  
import location2 from '../assets/location2.jpg';  
import location3 from '../assets/location3.jpg';  
function Locations() {
    return (
    <div className="container mt-5">
        <h1 className="text-center mb-4">Our Locations</h1>

        
        <div className="row mb-4">
        <div className="col-md-4">
            <img src={location1} className="img-fluid rounded" alt="Location 1" />
        </div>
        <div className="col-md-8">
            <h3>Location 1</h3>
            <p>Address: 123 Street, City</p>
            <p>Opening Hours: 9 AM - 9 PM</p>
            <p>Contact: 123-456-7890</p>
        </div>
        </div>

        <div className="row mb-4">
        <div className="col-md-4">
            <img src={location2} className="img-fluid rounded" alt="Location 2" />
        </div>
        <div className="col-md-8">
            <h3>Location 2</h3>
            <p>Address: 456 Avenue, City</p>
            <p>Opening Hours: 10 AM - 8 PM</p>
            <p>Contact: 987-654-3210</p>
        </div>
        </div>

        <div className="row mb-4">
        <div className="col-md-4">
            <img src={location3} className="img-fluid rounded" alt="Location 3" />
        </div>
        <div className="col-md-8">
            <h3>Location 3</h3>
            <p>Address: 789 Boulevard, City</p>
            <p>Opening Hours: 8 AM - 10 PM</p>
            <p>Contact: 555-123-4567</p>
        </div>
        </div>
    </div>
    );
}

export default Locations;
