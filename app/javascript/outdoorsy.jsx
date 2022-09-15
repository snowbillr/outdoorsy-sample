import React from "react";
import { FileUploader } from "./components/file_uploader";

import { CustomerDataFileParser } from "./services/customer_data_file_parser";

export const Outdoorsy = () => {
  const onUpload = async (file) => {
    const parser = new CustomerDataFileParser(file);
    console.log(await parser.parse());
  };

  return (
    <main>
      <section>
        Drag and drop a file onto the customer table or{" "}
        <FileUploader text="upload a file" onUpload={onUpload} /> to add
        customer data.
      </section>
      <section>customer display</section>
    </main>
  );
};
