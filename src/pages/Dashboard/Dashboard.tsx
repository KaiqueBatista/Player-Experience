
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const usuarioSalvo = localStorage.getItem("usuarioPlayerExperience");
  let nome = "jogador";

  if (usuarioSalvo) {
    try {
      nome = JSON.parse(usuarioSalvo).nome || "jogador";
    } catch {
      // mantém o nome padrão para dados inválidos
    }
  }

  function sair() {
    localStorage.removeItem("sessaoPlayerExperience");
    navigate("/login", { replace: true });
  }

  const cards = [
    {
      titulo: "Próximo treino",
      detalhe: "Terça-feira às 19h",
      icone: "⚽",
    },
    {
      titulo: "Próximo jogo",
      detalhe: "Sábado às 16h",
      icone: "🏆",
    },
    {
      titulo: "Minha equipe",
      detalhe: "Player Experience FC",
      icone: "👕",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        {/* apresenta as boas-vindas e as opções da conta */}
        <header className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex min-w-0 flex-col gap-4">
            <p className="text-sm font-semibold uppercase leading-6 tracking-widest text-blue-300">
              Área do jogador
            </p>

            <h1 className="break-words text-3xl font-bold leading-tight text-white sm:text-4xl">
              Olá, {nome}!
            </h1>

            <p className="max-w-xl text-base leading-7 text-slate-300 sm:leading-8">
              Bem-vindo ao seu espaço no Player Experience.
            </p>
          </div>

          {/* encerra a sessão e retorna à tela de login */}
          <button
            type="button"
            onClick={sair}
            className="secondary-button flex min-h-12 w-full items-center justify-center px-6 py-3 text-center sm:w-fit sm:shrink-0"
          >
            Sair da conta
          </button>
        </header>

        {/* organiza os principais dados do jogador em cards */}
        <section
          aria-label="Resumo do jogador"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <article
              key={card.titulo}
              className="dashboard-card flex min-w-0 flex-col items-start gap-5 rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-lg transition-colors duration-200 hover:border-blue-400/30 sm:p-8"
            >
              {/* destaca visualmente cada informação */}
              <span
                className="text-4xl leading-none"
                aria-hidden="true"
              >
                {card.icone}
              </span>

              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold leading-7 text-white">
                  {card.titulo}
                </h2>

                <p className="text-base leading-7 text-slate-300">
                  {card.detalhe}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Dashboard;
