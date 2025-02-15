import { useState } from "react";
import { Table, Tag, Select, Typography } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const { Title } = Typography;
const { Option } = Select;

const OrderHistory = () => {
  const [statusFilter, setStatusFilter] = useState(null);

  const orders = [
    {
      key: "1",
      orderId: "#12345",
      date: "2024-02-16",
      total: "$29.99",
      status: "Delivered",
    },
    {
      key: "2",
      orderId: "#12346",
      date: "2024-02-15",
      total: "$19.99",
      status: "Pending",
    },
    {
      key: "3",
      orderId: "#12347",
      date: "2024-02-14",
      total: "$39.99",
      status: "Cancelled",
    },
  ];

  const filteredOrders = statusFilter
    ? orders.filter((order) => order.status === statusFilter)
    : orders;

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => dayjs(text).format("MMMM D, YYYY"),
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "gray";
        let icon = null;
        if (status === "Delivered") {
          color = "green";
          icon = <CheckCircleOutlined />;
        } else if (status === "Pending") {
          color = "orange";
        } else if (status === "Cancelled") {
          color = "red";
          icon = <CloseCircleOutlined />;
        }
        return (
          <Tag color={color} icon={icon}>
            {status}
          </Tag>
        );
      },
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Title level={2} style={{ color: "#e7995e" }}>
        Order History
      </Title>

      <Select
        placeholder="Filter by Status"
        onChange={(value) => setStatusFilter(value)}
        allowClear
        style={{ marginBottom: "15px", width: "200px" }}
      >
        <Option value="Delivered">Delivered</Option>
        <Option value="Pending">Pending</Option>
        <Option value="Cancelled">Cancelled</Option>
      </Select>

      <Table
        columns={columns}
        dataSource={filteredOrders}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default OrderHistory;
