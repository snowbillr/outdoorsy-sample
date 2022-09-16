import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SortIndicator } from ".";
import styles from "./styles.module.css";

describe("SortIndicator", () => {
  it("should show no active indicators if there is no sort direction", () => {
    render(<SortIndicator onSort={() => {}} />);

    expect(screen.getByRole("button", { name: "▲" })).not.toHaveClass(
      styles.active
    );
    expect(screen.getByRole("button", { name: "▼" })).not.toHaveClass(
      styles.active
    );
  });

  it('shows the correct indicator as active when the sort direction is "asc"', () => {
    render(<SortIndicator onSort={() => {}} direction="asc" />);

    expect(screen.getByRole("button", { name: "▲" })).toHaveClass(
      styles.active
    );
    expect(screen.getByRole("button", { name: "▼" })).not.toHaveClass(
      styles.active
    );
  });

  it('shows the correct indicator as active when the sort direction is "desc"', () => {
    render(<SortIndicator onSort={() => {}} direction="desc" />);

    expect(screen.getByRole("button", { name: "▲" })).not.toHaveClass(
      styles.active
    );
    expect(screen.getByRole("button", { name: "▼" })).toHaveClass(
      styles.active
    );
  });

  it("calls the onSort callback with the selected sort direction", async () => {
    const user = userEvent.setup();

    const onSortSpy = jest.fn();
    render(<SortIndicator onSort={onSortSpy} />);

    await user.click(screen.getByRole("button", { name: "▲" }));
    expect(onSortSpy).toHaveBeenCalledWith("asc");

    await user.click(screen.getByRole("button", { name: "▼" }));
    expect(onSortSpy).toHaveBeenCalledWith("desc");
  });
});
