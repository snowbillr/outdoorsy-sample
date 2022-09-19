import React, { useReducer, useState } from "react";

import { FileUploader } from "./components/file_uploader";
import { Icon } from "./components/icon";
import { IconRotator } from "./components/icon_rotator";
import { CustomerTable } from "./customer_table";

import { CustomerDataFileParser } from "./services/customer_data_file_parser";
import { reducer } from "./state/reducer";
import { initialState } from "./state/state";
import { CUSTOMER_RECORDS_ADDED } from "./state/action_types";

import styles from "./outdoorsy.module.css";
import classNames from "classnames";

export const Outdoorsy = () => {
  const [isDragging, setDragging] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onUpload = async (file) => {
    const parser = new CustomerDataFileParser(file);

    try {
      const records = await parser.parse();

      dispatch({ type: CUSTOMER_RECORDS_ADDED, payload: records });
    } catch {
      alert(
        "Something went wrong parsing the file. Please fix the file and try again."
      );
    }
  };

  const onFileDrag = (e) => {
    e.preventDefault();

    setDragging(true);
  };

  const onFileDrop = (e) => {
    e.preventDefault();

    [...e.dataTransfer.items].forEach((item) => {
      onUpload(item.getAsFile());
    });
    setDragging(false);
  };

  return (
    <>
      <header className={styles.header}>
        <span className={styles.headerText}>Outdoor</span>
        <span className={styles.headerLogo}>
          <IconRotator>
            <Icon name="sunny" color="accent" />
            <Icon name="beach_access" color="accent" />
            <Icon name="kitesurfing" color="accent" />
            <Icon name="pool" color="accent" />
            <Icon name="nature" color="accent" />
            <Icon name="outdoor_grill" color="accent" />
            <Icon name="hiking" color="accent" />
            <Icon name="downhill_skiing" color="accent" />
            <Icon name="scuba_diving" color="accent" />
            <Icon name="snowboarding" color="accent" />
            <Icon name="paragliding" color="accent" />
            <Icon name="sailing" color="accent" />
          </IconRotator>
        </span>
        <span className={styles.headerText}>sy</span>
      </header>
      <main className={styles.main}>
        <section>
          <div className={styles.breadcrumbs}>
            Admin /{" "}
            <a className={styles.breadcrumbLink} href="/">
              Customers
            </a>
          </div>
          <h2 className={styles.title}>Customers</h2>
          <div className={styles.instructions}>
            Drag and drop a file onto the customer table or{" "}
            <FileUploader text="upload a file" onUpload={onUpload} /> to add
            customer data.
          </div>
        </section>
        <section
          onDrop={onFileDrop}
          onDragOver={onFileDrag}
          onDragLeave={() => setDragging(false)}
          className={classNames({
            [styles.fileIsDragging]: isDragging,
          })}
        >
          <CustomerTable dispatch={dispatch} state={state} />
        </section>
      </main>
    </>
  );
};
