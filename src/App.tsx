
import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactNode } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Treinos from "./components/Treinos/Treinos";
import Jogos from "./components/Jogos/Jogos";
import CadastroCTA from "./components/CadastroCTA/CadastroCTA";
import Sobre from "./components/Sobre/Sobre";

import Dashboard from "./pages/Dashboard/Dashboard";
import Cadastro from "./pages/Cadastro/Cadastro";
import Pagamento from "./pages/Pagamento/Pagamento";
import Login from "./pages/Login/Login";

// permite acessar a rota somente com uma sessão ativa
function RotaProtegida({ children }: { children: ReactNode }) {
  const autenticado =
    localStorage.getItem("sessaoPlayerExperience") === "ativa";

  return autenticado ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="app min-h-screen">
      <Routes>
        {/*página inicial e suas seções */}
        <Route
          path="/"
          element={
            <>
              <Header />

              <main>
                <Hero />
                <Treinos />
                <Jogos />
                <CadastroCTA />
                <Sobre />
              </main>
            </>
          }
        />

        {/* página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* etapa demonstrativa de pagamento */}
        <Route path="/pagamento" element={<Pagamento />} />

        {/* página de login */}
        <Route path="/login" element={<Login />} />

        {/* protege o acesso ao dashboard */}
        <Route
          path="/dashboard"
          element={
            <RotaProtegida>
              <Dashboard />
            </RotaProtegida>
          }
        />

        {/* redireciona caminhos inexistentes para a página inicial */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
