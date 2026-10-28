
import { Link } from "react-router-dom";

function Hero() {
  return (
    // organiza a seção inicial com texto e imagem em um layout responsivo
    <section className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
        <div className="flex w-full max-w-xl flex-col items-start gap-6">
          {/* apresenta os principais conceitos do projeto */}
          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-blue-300">
            FUTEBOL • UNIÃO • EXPERIÊNCIA
          </span>

          <h1 className="max-w-[700px] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Mais do que um time.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Uma experiência.
            </span>
          </h1>

          <p className="max-w-[500px] text-base leading-7 text-slate-300 sm:leading-8 md:text-lg">
            Acompanhe a rotina, os treinos e os jogos de uma equipe de futebol
            amador.
          </p>

          {/* direciona o visitante para a página de cadastro */}
          <Link
            to="/cadastro"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Fazer parte
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="relative w-full max-w-lg shrink-0">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/30 to-violet-500/20 blur-2xl" />

          <img
            src="/apresentacao.jpg"
            alt="Bola de futebol no campo"
            className="relative h-[280px] w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-blue-950/50 sm:h-[350px] md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
