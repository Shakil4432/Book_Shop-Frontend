import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-shop-backend-cyan.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["Book","User","Order"], // ✅ Add this to enable cache invalidation
  endpoints: () => ({}),
});
