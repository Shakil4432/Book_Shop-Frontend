import { Button, Table } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearCart, removeFromCart, updateQuantity } from "../redux/features/userManagement/cartSlice";

import { motion } from "framer-motion";
import { message } from "antd";
import { useCreateOrderMutation } from "../redux/features/order/orderApi";
import { selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";
import { useGetSingleUserQuery } from "../redux/features/userManagement/userApi";


const Cart = () => {
  const token = useAppSelector(useCurrentToken)
  const currentUser = useAppSelector(selectCurrentUser)
  const userWithId = useGetSingleUserQuery(currentUser?.email)
  
  
  const dispatch = useAppDispatch();
  const { items, totalPrice, totalQuantity } = useAppSelector((state) => state.cart);
  const totalToFixed = totalPrice.toFixed(2);

  // Order Mutation
  const [createOrder, { isLoading }] = useCreateOrderMutation();

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  // Handle item removal
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Handle place order
  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        userId: userWithId?.data?.data?._id, // Replace with actual logged-in user ID
        products: items.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        totalPrice,
      };

      const result = await createOrder({orderData,token}).unwrap();
      message.success("Order placed successfully!");
      window.location.href = result.data
      dispatch(clearCart()); // Clear cart after placing order
      
    } catch (error) {
      message.error("Failed to place order. Try again!");
    }
  };

  // Columns for Ant Design Table
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => (
        <motion.img
          src={text}
          alt="Product"
          className="w-16 h-16 object-cover rounded-md shadow-md transition-transform duration-200 hover:scale-105"
        />
      ),
    },
    { title: "Name", dataIndex: "name", key: "name", className: "text-lg font-semibold" },
    { title: "Brand", dataIndex: "brand", key: "brand", className: "text-gray-500" },
    { 
      title: "Price", 
      dataIndex: "price", 
      key: "price", 
      render: (price: number) => <span className="text-[#e7995e] font-medium">${price}</span>
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: number, record: any) => (
        <input
          type="number"
          min="1"
          value={text}
          className="w-16 border px-2 py-1 text-center rounded-md focus:ring-[#e7995e] outline-none"
          onChange={(e) => handleQuantityChange(record._id, Number(e.target.value))}
        />
      ),
    },
    { 
      title: "Total", 
      key: "total", 
      render: (record: any) => <span className="text-[#e7995e] font-medium">${(record.price * record.quantity).toFixed(2)}</span> 
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <Button danger className="bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => handleRemoveItem(record._id)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <motion.div 
      className="p-6 bg-[#f4f4f4] min-h-screen flex flex-col items-center" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-[#e7995e]"> Shopping Cart</h1>

      {items.length === 0 ? (
        <motion.p 
          className="text-gray-500 text-lg" 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
        >
          Your cart is empty. Start shopping!
        </motion.p>
      ) : (
        <>
          <motion.div 
            className="w-full max-w-4xl" 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }}
          >
            <Table dataSource={items} columns={columns} rowKey="_id" pagination={false} />
          </motion.div>

          {/* Summary Section */}
          <motion.div 
            className="mt-6 p-6 bg-[#f4e1d2] rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-lg font-semibold text-gray-700">
                Total Items: <span className="text-[#e7995e]">{totalQuantity}</span>
              </h2>
              <h2 className="text-lg font-semibold text-gray-700">
                Total Price: <span className="text-[#e7995e]">${totalToFixed}</span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Button 
                type="primary" 
                danger 
                className="bg-red-500 text-white rounded-md hover:bg-red-600 px-5 py-2"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
              <Button 
                type="primary"
                loading={isLoading}
                className="bg-[#e7995e] text-white rounded-md hover:bg-[#d27d50] px-5 py-2"
                onClick={handlePlaceOrder}
              >
                Place Order
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default Cart;
