import { useState } from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Pagination,
  Spin,
  Input,
  Select,
  Empty,
} from "antd";
import { useGetAllBooksQuery } from "../redux/features/bookManagement/bookApi";
import { TBook } from "../types/TBook";
import { Link } from "react-router-dom";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const Books = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  const { data, isLoading, isError } = useGetAllBooksQuery({
    brand: filterBrand || undefined,
    search: searchTerm || undefined,
    sort: sortBy || undefined,
    page,
    limit: 8,
  });

  const books: TBook[] = data?.data?.result || [];
  const metaData = data?.data?.meta;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setPage(1);
  };

  const handleFilterChange = (value: string) => {
    setFilterBrand(value);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Empty description="No data available" />
      </div>
    );
  }

  const sortedBooks = [...books];

  if (sortBy === "price-asc") {
    sortedBooks.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedBooks.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "createdAt-asc") {
    sortedBooks.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  } else if (sortBy === "createdAt-desc") {
    sortedBooks.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  const uniqueBrands = [...new Set(books.map((book) => book.brand))];

  return (
    <div style={{ padding: "40px", minHeight: "100vh" }}>
      <Title
        level={2}
        style={{
          color: "#e7995e",
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        Explore Our Books
      </Title>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Search
          placeholder="Search books..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          style={{
            width: "250px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />

        <Select
          placeholder="Sort by Price"
          size="large"
          onChange={handleSortChange}
          allowClear
          style={{ width: "180px" }}
        >
          <Option value="price-asc">Price: Low to High</Option>
          <Option value="price-desc">Price: High to Low</Option>
        </Select>

        <Select
          placeholder="Filter by Brand"
          size="large"
          onChange={handleFilterChange}
          allowClear
          style={{ width: "180px" }}
        >
          {uniqueBrands.map((brand, index) => (
            <Option key={index} value={brand}>
              {brand}
            </Option>
          ))}
        </Select>
      </div>

      {sortedBooks.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Empty description="No books found" />
        </div>
      ) : (
        <>
          <Row gutter={[24, 24]} justify="center">
            {sortedBooks.map((book: TBook, index: number) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
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
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    <Title
                      level={4}
                      style={{ color: "#e7995e", marginBottom: "10px" }}
                    >
                      {book.name}
                    </Title>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#444",
                      }}
                    >
                      <strong>Brand:</strong> {book.brand}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#444",
                      }}
                    >
                      <strong>Price:</strong> ${book.price}
                    </p>
                    <p style={{ fontSize: "14px", color: "#666" }}>
                      <strong>Stock:</strong> {book.stock}
                    </p>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>

          <div
            className="flex item-center justify-center"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <Pagination
              current={page}
              pageSize={metaData?.limit}
              total={metaData?.total}
              onChange={(value) => setPage(value)}
              showSizeChanger={false}
              showQuickJumper={false}
              hideOnSinglePage={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Books;
