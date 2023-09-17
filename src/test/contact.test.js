import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("It should load Contact us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("It should load button in Contact us Component", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});

test("It should load name inside Contact us Component", () => {
  render(<Contact />);

  const text = screen.getByPlaceholderText("message");
  expect(text).toBeInTheDocument();
});

test("Should load 2 input in Contact page", () => {
  render(<Contact />);

  const inputBox = screen.getAllByRole("textbox");
  expect(inputBox.length).toBe(2);
});
