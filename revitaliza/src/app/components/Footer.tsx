import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../../public/sponsors/_logo.png";

const sites = [
  ['https://cores.construfavela.com.br', 'Cores da Favela'],
  ['https://institutorevitaliza.construfavela.com.br', 'Instituto Revitaliza'],
  ['https://revitaliza.construfavela.com.br', 'Revitaliza'],
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-black border-t border-gold/20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image src={logo} alt="ConstruFavela 2026" className="h-16 w-auto" />
          <a href="https://www.instagram.com/revitalizacomunidades/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gold hover:text-gold-light">
            <FaInstagram size={28} />
          </a>
        </div>
        <div className="text-center md:text-left text-gray-400 space-y-2">
          <p className="font-display text-gold text-xl tracking-wide">Contato</p>
          <p className="flex items-center gap-2 justify-center md:justify-start"><FaEnvelope className="text-gold shrink-0" /> Revitalizacomunidades@gmail.com</p>
          <p className="flex items-center gap-2 justify-center md:justify-start"><FaWhatsapp className="text-gold shrink-0" /> (11) 9 6269-6366</p>
          <p className="flex items-start gap-2 justify-center md:justify-start"><FaMapMarkerAlt className="text-gold shrink-0 mt-1" /> <span>Pavilhão Social G10 Favelas<br />Rua Itamotinga, 100 — Paraíso do Morumbi<br />CEP 05706-320, São Paulo</span></p>
        </div>
        <div className="text-center md:text-left space-y-2">
          <p className="font-display text-gold text-xl tracking-wide">Nossos sites</p>
          {sites.map(([href, label]) => (
            <a key={href} href={href} className="block text-gray-400 hover:text-gold transition">{label}</a>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-600 text-sm mt-10">© 2026 ConstruFavela · Instituto Revitaliza Comunidade</p>
    </footer>
  );
}
