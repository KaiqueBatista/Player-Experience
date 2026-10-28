
import { Link } from "react-router-dom";

function Header() {
  return (
    // organiza a logo, a navegação e o botão de login com espaçamento responsivo
    <header className="flex flex-col gap-6 border-b border-white/10 bg-slate-950/40 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 lg:px-12">
      {/* direciona a logo para a página inicial */}
      <Link
        to="/"
        className="w-fit text-xl font-bold text-white transition-colors hover:text-blue-300 sm:text-2xl"
      >
        Player Experience
      </Link>

      {/*links das seções principais */}
      <nav
        aria-label="navegação principal"
        className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:gap-x-8 sm:text-base"
      >
        <a href="/#treinos" className="transition-colors hover:text-blue-300">
          Treinos
        </a>

        <a href="/#jogos" className="transition-colors hover:text-blue-300">
          Jogos
        </a>

        <a href="/#sobre" className="transition-colors hover:text-blue-300">
          Sobre
        </a>
      </nav>

      {/* direciona o usuário para a página de login */}
      <Link
        to="/login"
        className="primary-button flex min-h-12 w-fit items-center justify-center px-6 text-center sm:shrink-0"
      >
        Entrar
      </Link>
    </header>
  );
}

export default Header;
