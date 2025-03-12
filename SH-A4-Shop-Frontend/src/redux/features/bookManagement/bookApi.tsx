import { baseApi } from "../../api/baseApi";

const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: ({ token, data }) => ({
        url: "/products/create-book",
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // Do NOT set Content-Type; let the browser handle it
      }),
    }),

    getAllBooks: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(args)) {
          if (value) {
            params.append(key, value as string);
          }
        }
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },

      providesTags: [{ type: "Book", id: "LIST" }],
    }),

    getBookById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: (id) => [{ type: "Book", id }],
    }),

    updateBook: builder.mutation({
      query: ({ id, token, ...data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),

      invalidatesTags: ({ id }) => [
        { type: "Book", id: "LIST" },
        { type: "Book", id },
      ],
    }),

    deleteBook: builder.mutation({
      query: ({ id, token }) => ({
        url: `/products/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),

      invalidatesTags: [{ type: "Book", id: "LIST" }],
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
