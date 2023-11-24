import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders multiply app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Multiply App/i);
  expect(linkElement).toBeInTheDocument();
});

test("multiplies two numbers correctly", () => {
  render(<App />);

  // Вводим значения для num1 и num2
  fireEvent.change(screen.getByLabelText(/Num1:/i), { target: { value: "3" } });
  fireEvent.change(screen.getByLabelText(/Num2:/i), { target: { value: "5" } });

  // Нажимаем кнопку "Multiply"
  fireEvent.click(screen.getByText(/Multiply/i));

  // Ожидаем, что результат отобразится на странице
  const resultElement = screen.getByText(/Result:/i);
  expect(resultElement).toBeInTheDocument();

  // Проверяем, что результат соответствует ожидаемому значению (3 * 5 = 15)
  expect(resultElement).toHaveTextContent("15");
});
