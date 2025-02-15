import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: (users) => ({
        url: "/auth/users",
        method: "GET",
        body: users,
      }),
    }),
  }),
});

export const { useGetAllUserQuery } = userApi;
