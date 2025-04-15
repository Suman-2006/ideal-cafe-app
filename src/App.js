


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Locations from './pages/Locations';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import AdminDashboard from './pages/AdminDashboard';
import Checkout from './pages/Checkout';
import Search from './pages/Search';
import CustomNavbar from './components/CustomNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    address: '123 Main St',
  });

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleProfileUpdate = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  
  const handleConfirmCheckout = () => {
    setCartItems([]); 
  };

  return (
    <Router>
      <CustomNavbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/offers" element={<Offers addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/profile" element={<Profile userProfile={userProfile} />} />
        <Route path="/profile/edit" element={<EditProfile userProfile={userProfile} onProfileUpdate={handleProfileUpdate} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/search" element={<Search />} /> 
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              handleConfirmCheckout={handleConfirmCheckout} 
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;
