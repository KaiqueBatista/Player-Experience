
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function autenticarUsuario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErro("");

    const usuarioSalvo = localStorage.getItem("usuarioPlayerExperience");

    if (!usuarioSalvo) {
      setErro("Nenhum usuário cadastrado. Crie sua conta primeiro.");
      return;
    }

    try {
      const usuario = JSON.parse(usuarioSalvo) as {
        email: string;
        senha: string;
      };

      if (
        email.trim().toLowerCase() === usuario.email.trim().toLowerCase() &&
        senha === usuario.senha
      ) {
        localStorage.setItem("sessaoPlayerExperience", "ativa");
        navigate("/dashboard", { replace: true });
      } else {
        setErro("E-mail ou senha incorretos.");
      }
    } catch {
      setErro(
        "Não foi possível validar os dados salvos. Faça seu cadastro novamente."
      );
    }
  }

  return (
    <main className="auth-page flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
      <section className="auth-card mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl sm:p-9">
        {/* direciona o usuário de volta à página inicial */}
        <Link
          to="/"
          className="inline-block text-sm font-semibold leading-6 text-blue-300 transition-colors hover:text-blue-200"
        >
          ← Voltar ao início
        </Link>

        <header className="mt-8 flex flex-col gap-4">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Entrar
          </h1>

          <p className="text-base leading-7 text-slate-300">
            Entre na sua conta para acessar o Player Experience.
          </p>
        </header>

        {/* organiza os campos de autenticação */}
        <form
          onSubmit={autenticarUsuario}
          className="mt-8 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-6 text-white"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-input w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="senha"
              className="text-sm font-medium leading-6 text-white"
            >
              Senha
            </label>

            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              className="form-input w-full"
            />
          </div>

          {/* apresenta mensagens de erro na autenticação */}
          {erro && (
            <p
              role="alert"
              className="rounded-lg border border-red-400/20 bg-red-500/10 p-3 text-sm leading-6 text-red-300"
            >
              {erro}
            </p>
          )}

          {/* envia os dados para validação */}
          <button
            type="submit"
            className="primary-button flex min-h-12 w-full items-center justify-center px-6 py-3 text-center"
          >
            Entrar
          </button>
        </form>

        {/* apresenta o link de cadastro e o aviso demonstrativo */}
        <div className="mt-8 flex flex-col gap-5">
          <p className="text-sm leading-7 text-slate-300">
            Ainda não tem conta?{" "}
            <Link
              to="/cadastro"
              className="font-semibold text-blue-300 underline underline-offset-4 transition-colors hover:text-blue-200"
            >
              Cadastre-se
            </Link>
          </p>

          <p className="border-t border-white/10 pt-5 text-xs leading-6 text-slate-400">
            Projeto demonstrativo: os dados ficam armazenados apenas neste
            navegador.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
