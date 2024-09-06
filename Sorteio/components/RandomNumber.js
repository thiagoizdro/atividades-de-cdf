const getRandomNumber = () => Math.floor(Math.random() * 61);

const RandomNumber = () => {
  const number = getRandomNumber();
  return <span style={{ fontSize: '24px', margin: '0 10px' }}>{number}</span>;
};

export default RandomNumber;
