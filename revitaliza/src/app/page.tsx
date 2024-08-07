// pages/index.js
import NavBar from "@/app/components/Nav";
import Image from 'next/image';
import capa from '../../public/capa.jpg';
import Carousel from "@/app/components/Carrousel"
import img from "../../public/icon.svg"
import Logo from "../../public/logo.png"
import Carlos from "../../public/carlos.jpg"
import Constru from "../../public/constru.jpg"
import Carlos2 from "../../public/carlos2.jpg"
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";


import Partners from "./components/Partners";
export default function Home() {
  return (
    <main className="w-screen h-screen bg-white">
      <NavBar />
      <div className="min-w-full bg-white flex flex-col md:flex-row md:p-20" id="container-1">
  <div className="md:w-1/2 md:px-20 order-1 md:order-2">
    <Image src={Constru} alt="Constru Favela" className="object-cover rounded-2xl"></Image>
  </div>
  <div className="w-full flex flex-col gap-2 md:gap-5 md:p-10 order-2 md:order-1">
    <h1 className="text-3xl md:text-5xl font-bold text-center text-[#EB591E] md:text-left">Explore Oportunidades e Impacto Social em Nossa Comunidade</h1>
    <p className="text-center md:text-left px-2">aisfhaof soaifhaoisfa fiahsfioaf aoisfoaifoai iefowf aoishfoaifs asoifaosfabfoiasfuo asfgoauf asufgaofbgao faogsfuoab augfaof ausgfaobsfugoa fsagusofasf guoasf</p>
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
          <p>A ConstruFavela 2024 é um evento dedicado à construção civil nas comunidades, que ocorrerá nos dias 24 e 25 de outubro no Pavilhão Social do G10 Favelas, em Paraisópolis, São Paulo. O evento oferece uma oportunidade única para se conectar com um público de alto potencial econômico, com um mercado estimado em 167 bilhões de reais. Além de fomentar o crescimento profissional através de um curso gratuito de Técnicas Básicas da Construção Civil, a ConstruFavela promove networking com especialistas e expositores renomados.
            O objetivo é fortalecer e capacitar os moradores das comunidades, proporcionando impacto positivo e desenvolvimento local.</p>
            <button className="bg-[#EB591E] text-xl text-white rounded-md md:w-1/3 p-2">Inscreva-se</button>
        </div>
        <div className="flex flex-col w-full items-center py-10">
          <h2 className="text-3xl text-[#EB591E] font-bold py-3 h-full">Edições Anteriores</h2>
          <Carousel />
        </div>
        <div className="w-full flex flex-col md:flex-row md:p-10">
          <div className="w-full md:w-1/2 md:px-10 text-center md:text-left py-3">
            <h1 className="text-[#EB591E] text-2xl font-bold ">Nossos números</h1>
            <p>Confira os resultados alcançados na última edição do ConstruFavela:</p>
          </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2">
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
              <Image src={img} alt="teste" />

              </div>
              <div className=" w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">1.200+</h3>
                <p>pessoas passaram pela feira</p>
                
              </div>



            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className=" md:w-1/3 pt-2">
              <Image src={img} alt="teste" />

              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">500+</h3>
                <p>Cestas básicas distribuídas na feira </p>
                
              </div>



            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
              <Image src={img} alt="teste" />

              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">435</h3>
                <p>pessoas assistiram as palestras

</p>
                
              </div>



            </div>
            <div className="flex items-center justify-center border p-4 bg-gray-200 flex-col md:flex-row rounded-md">
              <div className="md:w-1/3 pt-2">
              <Image src={img} alt="teste" />

              </div>
              <div className="w-full md:w-2/3 items-center text-center flex flex-col">
                <h3 className="text-3xl font-bold text-[#EB591E] ">145</h3>
                <p>pessoas assistiram aos workshops</p>
                
              </div>



            </div>
          </div>
        </div>
        <div className="flex flex-col w-full rounded-xl shadow-xl text-center text-4xl font-bold p-10 text-[#EB591E]"  ><h3>Nossos Parceiros</h3>
        <Partners></Partners></div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:px-20 bg-white py-10">
  <div className="md:w-1/2 md:p-10 gap-10 order-last md:text-left text-center md:order-first p-5">
    <h3 className="text-4xl  font-bold text-[#EB591E]">Nosso Fundador</h3>
    <p className="text-xl py-4">
      Carlos Silva é um dos co-criadores do projeto social "Cores da Favela", uma iniciativa transformadora que oferece melhorias habitacionais para famílias em situação de alta vulnerabilidade social. O projeto não apenas se dedica à reforma e adequação das moradias dessas comunidades, mas também oferece capacitação profissional e oportunidades de emprego e renda. O objetivo é promover uma mudança sustentável na vida dos participantes.
      <br /><br />
      Carlos Silva e sua equipe trabalham para criar um impacto duradouro, abordando as necessidades básicas e criando condições para o desenvolvimento pessoal e econômico das famílias atendidas. O projeto reflete um forte compromisso com a inclusão social e a justiça econômica.
    </p>
  </div>
  <div className="md:w-1/2 flex md:h-1/2 order-first md:order-last px-5">
    <Image src={Carlos2} alt="founder" layout="responsive" className="rounded-xl" />
  </div>
      </div>
      <Footer></Footer>
      <a
        href="https://wa.me/5511999999999" // Substitua pelo seu número de WhatsApp no formato internacional
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} />
      </a>

    

      


    </main>
  );
}
