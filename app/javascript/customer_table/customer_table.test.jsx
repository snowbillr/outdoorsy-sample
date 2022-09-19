import React from "react";
import { render, screen } from "@testing-library/react";

import { CustomerTable } from ".";

describe("CustomerTable", () => {
  it("displays an empty state when there is no customer data", () => {
    const state = {
      customerRecords: [],
      sortOptions: {
        field: null,
        direction: "asc",
      },
    };

    render(<CustomerTable dispatch={() => {}} state={state} />);

    expect(
      screen.getByText(
        "No customer data! Add data by uploading a customer data file."
      )
    ).toBeInTheDocument();
  });

  it("displays customer data when it is present", () => {
    const state = {
      customerRecords: [
        {
          fullName: "Bill Reed",
          email: "bill@bill.bill",
          vehicleName: "Unrealistic Expectations",
          vehicleType: "megayacht",
          vehicleLength: 300,
        },
      ],
      sortOptions: {
        field: null,
        direction: "asc",
      },
    };

    render(<CustomerTable dispatch={() => {}} state={state} />);

    expect(screen.getByText("Bill Reed")).toBeInTheDocument();
    expect(screen.getByText("bill@bill.bill")).toBeInTheDocument();
    expect(screen.getByText("megayacht")).toBeInTheDocument();
    expect(screen.getByText("Unrealistic Expectations")).toBeInTheDocument();
    expect(screen.getByText("300")).toBeInTheDocument();
  });
});
