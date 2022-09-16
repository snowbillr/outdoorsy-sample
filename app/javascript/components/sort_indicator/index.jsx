import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

export const SortIndicator = ({ direction, onSort }) => {
  return (
    <div className={styles.sortIndicator}>
      <button
        className={classNames(
          styles.direction,
          direction == "asc" ? styles.active : null
        )}
        onClick={() => onSort("asc")}
      >
        ▲
      </button>
      <button
        className={classNames(
          styles.direction,
          direction == "desc" ? styles.active : null
        )}
        onClick={() => onSort("desc")}
      >
        ▼
      </button>
    </div>
  );
};

SortIndicator.propTypes = {
  direction: PropTypes.oneOf(["asc", "desc"]),
  onSort: PropTypes.func.isRequired,
};
