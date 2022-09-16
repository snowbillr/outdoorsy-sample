import React from "react";
import PropTypes from "prop-types";

import { SortIndicator } from "../../sort_indicator";

import styles from "./styles.module.css";

export const ColumnHeader = ({ label, sortDirection, onSort }) => {
  return (
    <th className={styles.columnHeader}>
      <div className={styles.body}>
        <span className={styles.label}>{label}</span>
        <SortIndicator direction={sortDirection} onSort={onSort} />
      </div>
    </th>
  );
};

ColumnHeader.propTypes = {
  label: PropTypes.string.isRequired,
  sortDirection: PropTypes.oneOf(["asc", "desc"]),
  onSort: PropTypes.func.isRequired,
};
