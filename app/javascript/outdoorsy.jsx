import React, { useReducer } from "react";
import { FileUploader } from "./components/file_uploader";

import { CustomerDataFileParser } from "./services/customer_data_file_parser";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initial_state";
import { CUSTOMER_RECORDS_ADDED } from "./state/action_types";

export const Outdoorsy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onUpload = async (file) => {
    const parser = new CustomerDataFileParser(file);
    const records = await parser.parse();

    dispatch({ type: CUSTOMER_RECORDS_ADDED, payload: records });
  };

  return (
    <main>
      <section>
        Drag and drop a file onto the customer table or{" "}
        <FileUploader text="upload a file" onUpload={onUpload} /> to add
        customer data.
      </section>
      <section>{state.customerRecords.map((cr) => cr.firstName)}</section>
    </main>
  );
};
