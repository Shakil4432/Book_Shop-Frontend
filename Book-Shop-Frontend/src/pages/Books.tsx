import { useState } from "react";
import {

  Typography,
  Row,

  Pagination,
  Spin,
  Input,
  Select,
  Empty,
} from "antd";
import { useGetAllBooksQuery } from "../redux/features/bookManagement/bookApi";
import { TBook } from "../types/TBook";

import BookCard from "./BookCard";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const Books = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  const { data, isLoading, isError} = useGetAllBooksQuery({
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
             <BookCard book={book} key={index}></BookCard>
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
