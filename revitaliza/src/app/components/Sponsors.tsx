import Image from 'next/image';

// Strict checkerboard like the official backdrop: light and dark tiles
// interleaved one by one. Column counts must stay ODD (3/5/7) or the
// alternation turns into vertical stripes.
const light = [
  ['simetrica', 'Simétrica'], ['mpd', 'MPD'], ['votorantim', 'Votorantim Cimentos'], ['seconci', 'Seconci-SP'],
  ['prefeitura', 'Prefeitura de São Paulo'], ['parqueglobal', 'Parque Global'], ['sinduscon', 'SindusCon-SP'],
  ['suvinil', 'Suvinil'], ['eucatex', 'Tintas Eucatex'], ['krona', 'Krona'], ['estrutura', 'Estrutura Patrimonial'],
];
const dark = [
  ['cascola', 'Cascola'], ['planoplano', 'Plano&Plano'], ['buenonetto', 'Instituto Bueno Netto'], ['g10', 'G10 Favelas'],
  ['revitaliza', 'Instituto Revitaliza Comunidade'], ['transvias', 'Transvias'], ['revitaliza-reformas', 'Revitaliza Reformas'],
  ['colorgin', 'Colorgin'], ['dryko', 'Dryko'], ['academia', 'Academia das Instalações'],
];
const sponsors = light.flatMap((l, i) => (dark[i] ? [l, dark[i]] : [l]));

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="bg-ink py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-display tracking-[0.3em] text-center text-lg">Quem constrói junto</p>
        <h2 className="font-display uppercase text-5xl md:text-7xl text-center text-white leading-none mb-10">
          Patrocinadores <span className="text-gold-gradient">&amp; Apoiadores</span>
        </h2>
        <ul className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-[2px] bg-gold/40 p-[2px]">
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
