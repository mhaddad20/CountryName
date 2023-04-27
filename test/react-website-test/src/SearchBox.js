import React, { useState } from 'react';

const names = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Emma',
  'Frank',
  'Grace',
  'Henry',
  'Isabelle',
  'John',
  'Katherine',
  'Lucas',
  'Maggie',
  'Nate',
  'Olivia',
  'Peter',
  'Quinn',
  'Rachel',
  'Sarah',
  'Thomas'
];

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchedNames, setMatchedNames] = useState([]);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const matches = names.filter(name => name.toLowerCase().includes(term.toLowerCase())).slice(0, 5);
    setMatchedNames(matches);
  }

  return (
    <div>
      <input type="text" placeholder="Search for a name" value={searchTerm} onChange={handleInputChange} />
      {matchedNames.map(name => (
        <div key={name}>
          <h3>{name}</h3>
          <p>This is the card for {name}.</p>
        </div>
      ))}
    </div>
  );
}

