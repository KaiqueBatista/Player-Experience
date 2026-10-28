
import { useNavigate } from "react-router-dom";

function CadastroCTA() {
  const navigate = useNavigate();

  return (
    // organiza a seção de chamada para cadastro com espaçamento responsivo
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-3xl bg-gray-900 px-6 py-12 text-center sm:gap-8 sm:px-10 sm:py-16">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
          Faça parte do Player Experience
        </h2>

        <p className="max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8">
          Treine, participe de competições e desenvolva seu futebol junto com
          outros jogadores.
        </p>

        {/* direciona o usuário para a página de cadastro */}
        <button
          type="button"
          onClick={() => navigate("/cadastro")}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-7 py-3 text-center font-bold text-gray-900 transition-colors duration-200 hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Fazer parte
        </button>
      </div>
    </section>
  );
}

export default CadastroCTA;
