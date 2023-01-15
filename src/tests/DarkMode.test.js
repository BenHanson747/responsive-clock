import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

describe("DarkMode", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("toggles between dark and light mode", () => {
    const { getByLabelText } = render(<DarkMode />);
    const button = getByLabelText("Light Mode");

    fireEvent.click(button);
    expect(localStorage.getItem("darkTheme")).toBe("true");
    expect(button).toContainHTML('<svg><path d="...</path></svg>');
    expect(document.body.classList.contains("dark-theme")).toBe(true);

    fireEvent.click(button);
    expect(localStorage.getItem("darkTheme")).toBe("false");
    expect(button).toContainHTML('<svg><path d="...</path></svg>');
    expect(document.body.classList.contains("dark-theme")).toBe(false);
  });
});
