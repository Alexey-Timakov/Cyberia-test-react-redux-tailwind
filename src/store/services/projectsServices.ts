import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProject } from "../reducers/projectsReducer";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  refetchOnMountOrArgChange: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.test.cyberia.studio/api/v1/"
  }),
  endpoints: (builder) => ({
    getAllProjects: builder.query<IProject[], void>({
      query: () => ("projects"),
      transformResponse: (response: { items: IProject[] }) => response.items,
    }),
  })
})

export const { useGetAllProjectsQuery } = projectsApi;