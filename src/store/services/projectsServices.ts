import { IProject } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  refetchOnMountOrArgChange: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<IProject[], void>({
      query: () => ("projects"),
      transformResponse: (response: { items: IProject[] }) => response.items,
    }),
  })
})

export const { useGetAllProjectsQuery } = projectsApi;