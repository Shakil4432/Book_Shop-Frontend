import React from "react";
import { Card, Typography, Descriptions, Button, Avatar } from "antd";

const { Title } = Typography;

const AccountDetails = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
    joined: "January 10, 2023",
    avatar: "https://via.placeholder.com/150",
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Title level={2} style={{ color: "#e7995e" }}>
        Account Details
      </Title>

      <Card bordered={false} style={{ maxWidth: 600, textAlign: "center" }}>
        <Avatar src={user.avatar} size={100} style={{ marginBottom: "15px" }} />
        <Descriptions title="User Information" column={1}>
          <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
          <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
          <Descriptions.Item label="Joined">{user.joined}</Descriptions.Item>
        </Descriptions>
        <Button
          type="primary"
          style={{
            backgroundColor: "#e7995e",
            borderColor: "#e7995e",
            marginTop: "10px",
          }}
        >
          Edit Details
        </Button>
      </Card>
    </div>
  );
};

export default AccountDetails;
