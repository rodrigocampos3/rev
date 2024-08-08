// pages/index.js
import NavBar from "@/app/components/Nav";
import Image from 'next/image';
import capa from '../../../public/capa.jpg';
import Carousel from "@/app/components/Carrousel";
import img from "../../public/icon.svg";


const Home = () => {
  return (
    <main className="w-screen h-screen bg-white">
      <NavBar />
      <div className="min-w-full bg-white flex flex-col md:flex-row md:p-20" id="container-1">
     
      </div>
    </main>
  );
};

export default Home;
