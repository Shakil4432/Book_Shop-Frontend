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
      query: (args) => {
        const params = new URLSearchParams();
    
        // Dynamically append each key-value pair in args to URLSearchParams
        for (const [key, value] of Object.entries(args)) {
          if (value) {
            params.append(key, value as string);
          }
        }
    
        console.log(params.toString()); // Check the query params
    
        return {
          url: "/products",
          method: "GET",
          params, // Attach the URLSearchParams as query params
        };
      },
    }),
    
  }),
});

export const { useAddBookMutation, useGetAllBooksQuery } = bookApi;
