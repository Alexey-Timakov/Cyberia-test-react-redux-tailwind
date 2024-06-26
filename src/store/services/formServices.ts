import { IFormDTO, IResponseOkDTO } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    sendForm: builder.mutation<IResponseOkDTO, IFormDTO>({
      query: (data) => ({
        method: "POST",
        url: "feedbacks",
        body: { ...data },
        // validateStatus: (response, result) => response.status === 200 && !result.isError
      }),
    }),
  })
})

export const { useSendFormMutation } = formApi;