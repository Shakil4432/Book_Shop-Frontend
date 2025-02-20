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
          Welcome to our Book Shop! We are passionate about books and committed
          to bringing you a curated collection of the finest reads. Our mission
          is to provide high-quality books and an exceptional shopping
          experience for book lovers everywhere.
        </Paragraph>
        <Paragraph>
          Whether you’re looking for bestsellers, classics, or hidden gems, we
          have something for everyone. Thank you for choosing us as your trusted
          book source!
        </Paragraph>
      </Card>
    </div>
  );
};

export default AboutUs;
