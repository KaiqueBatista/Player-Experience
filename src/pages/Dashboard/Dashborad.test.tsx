
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  beforeEach(() => {
    localStorage.clear();

    localStorage.setItem(
      "usuarioPlayerExperience",
      JSON.stringify({
        nome: "Kaique",
        email: "kaique@email.com",
      })
    );

    localStorage.setItem("sessaoPlayerExperience", "ativa");
  });

  it("exibe o nome do usuário", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(screen.getByText(/Kaique/i)).toBeInTheDocument();
  });

  it("encerra a sessão ao clicar em sair", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<h1>Tela de login</h1>} />
        </Routes>
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("button", { name: /sair da conta/i })
    );

    expect(localStorage.getItem("sessaoPlayerExperience")).toBeNull();

    expect(
      screen.getByRole("heading", { name: /tela de login/i })
    ).toBeInTheDocument();
  });
});
