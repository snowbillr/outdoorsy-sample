import React from "react";
import PropTypes from "prop-types";

import Table from "../components/table";
import { statePropType } from "../state/state";
import { getCustomerRecords, getSortDirection } from "../state/selectors";
import { TABLE_SORT_CHANGED } from "../state/action_types";

import styles from "./styles.module.css";
import { Icon } from "../components/icon";

export const CustomerTable = ({ dispatch, state }) => {
  const customerRecords = getCustomerRecords(state);
  const isEmpty = customerRecords.length === 0;

  return (
    <div className={styles.customerTable}>
      <Table>
        <thead>
          <tr>
            <Table.ColumnHeader
              label="Full Name"
              sortDirection={getSortDirection(state, "fullName")}
              onSort={(direction) =>
                dispatch({
                  type: TABLE_SORT_CHANGED,
                  payload: { field: "fullName", direction },
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
              label="Vehicle Length (feet)"
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
              <tr key={`record-${record.fullName}-${index}}`}>
                <td>{record.fullName}</td>
                <td>{record.email}</td>
                <td>{record.vehicleType}</td>
                <td>{record.vehicleName}</td>
                <td>{record.vehicleLength}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {isEmpty ? (
        <div className={styles.emptyStateText}>
          <Icon name="error" />
          No customer data! Add data by uploading a customer data file.
        </div>
      ) : null}
    </div>
  );
};

CustomerTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  state: statePropType,
};
