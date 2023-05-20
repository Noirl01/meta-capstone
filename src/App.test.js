import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


describe("Landing Page & App Rendering", () => {
 beforeEach(()=>{
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
 })
  test("To Have Header Reserve Button", () => {
    const pageButtons = screen.getByText("Reserve a Table");
    expect(pageButtons).toHaveTextContent("Reserve a Table");
  });
  test("To Have An Order Card", () => {
    const orderCardName = screen.getAllByTestId("order-item--name");
    orderCardName.forEach((card) => {
      expect(card).toHaveClass("order-item--name");
    });
  });

  test("To Have Testimonial Section", () => {
    const section = screen.getByText("Testimonials", { name: /testimonal/i });
    expect(section).toBeValid();
  });

  test("To Have Footer Section", () => {
    const footerLink = screen.getByTestId("footer-test-social");
    expect(footerLink).toHaveAttribute("href", "https://www.facebook.com/");
  });
});
