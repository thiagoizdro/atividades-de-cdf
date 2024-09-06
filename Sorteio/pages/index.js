// pages/index.js
import Image from 'next/image';

// Não use o caminho relativo. O caminho correto é a partir da raiz pública.
const logo = '/mega-sena-logo.png';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Image src={logo} alt="Logo Mega Sena" width={200} height={200} />
      <h1>Bem-vindo ao Sorteio da Mega Sena</h1>
      <p>Realize o sorteio dos números da Mega Sena com apenas um clique!</p>
    </div>
  );
};

export default Home;
