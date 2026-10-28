# Player Experience

Aplicação web desenvolvida como projeto de portfólio para apresentar uma equipe de futebol amador e demonstrar um fluxo básico de navegação, cadastro e login.

## Sobre o projeto

O **Player Experience** apresenta a proposta de uma comunidade voltada ao futebol amador, destacando a rotina de treinos, jogos, competições e a experiência dos jogadores dentro e fora de campo.

Além da página institucional, o projeto inclui telas demonstrativas de cadastro, login, área do jogador e inscrição. Os dados são armazenados no próprio navegador, sem integração com uma API ou banco de dados.

## Funcionalidades

- **Página inicial:** apresentação do projeto e navegação pelas seções principais.
- **Treinos:** conteúdo sobre estratégia, tática e preparação física.
- **Jogos e ligas amadoras:** apresentação da experiência em partidas e competições.
- **Sobre:** informações institucionais, plano demonstrativo e oportunidades para parceiros.
- **Cadastro:** formulário com nome, e-mail, telefone, senha e confirmação de senha.
- **Validação do cadastro:** verifica o preenchimento dos campos e se as senhas coincidem.
- **Login:** valida as credenciais salvas no navegador.
- **Dashboard do jogador:** exibe uma saudação personalizada, informações demonstrativas sobre treino, jogo e equipe, além da opção de sair.
- **Rotas protegidas:** a página do dashboard exige uma sessão local ativa.
- **Inscrição demonstrativa:** página ilustrativa que não processa pagamentos.
- **Layout responsivo:** adaptação da interface para diferentes tamanhos de tela.

## Tecnologias utilizadas

- **React 19** — construção da interface com componentes.
- **TypeScript** — tipagem estática no código.
- **Vite** — servidor de desenvolvimento e ferramenta de build.
- **Tailwind CSS 4** — estilização e responsividade.
- **React Router DOM 7** — navegação entre páginas.
- **Vitest** — execução dos testes.
- **React Testing Library** e **user-event** — testes de componentes e interações.
- **ESLint** — análise estática e padronização do código.

## Como executar localmente

### Pré-requisitos

- Node.js compatível com as versões utilizadas pelo Vite e pelas dependências do projeto.
- npm.

### Instalação

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra o terminal na pasta que contém o arquivo `package.json` — neste pacote, a pasta `meu-projeto`.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço local informado pelo Vite no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Executa uma prévia local da versão de produção. |
| `npm run lint` | Executa o ESLint para verificar o código. |
| `npm run test` | Executa os testes automatizados com Vitest. |

## Estrutura principal

```text
src/
├── components/
│   ├── CadastroCTA/
│   ├── Header/
│   ├── Hero/
│   ├── Jogos/
│   ├── Sobre/
│   └── Treinos/
├── pages/
│   ├── Cadastro/
│   ├── Dashboard/
│   ├── Login/
│   └── Pagamento/
├── test/
├── App.tsx
├── index.css
└── main.tsx

public/
├── apresentacao.jpg
├── bg.jpg
├── jogo 1.jpeg
├── jogo 2.jpeg
├── jogo 3.jpeg
├── treino 1.jpeg
├── treino 2.jpeg
└── treino 3.jpeg
```

## Rotas da aplicação

| Rota | Finalidade |
| --- | --- |
| `/` | Página inicial e apresentação do projeto. |
| `/cadastro` | Formulário de criação de conta. |
| `/login` | Tela de autenticação demonstrativa. |
| `/dashboard` | Área do jogador, acessível com sessão local ativa. |
| `/pagamento` | Etapa ilustrativa de inscrição, sem cobrança real. |

## Testes

Os testes automatizados cobrem cenários de cadastro, validação de senhas, autenticação, exibição do nome do jogador e encerramento da sessão.

Para executar os testes:

```bash
npm run test
```

## Limitações e segurança

Este projeto é **demonstrativo e destinado a portfólio**. Não deve ser utilizado para cadastrar usuários reais ou processar pagamentos.

- Os dados do usuário, inclusive a senha, são armazenados no `localStorage` do navegador em formato legível. Isso **não é seguro para produção**.
- A autenticação é realizada no cliente e não representa um mecanismo de segurança real.
- A sessão local pode ser alterada pelo próprio usuário no navegador.
- A página de inscrição não solicita dados financeiros e não realiza transações.
- Não há backend, API ou banco de dados integrado.

Para transformar a demonstração em uma aplicação real, seria necessário implementar um backend, persistência segura dos dados, armazenamento de senhas com hash apropriado, autenticação e autorização validadas no servidor, além de uma integração de pagamento segura caso esse recurso venha a ser necessário.

## Objetivo

O projeto foi desenvolvido para praticar e demonstrar habilidades de desenvolvimento Front-end, incluindo componentização, interfaces responsivas, formulários controlados, validação de dados, navegação com rotas, armazenamento local e testes automatizados.
