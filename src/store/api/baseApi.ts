import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Point to your Next.js proxy route
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  tagTypes: ["Courses", "Sections"], // add more as needed
  endpoints: () => ({}),
  // refetchOnFocus: true, // Refetches data on every tab change
});
