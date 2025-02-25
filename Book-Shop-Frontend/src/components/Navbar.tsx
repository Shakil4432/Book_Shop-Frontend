import { Button, Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectCurrentUser } from "../redux/features/auth/authSlice";
import WebsiteLogo from "./Home/WebLogo";
import { selectCartItems } from "../redux/features/userManagement/cartSlice";


const { Header, Content } = Layout;

const routesItems = [
  { key: "Home", label: <NavLink to={"/"}>Home</NavLink> },
  { key: "Book", label: <NavLink to={"/books"}>Book</NavLink> },
  { key: "Dashboard", label: <NavLink to={"/dashboard"}>Dashboard</NavLink> },
  { key: "About Us", label: <NavLink to={"/about-us"}>About Us</NavLink> },
];

const items = routesItems.map((item) => ({ key: item.key, label: item.label }));

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const cartItems = useAppSelector(selectCartItems); // Get cart items from Redux store

  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total number of items

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout className="h-[100vh]">
      <Header
        className="sticky top-0 z-10 w-full flex items-center justify-center"
        style={{ backgroundColor: "white" }}
      >
        <WebsiteLogo />
        <Menu mode="horizontal" items={items} className="flex justify-center flex-1 min-w-0 bg-transparent" />
        
        {/* Cart Icon with Badge */}
        <Link to="/cart">
          <Badge style={{marginRight: "20px" }} count={totalCartItems} showZero>
            <ShoppingCartOutlined style={{ fontSize: "1.5rem", color: "#e7995e", marginRight: "20px" }} />
          </Badge>
        </Link>

        {/* Login/Logout Button */}
        {user ? (
          <Button type="primary" style={{ backgroundColor: "#e7995e" }} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button type="primary" style={{ backgroundColor: "#e7995e" }}>
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
