import React, { useState } from 'react';

export function InputField() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function handleChange(event) {
    const inputValue = event.target.value;
    // Check input length
    if (inputValue.length > 150) {
      setError('Input cannot exceed 150 characters');
    } else {
      setError(null);
    }
    // Update input value
    setValue(inputValue);
  }


  return (
    <div>
     


  
      <label htmlFor="input">Input:</label>
      <input id="input" type="text" value={value} onChange={handleChange} style={{ width: '300px' }} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
