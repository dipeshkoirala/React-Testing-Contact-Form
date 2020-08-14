import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
// import { getByText } from "@testing-library/dom";

test("renders ContactForm.js without crashing", () => {
  render(<ContactForm />);
});

test("renders contactForm  component", async () => {
  // Arrange
  const { getByText } = render(<ContactForm />);
  // Act
  const msg = getByText(/user contact form/i);
  // Assert
  expect(msg).toBeInTheDocument();
});

test("Testing Browser", () => {
  render(<ContactForm />);

  fireEvent.change(screen.getByText(/submit/i));
});
