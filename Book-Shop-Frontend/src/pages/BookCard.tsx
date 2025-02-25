import { Card, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { TBook } from "../types/TBook";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/userManagement/cartSlice";

const { Title } = Typography;

const BookCard = ({ book }: { book: TBook }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(
          addToCart({
            _id: book._id,
            name: book.name,
            brand: book.brand,
            price: book.price,
            model: book.model,
            stock: book.stock,
            image: book.image,
            quantity: book.quantity,
          })
        );

        toast.success(`${book.name} added to cart!`, {
          position: "top-right",
          duration: 3000,
        });

        console.log(`book ${book.name} added`);
    };

    return (
      <Col key={book._id} xs={24} sm={12} md={8} lg={6}>
        <Link to={`/book/${book._id}`}>
          <Card
            hoverable
            cover={
              <img
                alt={book.name}
                src={book.image || "https://via.placeholder.com/200"}
                style={{
                  height: "280px",
                  objectFit: "cover",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
            }
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease-in-out",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
            bodyStyle={{ padding: "20px" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Title level={4} style={{ color: "#e7995e", marginBottom: "10px" }}>
              {book.name}
            </Title>
            <p style={{ fontSize: "16px", fontWeight: "500", color: "#444" }}>
              <strong>Brand:</strong> {book.brand}
            </p>
            <p style={{ fontSize: "16px", fontWeight: "500", color: "#444" }}>
              <strong>Price:</strong> ${book.price}
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              <strong>Stock:</strong> {book.stock}
            </p>

            {/* Add to Cart Button */}
            <Button
              disabled= {book.stock === 0 ? true : false}
              type="primary"
              style={{
                backgroundColor: "#e7995e",
                borderColor: "#e7995e",
                width: "100%",
                marginTop: "10px",
                fontSize: "16px",
              }}
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
            >
              Add to Cart
            </Button>
          </Card>
        </Link>
      </Col>
    );
};

export default BookCard;
