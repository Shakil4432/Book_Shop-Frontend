import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://stationary-a4-shop-backend-six.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["Book", "User", "Order"],
  endpoints: () => ({}),
});
