import Image from 'next/image';
import G10 from "../../../public/g10.png"; 
import gerdau from "../../../public/gerdau1.png"
import feicon from "../../../public/feicon.png"
import bosch from "../../../public/parceiros/bosch.png"
import ceusa from "../../../public/parceiros/ceusa.jpg"
import cobrecon from "../../../public/parceiros/cobrecon.png"
import deca from "../../../public/parceiros/deca2.png"
import dexco from "../../../public/parceiros/dexco.png"
import durafloor from "../../../public/parceiros/durafloor.png"
import duratex from "../../../public/parceiros/duratex.png"
import eternit from "../../../public/parceiros/eternit.png"
import eucafloor from "../../../public/parceiros/eucafloor.jpeg"
import hydra from "../../../public/parceiros/hydra.png"
import parqueGlobal from "../../../public/parceiros/parqueGlobal.png"
import portinari from "../../../public/parceiros/portinari.png"
import quartolit from "../../../public/parceiros/quartzolit.png"
import saoPaulo from "../../../public/parceiros/saoPaulo.png"
import tramontina from "../../../public/parceiros/tramontina.png"
import votorantimCimentos from "../../../public/parceiros/votorantimCimentos.png"






function Partners() {
  return (
    <div className="py-10 text-center">
      {/* Seção de Apoios */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-6">Apoio</h2>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <div className="flex-shrink-0 text-center">
            <Image src={feicon} alt="Logo Feicon" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={G10} alt="Logo G10" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={saoPaulo} alt="Logo G10" width={300} height={100} />
          </div>
        </div>
      </div>

      {/* Seção de Patrocinadores */}
      <div className='bg-white p-10'>
        <h2 className="text-3xl font-semibold mb-6">Patrocinadores</h2>
        <div className="flex justify-center items-center gap-14 flex-wrap">
          <div className="flex-shrink-0 text-center">
            <Image src={gerdau} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={bosch} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={ceusa} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={cobrecon} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={deca} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={dexco} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={durafloor} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={duratex} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={eternit} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={eucafloor} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={hydra} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={parqueGlobal} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={portinari} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={quartolit} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={tramontina} alt="Logo Gerdau" width={300} height={100} />
          </div>
          <div className="flex-shrink-0 text-center">
            <Image src={votorantimCimentos} alt="Logo Gerdau" width={300} height={100} />
          </div>
          {/* Adicione mais logos de patrocinadores aqui */}
        </div>
      </div>
    </div>
  );
}

export default Partners;

