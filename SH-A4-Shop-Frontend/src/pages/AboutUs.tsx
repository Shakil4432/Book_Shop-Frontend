import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Card
        style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
      >
        <Title level={2} style={{ color: "#e7995e" }}>
          About Us
        </Title>
        <Paragraph>
          Welcome to our Stationery Shop! We are dedicated to providing
          top-quality stationery products for students, professionals, and
          artists alike.
        </Paragraph>
        <Paragraph>
          From premium notebooks and pens to art supplies and office essentials,
          we offer everything you need for creativity and productivity. Our
          mission is to make your work and study experience seamless with
          high-quality, affordable stationery.
        </Paragraph>
        <Paragraph>
          Thank you for choosing us as your trusted stationery provider!
        </Paragraph>
      </Card>
    </div>
  );
};

export default AboutUs;
