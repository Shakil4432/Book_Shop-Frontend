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
    }),
    getOrders: builder.query({
      query: () =>({
        url: "/order",
        method:"GET",
      }),
    }),
    verifyOrder: builder.query({
      query: ({order_id,token}) => ({
        url: "/order/verify",
        params: { order_id },
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
} = orderApi;