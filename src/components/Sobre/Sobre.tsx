
function Sobre() {
  return (
    // organiza a seção sobre o projeto com espaçamento responsivo
    <section id="sobre" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {/* apresenta o projeto e sua proposta */}
        <header className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Sobre o Player Experience
          </h2>

          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:leading-8">
            Conheça nossa história, nossos planos e o que nos move dentro e
            fora de campo.
          </p>
        </header>

        {/* organiza as informações do projeto em cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:gap-8">
          {/* apresenta a história do projeto */}
          <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold leading-7 text-white">
              Nossa história
            </h3>

            <p className="text-base leading-7 text-slate-300">
              Fundado em 2026, o Player Experience nasceu com a proposta de
              conectar jogadores amadores, incentivar o desenvolvimento
              esportivo e proporcionar novas experiências no futebol.
            </p>
          </article>

          {/* informa a localização do projeto */}
          <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold leading-7 text-white">
              Onde estamos
            </h3>

            <p className="text-base leading-7 text-slate-300">
              Nossa sede está localizada em São Paulo, SP, com foco na
              comunidade do futebol amador e na integração entre jogadores.
            </p>
          </article>

          {/* apresenta o plano demonstrativo */}
          <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold leading-7 text-white">
              Nosso plano
            </h3>

            <p className="text-base leading-7 text-slate-300">
              O Plano Player Experience tem o valor demonstrativo de R$ 119,90
              e representa a proposta de participação em treinamentos, jogos e
              experiências esportivas.
            </p>
          </article>

          {/* apresenta as oportunidades de parceria */}
          <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold leading-7 text-white">
              Parceiros e patrocinadores
            </h3>

            <p className="text-base leading-7 text-slate-300">
              Buscamos valorizar iniciativas ligadas ao esporte, como lojas
              esportivas, academias e projetos locais.
            </p>

            <p className="text-base font-semibold leading-7 text-blue-300">
              Seja você um parceiro também!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
