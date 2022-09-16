import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { FileUploader } from "./";

describe("FileUploader", () => {
  it("uses the given text as a label", () => {
    render(<FileUploader text="test label" onUpload={() => {}} />);

    expect(screen.getByText("test label")).toBeInTheDocument();
  });

  it("calls the onUpload callback when a file is uploaded", async () => {
    const user = userEvent.setup();

    const uploadSpy = jest.fn();
    render(<FileUploader text="test label" onUpload={uploadSpy} />);

    const input = screen.getByLabelText("test label");
    const file = new File(["hello"], "hello.png", { type: "image/png" });

    await user.upload(input, file);

    expect(uploadSpy).toHaveBeenCalledWith(file);
  });
});
