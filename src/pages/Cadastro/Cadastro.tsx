
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  // controla os campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // controla as mensagens de validação
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  // formata o telefone com ddd e número
  function formatarTelefone(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 11);

    if (numeros.length === 0) return "";

    if (numeros.length <= 2) {
      return `(${numeros}`;
    }

    if (numeros.length <= 7) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    }

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
  }

  // valida os dados e realiza o cadastro
  function cadastrarUsuario(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");
    setSucesso("");

    // verifica se todos os campos foram preenchidos
    if (
      !nome.trim() ||
      !email.trim() ||
      !telefone.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    // verifica se o telefone possui ddd e número completos
    const numerosTelefone = telefone.replace(/\D/g, "");

    if (numerosTelefone.length !== 11) {
      setErro("Digite um telefone válido com DDD.");
      return;
    }

    // verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    // reúne os dados do usuário
    const usuario = {
      nome: nome.trim(),
      email: email.trim(),
      telefone,
      senha,
    };

    // salva os dados no navegador
    localStorage.setItem(
      "usuarioPlayerExperience",
      JSON.stringify(usuario)
    );

    // exibe a mensagem de sucesso
    setSucesso("Cadastro realizado com sucesso!");

    // redireciona para pagamento após 1,5 segundo
    window.setTimeout(() => {
      navigate("/pagamento");
    }, 1500);
  }

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-lg sm:p-8">
        {/* apresenta o título e a descrição */}
        <header className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Crie sua conta
          </h1>

          <p className="text-base leading-7 text-slate-300">
            Preencha seus dados para fazer parte do Player Experience.
          </p>
        </header>

        {/* recebe os dados do usuário */}
        <form
          onSubmit={cadastrarUsuario}
          className="mt-8 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nome"
              className="text-sm font-medium text-slate-200"
            >
              Nome
            </label>

            <input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="form-input w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-200"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-input w-full"
              required
            />
          </div>

          {/* recebe e formata o telefone */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="telefone"
              className="text-sm font-medium text-slate-200"
            >
              Telefone
            </label>

            <input
              id="telefone"
              name="telefone"
              type="tel"
              autoComplete="tel"
              placeholder="(00) 99999-9999"
              value={telefone}
              onChange={(event) =>
                setTelefone(formatarTelefone(event.target.value))
              }
              className="form-input w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="senha"
              className="text-sm font-medium text-slate-200"
            >
              Senha
            </label>

            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="new-password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              className="form-input w-full"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirmarSenha"
              className="text-sm font-medium text-slate-200"
            >
              Confirmar senha
            </label>

            <input
              id="confirmarSenha"
              name="confirmarSenha"
              type="password"
              autoComplete="new-password"
              placeholder="Digite sua senha novamente"
              value={confirmarSenha}
              onChange={(event) =>
                setConfirmarSenha(event.target.value)
              }
              className="form-input w-full"
              required
            />
          </div>

          {/* apresenta mensagens de validação */}
          {erro && (
            <p
              role="alert"
              className="text-sm leading-6 text-red-400"
            >
              {erro}
            </p>
          )}

          {sucesso && (
            <p
              role="status"
              className="text-sm leading-6 text-green-400"
            >
              {sucesso}
            </p>
          )}

          {/* envia o formulário de cadastro */}
          <button
            type="submit"
            disabled={Boolean(sucesso)}
            className="primary-button mt-2 flex min-h-12 w-full items-center justify-center px-6 py-3 text-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sucesso ? "Redirecionando..." : "Criar conta"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
