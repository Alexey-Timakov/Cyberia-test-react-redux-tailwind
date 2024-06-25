import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFormDTO {
  name: string;
  phone?: string;
  email?: string;
  message?: string;
}

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    sendForm: builder.mutation<{ message: string }, IFormDTO>({
      query: (data) => ({
        url: "feedbacks",
        method: "POST",
        body: { ...data }
      }),
    }),
  })
})

export const { useSendFormMutation } = formApi;