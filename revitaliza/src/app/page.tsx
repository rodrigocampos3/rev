// pages/index.js
import NavBar from "@/app/components/Nav";
import Image from 'next/image';
import capa from '../../public/capa.jpg';
import Carousel from "@/app/components/Carrousel"
import Carousel2 from "@/app/components/Carrousel2"
import { Analytics } from "@vercel/analytics/react"

import img from "../../public/icon.svg"
import Logo from "../../public/logo.png"
import Carlos from "../../public/carlos.jpg"
import Constru from "../../public/constru.jpg"
import Carlos2 from "../../public/carlos2.jpg"
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Partners from "./components/Partners";
import capa1 from "../../public/capa1.png"
import gerdau from "../../public/gerdau1.png"
import coral from "../../public/coral.jpg"
import quartzolit from "../../public/quartzolit.jpg"
import votoran from "../../public/votoran.jpg"
import tramontina from "../../public/tramontina.jpg"
import midia from "../../public/midia.png"




export default function Home() {
  return (
    <main className="w-full max-w-screen h-screen bg-white">
      <NavBar />
      <div className="min-w-full bg-white flex flex-col md:flex-col md:p-20" id="container-1">
        <div className="md:w-full order-1 md:order-2">
          <Image src={capa1} alt="Constru Favela" className="object-cover rounded-2xl" />
          {/* <button className="w-2/3"> Exponha na maior feira de construção do brasil</button> */}
        </div>
        {/* <div className="w-full md:w-1/3 flex flex-col gap-2 md:gap-5 md:text-center md:p-10 order-2 py-2 md:order-1 justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-[#EB591E]">Explore Oportunidades e Impacto Social em Nossa Comunidade</h1>
          <p className="text-center px-2 text-black">Na nossa comunidade, acreditamos no poder da união e da colaboração para transformar realidades. Nossa missão é promover iniciativas que criem oportunidades e gerem impacto positivo, fortalecendo os laços comunitários e impulsionando o desenvolvimento social e econômico.f</p>
          <div className="w-full py-4 md:py-10 px-5">
            <button className="bg-[#EB591E] text-xl text-white rounded-md w-full md:w-1/3 p-2"> <a href="#container-2 w-full">Saiba mais</a></button>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col w-full bg-whi rounded-xl shadow-xl text-center text-4xl font-bold p-10 text-[#EB591E]">
          <h3>Nossos Parceiros</h3>
          <Partners />
        </div>

      <div className="min-w-full min-h-screen bg-white flex flex-col p-5 md:p-20" id="container-2">
        <div className="flex flex-col w-full  text-center gap-y-5 md:px-20 items-center py-10 rounded-md shadow-xl md:p-10" id="construfavela">
          <h1 className="md:text-7xl text-5xl font-bold">
            <span className="text-[#0247AB]">Constru</span>
            <span className="text-[#EB591E]">Favela</span>
          </h1>
          <p className="text-black md:px-10 md:text-xl">A Construfavela é o maior evento de construção civil das favelas do Brasil, reunindo as principais empresas do setor com o propósito não apenas de exibir seus produtos, mas também de oferecer capacitação profissional, oportunidades de networking e a criação de novas conexões. Este evento desempenha um papel fundamental para fomentar o desenvolvimento econômico e a qualificação da mão de obra local, promovendo uma transformação positiva nas comunidades das favelas, ao mesmo tempo em que fortalece a indústria da construção civil no país.
          </p>
          <button className="bg-[#EB591E] text-xl text-white rounded-md md:w-1/3 p-2"><a href="https://www.sympla.com.br/evento/construfavela-2024-feira-de-construcao-civil/2562197?referrer=www.google.com">Inscreva-se</a></button>
        </div>
        <div className="flex flex-col items-center gap-5">
  <p className="text-3xl text-[#EB591E] font-bold py-3 text-center">Alguns expositores dos anos anteriores</p>
  <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
    <div className="flex flex-col items-center">
      <Image src={coral} alt="Expositor 1" className="w-full  h-auto rounded-lg" />
      <h3 className="mt-2 text-2xl font-medium">Coral</h3>
    </div>
    <div className="flex flex-col items-center">
      <Image src={quartzolit} alt="Expositor 2" className="w-full h-auto rounded-lg" />
      <h3 className="mt-2 text-2xl font-medium">Quartzolit</h3>
    </div>
    <div className="flex flex-col items-center">
      <Image src={votoran} alt="Expositor 3" className="w-full h-auto rounded-lg" />
      <h3 className="mt-2 text-2xl font-medium">Votorantim</h3>
    </div>
    <div className="flex flex-col items-center">
      <Image src={tramontina} alt="Expositor 4" className="w-full h-auto rounded-lg" />
      <h3 className="mt-2 text-2xl font-medium">Tramontina</h3>
    </div>
          </div>
          <button className="md:w-2/3 bg-[#EB591E] rounded-xl md:text-3xl text-white font-bold py-3 text-center"> <a href="https://wa.me/5511962696366">Exponha na maior feira de construção civil das favelas do Brasil</a></button>
</div>


<div className="flex flex-col md:hidden h-full w-full md:h-1/2 items-center py-10">
        <h2 className="text-3xl text-[#EB591E] font-bold py-3 ">Edições Anteriores</h2>
        <Carousel2 />
      </div>
      
      {/* Carrossel para Desktop */}
      <div className="hidden md:flex flex-col w-full md:h-1/2 items-center py-10">
        <h2 className="text-3xl text-[#EB591E] font-bold py-3">Edições Anteriores</h2>
        <Carousel />
      </div>
        <div className="w-full md:p-10">
        <Image src={midia} alt="Materias" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full flex flex-col md:flex-row md:p-10">
          <div className="w-full md:w-1/2 md:px-10 text-center md:text-left py-3">
            <h1 className="text-[#EB591E] text-5xl font-bold ">Nossos números</h1>
            <p className="text-black">Confira os resultados alcançados na última edição do ConstruFavela:</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2">
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
                <Image src={img} alt="teste" />
              </div>
              <div className=" w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">+3000</h3>
                <p className="text-black">pessoas passaram pela feira</p> 
              </div>
            </div>
 
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
                <Image src={img} alt="teste" />
              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">435</h3>
                <p className="text-black">pessoas assistiram as palestras</p>
              </div>
            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
                <Image src={img} alt="teste" />
              </div>
              <div className="w-full md:w-2/3 items-center text-center  flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">145</h3>
                <p className="text-black">pessoas assistiram aos workshops</p>
              </div>
              
            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
                <Image src={img} alt="teste" />
              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">+30</h3>
                <p className="text-black">Expositores</p>
              </div>
            </div>

          </div>
          
        </div>
  
      </div>

      <div className="w-full flex flex-col md:flex-row md:px-20 bg-white py-10">
        <div className="md:w-1/2 md:p-10 gap-10 order-last md:text-left text-center md:order-first p-5">
          <h3 className="text-4xl  font-bold text-[#EB591E]">Nosso Fundador</h3>
          <p className="text-xl py-4 text-black">
            Carlos Silva é o visionário por trás da Construfavela, o maior evento de construção civil voltado para as favelas do Brasil. Criado com o objetivo de transformar o cenário da construção nas comunidades, a Construfavela reúne as principais empresas do setor, oferecendo uma plataforma para a exposição de produtos, realização de palestras e workshops.
            O evento promove a inovação ao introduzir novas tecnologias e fortalece o networking entre profissionais e comerciantes da região, contribuindo para o desenvolvimento sustentável e a melhoria das condições de construção nas favelas.</p>
        </div>
        <div className="md:w-1/2 flex md:h-1/2 order-first md:order-last px-5">
          <Image src={Carlos2} alt="founder" layout="responsive" className="rounded-xl" />
        </div>
      </div>
      <Footer />
      <a
        href="https://wa.me/5511962696366" // Substitua pelo seu número de WhatsApp no formato internacional
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={80} />
      </a>
    </main>
  );
}
