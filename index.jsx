import React, { useState } from 'react';
import './App.css';
function App() {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setListItems([inputValue, ...listItems]);
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <h1>Input List App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an item..."
      />
      <button onClick={handleAddItem}>Add</button>

      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
