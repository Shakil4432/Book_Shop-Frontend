import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/user",
    }),
    updateUserProfile: builder.mutation({
      query: (userData) => ({
        url: "/user",
        method: "PUT",
        body: userData,
      }),
    }),
    getSingleUser: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation({
      query: (email) => ({
        url: `/user/${email}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useGetSingleUserQuery,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
} = userApi;
