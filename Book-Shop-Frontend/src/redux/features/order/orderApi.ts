import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: ({orderData,token}) => ({
        url: "/order",
        method: "POST",
        body: orderData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: [{ type: "Order", id: "LIST" }],
    }),
    getOrders: builder.query({
      query: (email) =>({
        url: `/order/${email}`,
        method:"GET",
      }),
      providesTags: [{ type: "Order", id: "LIST" }],
    }),
    verifyOrder: builder.query({
      query: ({ order_id, token }) => ({
        url: `/order/verify`,
        params: { order_id },
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: [{ type: "Order", id: "LIST" }],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
} = orderApi;