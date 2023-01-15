import React from "react";
import { render, cleanup } from "@testing-library/react";
import ClockText from "./ClockText";

afterEach(cleanup);

describe("ClockText component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ClockText />);
    expect(getByTestId("clock-text")).toBeInTheDocument();
  });

  it("displays the current time in 12 hour format", () => {
    jest.useFakeTimers();
    const { getByTestId } = render(<ClockText />);
    jest.advanceTimersByTime(1000); // fast forward time by 1 second
    const hour = getByTestId("clock-text-hour");
    const minutes = getByTestId("clock-text-minutes");
    const seconds = getByTestId("clock-text-seconds");
    const ampm = getByTestId("clock-text-ampm");
    expect(hour).toHaveTextContent(/\d{1,2}:/);
    expect(minutes).toHaveTextContent(/\d{2}/);
    expect(seconds).toHaveTextContent(/:\d{2}/);
    expect(ampm).toHaveTextContent(/AM|PM/);
    jest.useRealTimers();
  });
});
