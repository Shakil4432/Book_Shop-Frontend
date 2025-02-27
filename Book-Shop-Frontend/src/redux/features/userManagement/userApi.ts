import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(args)) {
          if (value) {
            params.append(key, value as string);
          }
        }
        return {
          url: "/user",
          method: "GET",
          params,
        };
      },
      providesTags: [{ type: "User", id: "LIST" }],
    }),

    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "User", id }],
    }),

    updateUser: builder.mutation({
      query: ({ id, token, ...data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ({ id }) => [
        { type: "User", id: "LIST" },
        { type: "User", id },
      ],
    }),

    deleteUser: builder.mutation({
      query: ({ id, token }) => ({
        url: `/user/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
