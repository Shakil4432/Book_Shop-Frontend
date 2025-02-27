import  { useState } from "react";
import { Typography, Row, Pagination, Spin, Empty, Input, Select } from "antd";
import { useGetAllUsersQuery } from "../../redux/features/userManagement/userApi";

import UserCard from "./UserCard";
import { TUserCard } from "../../types/TUserCard";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";



const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const Users = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const currentUser = useAppSelector(selectCurrentUser)

  
  const { data, isLoading, isError } = useGetAllUsersQuery({
    role: filterRole || undefined,
    search: searchTerm || undefined,
    page,
    limit: 4,
  });

  

  const users: TUserCard[] = data?.data?.result || [];
  const metaData = data?.data?.meta;

  
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setPage(1);
  };

  
  const handleFilterChange = (value: string) => {
    setFilterRole(value);
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

  const uniqueRoles = [...new Set(users.map((user) => user.email))];

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
         Users
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
          placeholder="Search users..."
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
          placeholder="Filter by Role"
          size="large"
          onChange={handleFilterChange}
          allowClear
          style={{ width: "180px" }}
        >
          {uniqueRoles.map((role, index) => (
            <Option key={index} value={role}>
              {role}
            </Option>
          ))}
        </Select>
      </div>

      {users.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Empty description="No users found" />
        </div>
      ) : (
        <>
          <Row gutter={[24, 24]} justify="center">
            {users.map((user: TUserCard, index: number) => (
              <UserCard isAdmin={currentUser?.role === "admin" ? true : false} user={user} key={index} />
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

export default Users;
