import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export const Table = ({ children }) => {
  return <table className={styles.table}>{children}</table>;
};

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf([PropTypes.node]),
  ]).isRequired,
};
