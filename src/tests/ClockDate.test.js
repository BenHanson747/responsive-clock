import React from "react";
import { render } from "@testing-library/react";
import ClockDate from "./ClockDate";

describe("ClockDate", () => {
  test("renders the current date in international format", () => {
    const { getByText } = render(<ClockDate />);
    const date = new Date();
    const options = { year: "numeric", month: "short", day: "numeric" };
    const dateString = date.toLocaleDateString("en-gb", options);
    const dateNode = getByText(dateString);
    expect(dateNode).toBeInTheDocument();
  });

  test('renders the date in a div with class "clock__date"', () => {
    const { container } = render(<ClockDate />);
    const dateDiv = container.querySelector(".clock__date");
    expect(dateDiv).toBeInTheDocument();
  });
});
