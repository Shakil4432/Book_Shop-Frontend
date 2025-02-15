import { Table, Avatar, Typography } from "antd";

const { Title } = Typography;

const users = [
  {
    key: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/50",
  },
  {
    key: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    avatar: "https://via.placeholder.com/50",
  },
  {
    key: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    avatar: "https://via.placeholder.com/50",
  },
];

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (avatar: string) => <Avatar src={avatar} size={50} />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const Users = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <Title level={2} style={{ color: "#e7995e" }}>
        Users
      </Title>
      <Table dataSource={users} columns={columns} pagination={false} />
    </div>
  );
};

export default Users;
