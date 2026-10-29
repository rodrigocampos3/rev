import Image from 'next/image';

// Tiles alternate dark/light like the official checkerboard backdrop.
const sponsors = [
  ['simetrica', 'Simétrica'], ['cascola', 'Cascola'], ['mpd', 'MPD'], ['votorantim', 'Votorantim Cimentos'],
  ['seconci', 'Seconci-SP'], ['planoplano', 'Plano&Plano'], ['prefeitura', 'Prefeitura de São Paulo'], ['buenonetto', 'Instituto Bueno Netto'],
  ['parqueglobal', 'Parque Global'], ['g10', 'G10 Favelas'], ['sinduscon', 'SindusCon-SP'], ['revitaliza', 'Instituto Revitaliza Comunidade'],
  ['suvinil', 'Suvinil'], ['transvias', 'Transvias'], ['revitaliza-reformas', 'Revitaliza Reformas'], ['eucatex', 'Tintas Eucatex'],
  ['colorgin', 'Colorgin'], ['dryko', 'Dryko'], ['academia', 'Academia das Instalações'], ['krona', 'Krona'],
  ['estrutura', 'Estrutura Patrimonial'],
];

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="bg-ink py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-display tracking-[0.3em] text-center text-lg">Quem constrói junto</p>
        <h2 className="font-display uppercase text-5xl md:text-7xl text-center text-white leading-none mb-10">
          Patrocinadores <span className="text-gold-gradient">&amp; Apoiadores</span>
        </h2>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-[2px] bg-gold/40 p-[2px]">
          {sponsors.map(([file, name]) => (
            <li key={file} className="relative aspect-square bg-ink overflow-hidden">
              <Image src={`/sponsors/${file}.png`} alt={name} fill sizes="(min-width:1024px) 14vw, 25vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
