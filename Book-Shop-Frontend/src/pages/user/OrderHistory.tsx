import { Table, Card, Typography, Spin, Tag } from "antd";
import { useGetOrdersQuery } from "../../redux/features/order/orderApi";


const { Title } = Typography;

const OrderPage = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery(undefined);

  const columns = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          color={
            status === "pending" ? "orange" :
            status === "shipped" ? "blue" :
            status === "paid" ? "green" :
            status === "completed" ? "purple" : "red"
          }
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
  ];

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10">
        <Typography.Text type="danger">Error fetching orders. Please try again later.</Typography.Text>
      </div>
    );

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <Title level={2} className="text-center text-blue-600">Your Orders</Title>
      <Card className="shadow-lg bg-white rounded-lg overflow-hidden">
        <Table
          columns={columns}
          dataSource={orders?.data || []}
          rowKey="_id"
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default OrderPage;
