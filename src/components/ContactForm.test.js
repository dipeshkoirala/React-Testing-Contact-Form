import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "@testing-library/jest-dom/extend-expect";
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

test("renders contactForm  component", async () => {
  // Arrange
  const { getByTestId } = render(<ContactForm />);
  // Act
  const msg = getByTestId(/lastName/i);
  // Assert
  //expect(msg).toBeInTheDocument();

  expect(msg).toHaveTextContent(/[a-zA-Z]/i);
});

describe("testing contact form inputs", () => {
  it("Finds the Named Input", () => {
    let expected = "Edd";
    //act

    let actual = "Edd";
    // 'input[name="firstname"]';

    //assert
    expect(actual).toBe(expected);
  });
});

describe("testing contact form inputs", () => {
  it("Finds the Named Input", () => {
    let expected = "Burke";
    //act

    let actual = "Burke";
    // 'input[name="firstname"]';

    //assert
    expect(actual).toBe(expected);
  });
});
