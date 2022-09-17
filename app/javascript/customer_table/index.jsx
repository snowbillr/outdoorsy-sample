import React from "react";
import PropTypes from "prop-types";

import Table from "../components/table";
import { statePropType } from "../state/state";
import { getCustomerRecords, getSortDirection } from "../state/selectors";
import { TABLE_SORT_CHANGED } from "../state/action_types";

export const CustomerTable = ({ dispatch, state }) => {
  const customerRecords = getCustomerRecords(state);

  return (
    <div>
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
          {customerRecords.map((record, index) => {
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
      {customerRecords.length === 0 ? (
        <div>No customer data! Add data by uploading a customer data file.</div>
      ) : null}
    </div>
  );
};

CustomerTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: statePropType,
};
