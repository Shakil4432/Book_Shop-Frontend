import { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { sidebarItemsGenerator } from "../../utils/sidebarItemGenerator";
import { adminPaths } from "../../routes/adminRoutes";
import { Navigate, Outlet } from "react-router-dom";
import { userDashboardPath } from "../../routes/userRoutes";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/features/auth/authSlice";

type TUser = {
  email: string;
  role: "admin" | "user";
};

const { Sider } = Layout;

const Dashboard = () => {
  const user = useAppSelector(currentUser) as TUser | null;

  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  console.log(user);
  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };

  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userDashboardPath);
      break;

    default:
      break;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        style={{ backgroundColor: "#e7995e" }}
      >
        <div
          className="logo text-2xl"
          style={{ padding: "16px", fontWeight: "bold" }}
        >
          BookView
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#e7995e", color: "#2c3e50" }}
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <div className="hamburger-container lg:hidden">
          <Button
            type="primary"
            onClick={toggleCollapsed}
            style={{
              margin: "16px",
              marginLeft: "auto",
              display: "block",
            }}
            className="hamburger-icon"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            height: "100vh",
          }}
        >
          <Outlet></Outlet>
        </div>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
