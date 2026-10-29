'use client';

import Image from 'next/image';
import NavBar from "@/app/components/Nav";
import Sponsors from "@/app/components/Sponsors";
import Carousel from "@/app/components/Carrousel";
import Carousel2 from "@/app/components/Carrousel2";
import Footer from "./components/Footer";
import { FaWhatsapp, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaChalkboardTeacher, FaTools, FaStore } from "react-icons/fa";
import Carlos2 from "../../public/carlos2.jpg";
import midia from "../../public/midia.png";
import Feira from "../../public/carrousel/1.jpg";
import Logo from "../../public/sponsors/_logo.png";
import Buildings from "../../public/sponsors/_buildings.png";

const numeros = [
  { icon: FaUsers, value: '+3000', label: 'pessoas passaram pela feira' },
  { icon: FaChalkboardTeacher, value: '435', label: 'pessoas assistiram às palestras' },
  { icon: FaTools, value: '145', label: 'pessoas assistiram aos workshops' },
  { icon: FaStore, value: '+30', label: 'expositores' },
];

export default function Home() {
  return (
    <main className="bg-ink text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 min-h-[92vh] flex items-center">
        <Image src={Buildings} alt="" aria-hidden className="absolute bottom-0 left-0 w-1/2 md:w-1/3 opacity-60 pointer-events-none" />
        <Image src={Buildings} alt="" aria-hidden className="absolute bottom-0 right-0 w-1/2 md:w-1/3 opacity-60 pointer-events-none -scale-x-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 w-full flex flex-col items-center text-center gap-8">
          <Image src={Logo} alt="ConstruFavela 2026" priority className="w-56 md:w-72 h-auto" />
          <h1 className="font-display uppercase text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            A maior feira de <span className="text-gold-gradient">construção civil</span> de favela do Brasil
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">Juntos por uma construção mais forte e inclusiva.</p>
          <div className="flex flex-wrap justify-center gap-3 font-display text-xl tracking-wide">
            <span className="flex items-center gap-2 border border-gold/50 rounded-full px-5 py-2"><FaCalendarAlt className="text-gold" /> 04 e 05 de novembro</span>
            <span className="flex items-center gap-2 border border-gold/50 rounded-full px-5 py-2"><FaClock className="text-gold" /> 9h às 17h</span>
            <span className="flex items-center gap-2 border border-gold/50 rounded-full px-5 py-2"><FaMapMarkerAlt className="text-gold" /> Pavilhão Social G10 Favelas</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/5511962696366" target="_blank" rel="noopener noreferrer" className="bg-gold text-black font-display text-2xl tracking-wide px-8 py-3 rounded hover:bg-gold-light transition">Quero expor</a>
            <a href="#patrocinadores" className="border border-gold text-gold font-display text-2xl tracking-wide px-8 py-3 rounded hover:bg-gold hover:text-black transition">Ver patrocinadores</a>
          </div>
        </div>
      </section>

      <Sponsors />

      {/* Sobre */}
      <section id="sobre" className="border-y border-gold/20 bg-ink-2 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-gold font-display tracking-[0.3em] text-lg">O evento</p>
            <h2 className="font-display uppercase text-5xl md:text-6xl leading-none mb-6">Constru<span className="text-gold-gradient">Favela</span></h2>
            <p className="text-gray-300 leading-relaxed">
              A ConstruFavela é o maior evento de construção civil das favelas do Brasil, reunindo as principais empresas do setor com o propósito não apenas de exibir seus produtos, mas também de oferecer capacitação profissional, oportunidades de networking e a criação de novas conexões. O evento desempenha um papel fundamental para fomentar o desenvolvimento econômico e a qualificação da mão de obra local, promovendo uma transformação positiva nas comunidades das favelas, ao mesmo tempo em que fortalece a indústria da construção civil no país.
            </p>
          </div>
          <p className="text-gold font-display tracking-[0.3em] text-lg text-center mb-4">Edições anteriores</p>
          <div className="md:hidden"><Carousel2 /></div>
          <div className="hidden md:block"><Carousel /></div>
        </div>
      </section>

      {/* Números */}
      <section id="numeros" className="relative py-20 px-6 overflow-hidden">
        <Image src={Feira} alt="" aria-hidden fill className="object-cover opacity-15 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <p className="text-gold font-display tracking-[0.3em] text-lg text-center">Última edição</p>
          <h2 className="font-display uppercase text-5xl md:text-6xl text-center leading-none mb-10">Nossos <span className="text-gold-gradient">números</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {numeros.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-ink-2/90 border border-gold/50 rounded-2xl p-6 flex flex-col items-center text-center gap-2">
                <Icon className="text-gold text-3xl" />
                <span className="font-display text-5xl text-gold-gradient">{value}</span>
                <span className="text-gray-300 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mídia */}
      <section className="bg-ink-2 border-y border-gold/20 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-display tracking-[0.3em] text-lg text-center">Na mídia</p>
          <h2 className="font-display uppercase text-5xl md:text-6xl text-center leading-none mb-8">Quem <span className="text-gold-gradient">falou</span> da gente</h2>
          <Image src={midia} alt="Matérias sobre a ConstruFavela" className="w-full h-auto rounded-lg border border-gold/20" />
        </div>
      </section>

      {/* Fundador */}
      <section id="fundador" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image src={Carlos2} alt="Carlos Silva, fundador da ConstruFavela" className="rounded-2xl border border-gold/30 w-full h-auto" />
          <div>
            <p className="text-gold font-display tracking-[0.3em] text-lg">Fundador</p>
            <h2 className="font-display uppercase text-5xl md:text-6xl leading-none mb-6">Carlos <span className="text-gold-gradient">Silva</span></h2>
            <p className="text-gray-300 leading-relaxed">
              Carlos Silva é o visionário por trás da ConstruFavela, o maior evento de construção civil voltado para as favelas do Brasil. Criado com o objetivo de transformar o cenário da construção nas comunidades, a ConstruFavela reúne as principais empresas do setor, oferecendo uma plataforma para a exposição de produtos, realização de palestras e workshops. O evento promove a inovação ao introduzir novas tecnologias e fortalece o networking entre profissionais e comerciantes da região, contribuindo para o desenvolvimento sustentável e a melhoria das condições de construção nas favelas.
            </p>
          </div>
        </div>
      </section>

      {/* Chamada para expositores */}
      <section className="bg-gold text-black py-14 px-6 text-center">
        <h2 className="font-display uppercase text-4xl md:text-6xl leading-none max-w-4xl mx-auto">Exponha na maior feira de construção civil das favelas do Brasil</h2>
        <a href="https://wa.me/5511962696366" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-black text-gold font-display text-2xl tracking-wide px-8 py-3 rounded hover:bg-ink-3 transition"><FaWhatsapp /> Falar pelo WhatsApp</a>
      </section>

      <Footer />

      <a
        href="https://wa.me/5511962696366"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-40"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={40} />
      </a>
    </main>
  );
}
