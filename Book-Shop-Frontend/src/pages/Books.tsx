import { Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://via.placeholder.com/200x300.png?text=The+Great+Gatsby",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://via.placeholder.com/200x300.png?text=To+Kill+a+Mockingbird",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    cover: "https://via.placeholder.com/200x300.png?text=1984",
  },
];

const Books = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Title level={2} style={{ color: "#e7995e" }}>
        Books
      </Title>
      <Row gutter={[16, 16]}>
        {books.map((book) => (
          <Col key={book.id} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt={book.title} src={book.cover} />}
              style={{ textAlign: "center" }}
            >
              <Title level={4}>{book.title}</Title>
              <p>{book.author}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Books;
