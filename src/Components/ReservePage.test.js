import { render, screen } from "@testing-library/react";
import ReservePage from "./ReservePage";
import { TimeProvider } from "../Context/TimeContext";

describe("Should render revservation section", () => {
  test("It should have drop downs", () => {
    render(
      <TimeProvider>
        <ReservePage />
      </TimeProvider>
    );
    const dropDown = screen.getByText("Seating");
    expect(dropDown).toBeInTheDocument();
  });
  test("Button should be disabled", () => {
    render(
      <TimeProvider>
        <ReservePage />
      </TimeProvider>
    );
    const nextButton = screen.getByText("Next");
    expect(nextButton).toHaveAttribute("disabled");
  });
});
