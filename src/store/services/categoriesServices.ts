import { ICategory } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  refetchOnMountOrArgChange: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<ICategory[], void>({
      query: () => ("project-categories"),
      transformResponse: (response: { items: ICategory[] }) => response.items,
    })
  })
})

export const { useGetAllCategoriesQuery } = categoriesApi;