import { useState } from 'react';
import Logo from '../components/Logo';
import RandomNumber from '../components/RandomNumber';

const Sorteio = () => {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < 6) {
      const number = Math.floor(Math.random() * 61);
      if (!newNumbers.includes(number)) {
        newNumbers.push(number);
      }
    }
    setNumbers(newNumbers);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Logo />
      <h1>Sorteio da Mega Sena</h1>
      <div>
        {numbers.length === 0 ? (
          <button onClick={generateNumbers}>Sortear Números</button>
        ) : (
          <div>
            <h2>Números Sorteados:</h2>
            <div>
              {numbers.map((num, index) => (
                <span key={index} style={{ fontSize: '24px', margin: '0 10px' }}>{num}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sorteio;
