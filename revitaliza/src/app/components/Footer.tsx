import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../../public/logo.png'; // Substitua pelo caminho do seu logo

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
{/*         
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={logo} alt="Logo" width={150} height={50} />
            </a>
          </Link>
        </div> */}

        {/* Redes Sociais */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.instagram.com/revitalizacomunidades/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/revitalizacomunidades/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.instagram.com/revitalizacomunidades/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/revitalizacomunidades/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* Contato */}
        <div className="text-center md:text-left">
          <p>Contato: Revitalizacomunidades@gmail.com</p>
          <p>Telefone: (11) 9 6269-6366</p>
        </div>
      </div>
      <div className="text-center md:text-left">
        <p>Local: Pavilhão social G10 Favelas 
        Rua Itamotinga n 100 paraíso do Morumbi cep 05706-320</p>
        </div>
    </footer>
  );        
}

export default Footer;
