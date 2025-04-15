import React, { useState } from 'react';

function Search() {
  
  const menuItems = [
    { id: 1, name: 'Cappuccino', description: 'A strong espresso topped with steamed milk and thick foam.' },
    { id: 2, name: 'Sandwich', description: 'A delicious sandwich with fresh vegetables and a choice of fillings.' },
    { id: 3, name: 'Vanilla', description: 'A sweet and creamy vanilla-flavored dessert or drink.' },
    { id: 4, name: 'Espresso', description: 'A concentrated coffee made by forcing hot water through finely ground coffee beans.' },
    { id: 5, name: 'Latte', description: 'Espresso mixed with steamed milk, creating a smooth and creamy texture.' },
    { id: 6, name: 'Muffin', description: 'A light and fluffy muffin, with a variety of flavors like blueberry, chocolate, or banana.' },
    { id: 7, name: 'Croissant', description: 'A buttery, flaky pastry often served with jam or chocolate.' },
    { id: 8, name: 'Iced Tea', description: 'A refreshing cold tea, perfect for a hot day, available in various flavors.' },
    { id: 9, name: 'Pancakes', description: 'Fluffy pancakes served with maple syrup and fresh fruits on top.' },
    { id: 10, name: 'Chocolate Cake', description: 'A rich and decadent chocolate cake with a smooth frosting.' },
    { id: 11, name: 'Frappuccino', description: 'A blended coffee drink with ice, milk, and a variety of flavors like caramel or mocha.' },
    { id: 12, name: 'Smoothie', description: 'A refreshing drink made from blended fruits and yogurt or milk.' },
  ];

  const [query, setQuery] = useState('');

  
  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  
  console.log(filteredItems);

  return (
    <div className="container mt-5">
      <h2>Search Menu</h2>

      
      <input
        type="text"
        className="form-control"
        placeholder="Search for a menu item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Updates query state on input change
      />

      <div className="mt-3">
        
        {filteredItems.length > 0 ? (
          <ul className="list-group">
            {filteredItems.map(item => (
              <li key={item.id} className="list-group-item">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Search;

