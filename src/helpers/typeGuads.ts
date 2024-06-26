import { IResponseErrorDTO } from "@/models"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react"

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error !== null && "status" in error
}

export function isErrorDTO(error: unknown): error is IResponseErrorDTO {
  const check: boolean =
    typeof error === "object" &&
    error !== null &&
    "message" in error
    && "errors" in error
    && typeof error.errors === "object"
  return check
}