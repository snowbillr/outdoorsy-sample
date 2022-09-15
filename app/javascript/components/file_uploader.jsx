import React from "react";
import PropTypes from "prop-types";

import styles from "./file_uploader.module.css";

export const FileUploader = ({ text, onUpload }) => {
  const onChange = (e) => {
    const file = e.target.files[0];
    onUpload(file);
    e.target.value = null;
  };

  return (
    <div>
      <label htmlFor="csv-file" className={styles.test}>
        {text}
      </label>
      .
      <input type="file" id="csv-file" name="csv-file" onChange={onChange} />
    </div>
  );
};

FileUploader.propTypes = {
  text: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};
