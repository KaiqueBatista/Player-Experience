
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";

describe("Login", () => {
  beforeEach(() => {
    localStorage.clear();

    localStorage.setItem(
      "usuarioPlayerExperience",
      JSON.stringify({
        nome: "Kaique",
        email: "kaique@email.com",
        senha: "senha123",
      })
    );
  });

  it("permite entrar com as credenciais corretas", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<h1>Dashboard do jogador</h1>}
          />
        </Routes>
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText(/e-mail/i),
      "kaique@email.com"
    );

    await user.type(
      screen.getByLabelText(/senha/i),
      "senha123"
    );

    await user.click(
      screen.getByRole("button", { name: /entrar|login/i })
    );

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /dashboard do jogador/i })
      ).toBeInTheDocument();
    });

    expect(localStorage.getItem("sessaoPlayerExperience")).toBe("ativa");
  });

  it("exibe erro quando a senha está incorreta", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText(/e-mail/i),
      "kaique@email.com"
    );

    await user.type(
      screen.getByLabelText(/senha/i),
      "senhaerrada"
    );

    await user.click(
      screen.getByRole("button", { name: /entrar|login/i })
    );

    expect(
      await screen.findByText(/incorret|inválid|não encontrado/i)
    ).toBeInTheDocument();

    expect(localStorage.getItem("sessaoPlayerExperience")).toBeNull();
  });
});
