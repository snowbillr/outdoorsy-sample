import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

export const SortIndicator = ({ direction, onSort }) => {
  const onSortIndicatorClick = (e, direction) => {
    e.preventDefault();
    e.stopPropagation();
    onSort(direction);
  };

  return (
    <div className={styles.sortIndicator}>
      <button
        className={classNames(
          styles.direction,
          direction == "asc" ? styles.active : null
        )}
        onClick={(e) => onSortIndicatorClick(e, "asc")}
      >
        ▲
      </button>
      <button
        className={classNames(
          styles.direction,
          direction == "desc" ? styles.active : null
        )}
        onClick={(e) => onSortIndicatorClick(e, "desc")}
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
