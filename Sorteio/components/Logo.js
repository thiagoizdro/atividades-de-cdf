import Image from 'next/image';
import logo from '../public/mega-sena-logo.png'; // ajuste o caminho se necessário

const Logo = () => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Image src={logo} alt="Logo Mega Sena" width={200} height={200} />
    </div>
  );
};

export default Logo;
