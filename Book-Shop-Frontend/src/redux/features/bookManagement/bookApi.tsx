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
    getAllBooks: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
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
