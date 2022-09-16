import React, { useReducer } from "react";

import { FileUploader } from "./components/file_uploader";
import { SortIndicator } from "./components/sort_indicator";

import { CustomerDataFileParser } from "./services/customer_data_file_parser";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initial_state";
import { CUSTOMER_RECORDS_ADDED } from "./state/action_types";

export const Outdoorsy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onUpload = async (file) => {
    const parser = new CustomerDataFileParser(file);

    try {
      const records = await parser.parse();

      dispatch({ type: CUSTOMER_RECORDS_ADDED, payload: records });
    } catch {
      alert(
        "Something went wrong parsing the file. Please fix the file and try again."
      );
    }
  };

  return (
    <main>
      <section>
        Drag and drop a file onto the customer table or{" "}
        <FileUploader text="upload a file" onUpload={onUpload} /> to add
        customer data.
      </section>
      <section>
        <table>
          <thead>
            <tr>
              <th>
                First Name <SortIndicator direction="desc" />
              </th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Vehicle Type</th>
              <th>Vehicle Name</th>
              <th>Vehicle Length (feet)</th>
            </tr>
          </thead>
          <tbody>
            {state.customerRecords.map((record, index) => {
              return (
                <tr
                  key={`record-${record.firstName}-${record.lastName}-${index}}`}
                >
                  <td>{record.firstName}</td>
                  <td>{record.lastName}</td>
                  <td>{record.email}</td>
                  <td>{record.vehicleType}</td>
                  <td>{record.vehicleName}</td>
                  <td>{record.vehicleLength}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
};
