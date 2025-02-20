import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/products/create-book",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddBookMutation } = bookApi;
