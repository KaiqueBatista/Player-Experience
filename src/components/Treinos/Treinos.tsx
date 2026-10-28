
function Treinos() {
  return (
    // organiza a seção de treinos com espaçamento responsivo
    <section id="treinos" className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Nossa rotina de treinos
          </h2>

          <p className="max-w-3xl text-base leading-7 text-slate-300 sm:leading-8">
            Cada treino é uma etapa importante na preparação do time.
          </p>
        </header>

        {/* area do treinamento */}
        <article className="mt-12 grid grid-cols-1 items-center gap-6 sm:mt-16 sm:gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-10">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Estratégia
            </h3>

            <p className="text-base leading-7 text-slate-300 sm:leading-8">
              O treinador passa orientações e apresenta as estratégias que
              serão trabalhadas pelo time durante os próximos treinamentos e
              jogos.
            </p>
          </div>

          <img
            src="/treino 1.jpeg"
            alt="Treinador passando orientações"
            loading="lazy"
            className="h-56 w-full rounded-2xl border border-white/10 object-cover shadow-lg sm:h-64 md:h-[200px] md:w-[300px]"
          />
        </article>

        <article className="mt-16 grid grid-cols-1 items-center gap-6 sm:mt-20 sm:gap-8 md:grid-cols-[minmax(0,1fr)_300px] md:gap-10">
          <div className="flex min-w-0 flex-col gap-4 md:order-1">
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Tática
            </h3>

            <p className="text-base leading-7 text-slate-300 sm:leading-8">
              Os jogadores colocam em prática as orientações recebidas,
              trabalhando posicionamento, movimentação e organização durante
              os treinamentos em campo.
            </p>
          </div>

          <img
            src="/treino 2.jpeg"
            alt="Jogadores treinando em campo"
            loading="lazy"
            className="h-56 w-full rounded-2xl border border-white/10 object-cover shadow-lg sm:h-64 md:order-2 md:h-[200px] md:w-[300px]"
          />
        </article>

        <article className="mt-16 grid grid-cols-1 items-center gap-6 sm:mt-20 sm:gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-10">
          <div className="flex min-w-0 flex-col gap-4">
            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Fortalecimento físico
            </h3>

            <p className="text-base leading-7 text-slate-300 sm:leading-8">
              A preparação física ajuda os jogadores a desenvolver resistência,
              velocidade e condicionamento para suportar a intensidade dos
              treinos e jogos.
            </p>
          </div>

          <img
            src="/treino 3.jpeg"
            alt="Jogadores realizando treinamento físico"
            loading="lazy"
            className="h-56 w-full rounded-2xl border border-white/10 object-cover shadow-lg sm:h-64 md:h-[200px] md:w-[300px]"
          />
        </article>
      </div>
    </section>
  );
}

export default Treinos;
