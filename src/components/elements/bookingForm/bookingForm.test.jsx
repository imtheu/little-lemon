import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={{ then: jest.fn() }} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
