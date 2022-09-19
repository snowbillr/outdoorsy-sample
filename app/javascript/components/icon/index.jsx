import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import classNames from "classnames";

export const Icon = ({ name, color }) => {
  return (
    <span
      className={classNames(styles.icon, {
        [styles.colorText]: color === "text",
        [styles.colorAccent]: color === "accent",
      })}
    >
      {name}
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["text", "accent"]),
};

Icon.defaultProps = {
  color: "text",
};
