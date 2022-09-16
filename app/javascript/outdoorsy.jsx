import React, { useReducer } from "react";

import { FileUploader } from "./components/file_uploader";

import { CustomerDataFileParser } from "./services/customer_data_file_parser";
import { reducer } from "./state/reducer";
import { initialState } from "./state/initial_state";
import {
  CUSTOMER_RECORDS_ADDED,
  TABLE_SORT_CHANGED,
} from "./state/action_types";
import Table from "./components/table";
import { getCustomerRecords, getSortDirection } from "./state/selectors";

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
        <Table>
          <thead>
            <tr>
              <Table.ColumnHeader
                label="First Name"
                sortDirection={getSortDirection(state, "firstName")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "firstName", direction },
                  })
                }
              />
              <Table.ColumnHeader
                label="Last Name"
                sortDirection={getSortDirection(state, "lastName")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "lastName", direction },
                  })
                }
              />
              <Table.ColumnHeader
                label="Email"
                sortDirection={getSortDirection(state, "email")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "email", direction },
                  })
                }
              />
              <Table.ColumnHeader
                label="Vehicle Type"
                sortDirection={getSortDirection(state, "vehicleType")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "vehicleType", direction },
                  })
                }
              />
              <Table.ColumnHeader
                label="Vehicle Name"
                sortDirection={getSortDirection(state, "vehicleName")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "vehicleName", direction },
                  })
                }
              />
              <Table.ColumnHeader
                label="Vehicle Length"
                sortDirection={getSortDirection(state, "vehicleLength")}
                onSort={(direction) =>
                  dispatch({
                    type: TABLE_SORT_CHANGED,
                    payload: { field: "vehicleLength", direction },
                  })
                }
              />
            </tr>
          </thead>
          <tbody>
            {getCustomerRecords(state).map((record, index) => {
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
        </Table>
      </section>
    </main>
  );
};
