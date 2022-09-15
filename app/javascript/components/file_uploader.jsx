import React from "react";
import PropTypes from "prop-types";

export const FileUploader = ({ text, onUpload }) => {
  return (
    <div>
      <label htmlFor="csv-file">{text}</label>.
      <input
        type="file"
        id="csv-file"
        name="csv-file"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
};

FileUploader.propTypes = {
  text: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired,
};
