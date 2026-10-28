
import { Link } from "react-router-dom";

function Pagamento() {
  return (
    <main className="auth-page flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
      <section className="auth-card mx-auto w-full max-w-lg rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl sm:p-9">
        {/* direciona o usuário de volta à página inicial */}
        <Link
          to="/"
          className="inline-block text-sm font-semibold leading-6 text-blue-300 transition-colors hover:text-blue-200"
        >
          ← Voltar ao início
        </Link>

        <header className="mt-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Inscrição demonstrativa
          </h1>

          <p className="text-base leading-7 text-slate-300">
            Este projeto é um portfólio e não realiza cobranças. Esta tela
            representa apenas uma etapa ilustrativa do fluxo de inscrição.
          </p>
        </header>

        {/* apresenta as informações do plano demonstrativo */}
        <article className="mt-8 flex flex-col gap-5 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5 sm:p-6">
          <h2 className="text-xl font-bold leading-7 text-white">
            Plano Player Experience
          </h2>

          <p className="text-base leading-7 text-slate-300">
            Exemplo de acesso aos treinamentos e participação nas competições.
          </p>

          <div className="flex flex-col gap-2 border-t border-blue-400/20 pt-4">
            <p className="text-sm font-semibold leading-6 text-blue-200">
              Valor e pagamento não são reais.
            </p>

            <p className="text-sm leading-6 text-slate-400">
              Nenhuma informação financeira é solicitada nesta página.
            </p>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="/login"
            className="primary-button flex min-h-12 w-full items-center justify-center px-5 py-3 text-center"
          >
            Ir para o login
          </Link>

          <Link
            to="/"
            className="secondary-button flex min-h-12 w-full items-center justify-center px-5 py-3 text-center"
          >
            Voltar ao início
          </Link>
        </div>

        <footer className="mt-10 flex flex-col gap-3">
          <p className="text-xs leading-6 text-slate-400">
            Página criada para fins demonstrativos de portfólio.
          </p>

          <p className="text-xs leading-6 text-slate-400">
            Nenhuma transação financeira é realizada.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Pagamento;
