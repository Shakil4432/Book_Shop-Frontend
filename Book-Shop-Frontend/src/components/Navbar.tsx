import { Button, Layout, Menu } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { currentUser, logout } from "../redux/features/auth/authSlice";
import WebsiteLogo from "./Home/WebLogo";

const { Header, Content } = Layout;

const routesItems = [
  {
    key: "Home",
    label: (
      <NavLink to={"/"} className="text-[#2c3e50] hover:text-[#DCB89C]">
        Home
      </NavLink>
    ),
  },
  {
    key: "Book",
    label: (
      <NavLink to={"/books"} className="text-[#2c3e50] hover:text-[#DCB89C]">
        Book
      </NavLink>
    ),
  },
  {
    key: "Dashboard",
    label: (
      <NavLink
        to={"/dashboard"}
        className="text-[#2c3e50] hover:text-[#DCB89C]"
      >
        Dashboard
      </NavLink>
    ),
  },
  {
    key: "About Us",
    label: (
      <NavLink to={"/about-us"} className="text-[#2c3e50] hover:text-[#DCB89C]">
        About Us
      </NavLink>
    ),
  },
];

const items = routesItems.map((item) => ({
  key: item.key,
  label: item.label,
}));

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Layout className="h-[100vh]">
      <Header
        className="sticky top-0 z-10 w-full flex items-center justify-center"
        style={{ backgroundColor: "white" }}
      >
        <WebsiteLogo></WebsiteLogo>
        <Menu
          mode="horizontal"
          items={items}
          className="flex justify-center flex-1 min-w-0 bg-transparent"
          style={{
            backgroundColor: "transparent",
          }}
          theme="light"
        />
        {user ? (
          <Button
            type="primary"
            style={{ backgroundColor: "#e7995e", color: "#2c3e50" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            type="primary"
            style={{ backgroundColor: "#e7995e", color: "#2c3e50" }}
          >
            <Link to="/login">Login</Link>
          </Button>
        )}
      </Header>
      <Content className="px-12">
        <div className="p-6 min-h-[380px]">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default Navbar;
