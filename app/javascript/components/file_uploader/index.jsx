import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export const FileUploader = ({ text, onUpload }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    onUpload(file);
    e.target.value = "";
  };

  return (
    <>
      <label htmlFor="csv-file" className={styles.label}>
        {text}
      </label>
      <input
        type="file"
        id="csv-file"
        name="csv-file"
        onChange={onChange}
        className={styles.input}
      />
    </>
  );
};

FileUploader.propTypes = {
  text: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};
