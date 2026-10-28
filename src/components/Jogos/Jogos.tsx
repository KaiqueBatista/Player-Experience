
function Jogos() {
  const jogos = [
    {
      titulo: "Competições",
      texto:
        "Os jogadores também têm a oportunidade de participar de jogos e ligas amadoras, vivenciando a intensidade das competições e colocando em prática tudo o que foi desenvolvido durante os treinamentos.",
      imagem: "/jogo 1.jpeg",
      alt: "Jogadores participando de uma partida",
      imagemEsquerda: true,
    },
    {
      titulo: "Ligas amadoras",
      texto:
        "As partidas fazem parte de competições amadoras, proporcionando aos jogadores a oportunidade de conhecer novos adversários e ganhar experiência dentro de campo.",
      imagem: "/jogo 2.jpeg",
      alt: "Partida de futebol em campo gramado",
      imagemEsquerda: false,
    },
    {
      titulo: "Experiência em campo",
      texto:
        "Cada partida é uma oportunidade para colocar em prática o trabalho realizado nos treinamentos, desenvolver novas habilidades e vivenciar o ambiente de uma competição.",
      imagem: "/jogo 3.jpeg",
      alt: "Jogadores disputando uma partida de futebol",
      imagemEsquerda: true,
    },
  ];

  return (
    // organiza a seção de jogos com espaçamento responsivo entre os conteúdos
    <section id="jogos" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Jogos e ligas amadoras
          </h2>

          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:leading-8">
            A experiência vai além dos treinamentos e também acontece dentro
            das competições.
          </p>
        </header>

        {/* organiza os jogos em blocos com alternância entre imagem e texto */}
        <div className="mt-12 flex flex-col gap-16 sm:mt-16 sm:gap-20">
          {jogos.map((jogo) => (
            <article
              key={jogo.titulo}
              className={`grid grid-cols-1 items-center gap-6 md:gap-10 ${
                jogo.imagemEsquerda
                  ? "md:grid-cols-[300px_minmax(0,1fr)]"
                  : "md:grid-cols-[minmax(0,1fr)_300px]"
              }`}
            >
              <img
                src={jogo.imagem}
                alt={jogo.alt}
                loading="lazy"
                className={`h-56 w-full rounded-2xl border border-white/10 object-cover shadow-lg sm:h-72 md:h-56 md:w-[300px] ${
                  jogo.imagemEsquerda ? "md:order-1" : "md:order-2"
                }`}
              />
              
              <div
                className={`flex flex-col gap-4 ${
                  jogo.imagemEsquerda ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {jogo.titulo}
                </h3>

                <p className="text-base leading-7 text-slate-300 sm:leading-8">
                  {jogo.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jogos;
