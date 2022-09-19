import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

export const IconRotator = ({ children }) => {
  const icons = children.length ? children : [children];
  const [iconIndex, setIconIndex] = useState(0);
  const [isTransitioning, setTransitioning] = useState(false);

  const nextIndex = (iconIndex + 1) % icons.length;

  const currentIcon = icons[iconIndex];
  const nextIcon = icons[nextIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true);

      setTimeout(() => {
        setIconIndex((i) => (i + 1) % icons.length);
        setTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [icons]);

  return (
    <div className={styles.iconRotator}>
      <div
        className={classNames(styles.currentIcon, {
          [styles.out]: isTransitioning,
        })}
      >
        {currentIcon}
      </div>
      <div
        className={classNames(styles.nextIcon, {
          [styles.in]: isTransitioning,
        })}
      >
        {nextIcon}
      </div>
    </div>
  );
};

IconRotator.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
