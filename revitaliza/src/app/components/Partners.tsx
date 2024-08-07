import Image from 'next/image';
import G10 from "../../../public/g10.png"; 

function Partners() {
  return (
    <div className="py-10 text-center">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        <div className="flex-shrink-0 text-center">
          <h3 className="text-lg font-semibold mb-2">Parceiro 1</h3>
          <Image src={G10} alt="Logo 1" width={300} height={100} />
        </div>
        <div className="flex-shrink-0 text-center">
          <h3 className="text-lg font-semibold mb-2">Parceiro 2</h3>
          <Image src={G10}  alt="Logo 2" width={300} height={100} />
        </div>
        <div className="flex-shrink-0 text-center">
          <h3 className="text-lg font-semibold mb-2">Parceiro 3</h3>
          <Image src={G10}  alt="Logo 3" width={300} height={100} />
        </div>
        {/* Adicione mais logos conforme necessário */}
      </div>
    </div>
  );
}

export default Partners;
