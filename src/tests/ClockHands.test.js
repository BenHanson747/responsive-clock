import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ClockHands from "./ClockHands";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("ClockHands component", () => {
  it("should render the clock hands correctly", () => {
    act(() => {
      render(<ClockHands />, container);
    });

    const clockSeconds = container.querySelector(".clock__seconds");
    const clockMinutes = container.querySelector(".clock__minutes");
    const clockHour = container.querySelector(".clock__hour");

    expect(clockSeconds).toBeTruthy();
    expect(clockMinutes).toBeTruthy();
    expect(clockHour).toBeTruthy();
  });

  it("should update the rotation of the hands correctly", () => {
    jest.useFakeTimers();
    act(() => {
      render(<ClockHands />, container);
    });

    const clockSeconds = container.querySelector(".clock__seconds");
    const clockMinutes = container.querySelector(".clock__minutes");
    const clockHour = container.querySelector(".clock__hour");

    expect(clockSeconds.style.transform).toBe("rotate(0deg)");
    expect(clockMinutes.style.transform).toBe("rotate(0deg)");
    expect(clockHour.style.transform).toBe("rotateZ(0deg)");

    jest.advanceTimersByTime(1000);

    expect(clockSeconds.style.transform).not.toBe("rotate(0deg)");
    expect(clockMinutes.style.transform).not.toBe("rotate(0deg)");
    expect(clockHour.style.transform).not.toBe("rotateZ(0deg)");
  });
});
