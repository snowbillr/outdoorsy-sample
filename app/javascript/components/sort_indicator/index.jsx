import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

export const SortIndicator = ({ direction }) => {
  return (
    <div className={styles.sortIndicator}>
      <div
        className={classNames(
          styles.direction,
          direction == "asc" ? styles.active : null
        )}
      >
        ▲
      </div>
      <div
        className={classNames(
          styles.direction,
          direction == "desc" ? styles.active : null
        )}
      >
        ▼
      </div>
    </div>
  );
};

SortIndicator.propTypes = {
  direction: PropTypes.oneOf(["asc", "desc"]),
};
