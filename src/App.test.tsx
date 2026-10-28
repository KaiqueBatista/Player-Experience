
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Rotas da aplicação", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("redireciona para login quando não existe sessão", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByRole("heading", { name: /entrar|login/i })
    ).toBeInTheDocument();
  });

  it("permite acessar o Dashboard quando existe sessão", async () => {
    localStorage.setItem("sessaoPlayerExperience", "ativa");

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/próximo treino/i)
    ).toBeInTheDocument();
  });
});
