import React from "react";
import { render, screen } from "@testing-library/react";
import ClientsList from "./ClientsList";

describe("ClientsList component", () => {
  const clients = [
    { id: 1, fullName: "Samo Algerino", email: "john.doe@example.com" },
    { id: 2, fullName: "Jane Doe", email: "jane.doe@example.com" },
  ];

  it("should render the list of clients", () => {
    render(<ClientsList clients={clients} />);
    expect(screen.getByTestId("clientsList")).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBe(clients.length * 3);
  });

  it("should render the client names and emails as links", () => {
    render(<ClientsList clients={clients} />);
    clients.forEach((client) => {
      expect(screen.getByRole("link", { name: client.fullName })).toHaveAttribute(
        "href",
        `/${client.id}`
      );
      expect(screen.getByRole("link", { name: client.email })).toHaveAttribute(
        "href",
        `/${client.id}`
      );
    });
  });

  it("should render a 'Create a client' button", () => {
    render(<ClientsList clients={clients} />);
    expect(screen.getByRole("link", { name: "Créer un client" })).toHaveAttribute(
      "href",
      "/create"
    );
  });
});
