import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ColumnHeader } from ".";

describe("ColumnHeader", () => {
  it("selects asc as the sort direction when clicking the label if there is no current sort direction", async () => {
    const user = userEvent.setup();

    const onSortSpy = jest.fn();
    render(
      <table>
        <thead>
          <tr>
            <ColumnHeader
              label="label text"
              sortDirection={null}
              onSort={onSortSpy}
            />
          </tr>
        </thead>
      </table>
    );

    await user.click(screen.getByText("label text"));

    expect(onSortSpy).toHaveBeenCalledWith("asc");
  });

  it("reverses the sort direction when clicking the label", async () => {
    const user = userEvent.setup();

    const onSortSpy = jest.fn();
    render(
      <table>
        <thead>
          <tr>
            <ColumnHeader
              label="label text"
              sortDirection="asc"
              onSort={onSortSpy}
            />
          </tr>
        </thead>
      </table>
    );

    await user.click(screen.getByText("label text"));

    expect(onSortSpy).toHaveBeenCalledWith("desc");
  });
});
