import { Card, Typography, Form, Input, Button } from "antd";

const { Title } = Typography;

const Checkout = () => {
  const onFinish = (values: string) => {
    console.log("Order Submitted: ", values);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Card>
        <Title level={2} style={{ color: "#e7995e", textAlign: "center" }}>
          Checkout
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter your address" />
          </Form.Item>
          <Form.Item
            label="Payment Method"
            name="payment"
            rules={[{ required: true, message: "Please enter payment method" }]}
          >
            <Input placeholder="e.g., Credit Card, PayPal" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "100%",
                backgroundColor: "#e7995e",
                borderColor: "#e7995e",
              }}
            >
              Place Order
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Checkout;
