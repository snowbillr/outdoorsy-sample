import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export const Icon = ({ name }) => {
  return <span className={styles.icon}>{name}</span>;
};

Icon.propTypes = {
  name: PropTypes.oneOf(["error"]),
};
