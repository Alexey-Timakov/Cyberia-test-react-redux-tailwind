import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import styles from "./ErrorMessage.module.scss";
import { SerializedError } from "@reduxjs/toolkit/react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

interface IErrorMessage extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  error: FetchBaseQueryError | SerializedError;
}

export const ErrorMessage = ({ error }: IErrorMessage): ReactElement<HTMLParagraphElement> => {
  let errorMessage = "";

  if ("status" in error) {

    errorMessage = "error" in error
      ? error.status + " / " + error.error
      : error.status + " / " + JSON.stringify(error.data)
  }
  return (
    <>
      <p className={styles["error-title"]}>Произошла ошибка при получении данных:</p>
      <p className={styles.error}>{errorMessage}</p>
    </>
  )
}