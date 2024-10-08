// pages/index.js
import NavBar from "@/app/components/Nav";
import Image from 'next/image';
import capa from '../../public/capa.jpg';
import Carousel from "@/app/components/Carrousel";
import img from "../../public/icon.svg";
import Logo from "../../public/logo.png";
import Carlos from "../../public/carlos.jpg";
import Constru from "../../public/constru.jpg";
import Carlos2 from "../../public/carlos2.jpg";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Partners from "./components/Partners";

const IndexPage = () => {
  return (
    <main className="w-screen h-screen bg-white">
      <NavBar />
      <div className="min-w-full bg-white flex flex-col md:flex-row md:p-20" id="container-1">
        <div className="md:w-1/2 md:px-20 order-1 md:order-2">
          <Image src={Constru} alt="Constru Favela" className="object-cover rounded-2xl" />
        </div>
        <div className="w-full flex flex-col gap-2 md:gap-5 md:p-10 order-2 py-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-[#EB591E] md:text-left">Explore Oportunidades e Impacto Social em Nossa Comunidade</h1>
          <p className="text-center md:text-left px-2 text-black">Na nossa comunidade, acreditamos no poder da união e da colaboração para transformar realidades. Nossa missão é promover iniciativas que criem oportunidades e gerem impacto positivo, fortalecendo os laços comunitários e impulsionando o desenvolvimento social e econômico.f</p>
          <div className="w-full py-4 md:py-10 px-5">
            <button className="bg-[#EB591E] text-xl text-white rounded-md w-full md:w-1/3 p-2">Saiba mais</button>
          </div>
        </div>
      </div>

      <div className="min-w-full min-h-screen bg-white flex flex-col p-5 md:p-20" id="container-2">
        <div className="flex flex-col w-full  text-center gap-y-5 md:px-15 items-center py-10 rounded-md shadow-xl md:p-10">
          <h1 className="md:text-7xl text-5xl font-bold">
            <span className="text-[#0247AB]">Constru</span>
            <span className="text-[#EB591E]">Favela</span>
          </h1>
          <p className="text-black">A ConstruFavela 2024 é um evento dedicado à construção civil nas comunidades, que ocorrerá nos dias 24 e 25 de outubro no Pavilhão Social do G10 Favelas, em Paraisópolis, São Paulo. O evento oferece uma oportunidade única para se conectar com um público de alto potencial econômico, com um mercado estimado em 167 bilhões de reais. Além de fomentar o crescimento profissional através de um curso gratuito de Técnicas Básicas da Construção Civil, a ConstruFavela promove networking com especialistas e expositores renomados.
            O objetivo é fortalecer e capacitar os moradores das comunidades, proporcionando impacto positivo e desenvolvimento local.</p>
          <button className="bg-[#EB591E] text-xl text-white rounded-md md:w-1/3 p-2">Inscreva-se</button>
        </div>
        <div className="flex flex-col w-full items-center py-10">
          <h2 className="text-3xl text-[#EB591E] font-bold py-3 h-full">Edições Anteriores</h2>
          <Carousel />
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
                <h3 className="text-3xl font-bold text-[#EB591E] ">1.200+</h3>
                <p className="text-black">pessoas passaram pela feira</p>
              </div>
            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className=" md:w-1/3 pt-2">
                <Image src={img} alt="teste" />
              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">500+</h3>
                <p className="text-black">Cestas básicas distribuídas na feira </p>
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
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">145</h3>
                <p className="text-black">pessoas assistiram aos workshops</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full rounded-xl shadow-xl text-center text-4xl font-bold p-10 text-[#EB591E]">
          <h3>Nossos Parceiros</h3>
          <Partners />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:px-20 bg-white py-10">
        <div className="md:w-1/2 md:p-10 gap-10 order-last md:text-left text-center md:order-first p-5">
          <h3 className="text-4xl  font-bold text-[#EB591E]">Nosso Fundador</h3>
          <p className="text-xl py-4 text-black">
            Carlos Silva é o visionário por trás da Construfavela, o maior evento de construção civil voltado para as favelas do Brasil. Criado com o objetivo de transformar o cenário da construção nas comunidades, a Construfavela reúne as principais empresas do setor, oferecendo uma plataforma para a exposição de produtos,
            realização de palestras e workshops. O evento promove a inovação ao introduzir novas tecnologias e fortalece o networking entre profissionais e comerciantes da região,
            contribuindo para o desenvolvimento sustentável e a melhoria das condições de construção nas favelas.
          </p>
        </div>
        <div className="md:w-1/2 flex md:h-1/2 order-first md:order-last px-5">
          <Image src={Carlos} alt="Carlos Silva" className="rounded-xl" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
