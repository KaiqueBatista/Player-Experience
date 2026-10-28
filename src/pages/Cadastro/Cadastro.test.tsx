
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Cadastro";

describe("Cadastro", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("exibe erro quando as senhas são diferentes", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Cadastro />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/nome/i), "Kaique");
    await user.type(
      screen.getByLabelText(/e-mail/i),
      "kaique@email.com"
    );
    await user.type(
      screen.getByLabelText(/telefone/i),
      "11999999999"
    );
    await user.type(
      screen.getByLabelText(/^senha$/i),
      "senha123"
    );
    await user.type(
      screen.getByLabelText(/confirmar senha/i),
      "senha456"
    );

    await user.click(
      screen.getByRole("button", { name: /criar conta/i })
    );

    expect(
      screen.getByRole("alert")
    ).toHaveTextContent("As senhas não coincidem.");

    expect(
      localStorage.getItem("usuarioPlayerExperience")
    ).toBeNull();
  });

  it("exibe sucesso antes de redirecionar para pagamento", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/cadastro"]}>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/pagamento"
            element={<h1>Área de pagamento</h1>}
          />
        </Routes>
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText(/nome/i), "Kaique");
    await user.type(
      screen.getByLabelText(/e-mail/i),
      "kaique@email.com"
    );
    await user.type(
      screen.getByLabelText(/telefone/i),
      "11999999999"
    );
    await user.type(
      screen.getByLabelText(/^senha$/i),
      "senha123"
    );
    await user.type(
      screen.getByLabelText(/confirmar senha/i),
      "senha123"
    );

    await user.click(
      screen.getByRole("button", { name: /criar conta/i })
    );

    // verifica a mensagem antes do redirecionamento
    expect(screen.getByRole("status")).toHaveTextContent(
      "Cadastro realizado com sucesso!"
    );

    // verifica o estado do botão durante a espera
    expect(
      screen.getByRole("button", { name: /redirecionando/i })
    ).toBeDisabled();

    // verifica o redirecionamento após a mensagem de sucesso
    await waitFor(
      () => {
        expect(
          screen.getByRole("heading", {
            name: /área de pagamento/i,
          })
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    // verifica os dados salvos no navegador
    const usuario = JSON.parse(
      localStorage.getItem("usuarioPlayerExperience") || "{}"
    );

    expect(usuario.nome).toBe("Kaique");
    expect(usuario.email).toBe("kaique@email.com");
    expect(usuario.telefone).toBe("(11) 99999-9999");
  });
});
