import { baseApi } from "../../api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    getCart: builder.query({
      query: (token) => ({
        url: "/cart",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

   
    addToCart: builder.mutation({
      query: ({ cartData, token }) => ({
        url: "/cart",
        method: "POST",
        body: cartData,
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      }),
    }),

    
    updateQuantity: builder.mutation({
      query: ({ cartItemId, quantity }) => ({
        url: `/cart/${cartItemId}`,
        method: "PATCH",
        body: { quantity },
      }),
    }),

   
    removeFromCart: builder.mutation({
      query: (cartItemId) => ({
        url: `/cart/remove/${cartItemId}`,
        method: "DELETE",
      }),
    }),

    
    clearCart: builder.mutation({
      query: (email) => ({
        url: `/cart/${email}`,
        method: "DELETE",
      }),
    }),
  }),
});


export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateQuantityMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;
