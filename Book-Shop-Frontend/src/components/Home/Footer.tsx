import { Layout } from "antd";
import { motion } from "framer-motion";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const socialLinks = [
  { icon: <FacebookOutlined />, link: "https://facebook.com" },
  { icon: <TwitterOutlined />, link: "https://twitter.com" },
  { icon: <InstagramOutlined />, link: "https://instagram.com" },
  { icon: <GithubOutlined />, link: "https://github.com" },
];

const FooterComponent = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#f4e1d2",
        padding: "40px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="max-w-6xl h-[40vh] mx-auto text-center mt-24">
        <h2 className="text-4xl font-semibold" style={{ color: "#e7995e" }}>
          BookView
        </h2>
        <p className="text-gray-700 mt-2">
          Your one-stop shop for amazing books!
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-2xl"
              whileHover={{ scale: 1.2, color: "#e7995e" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-gray-600 mt-6">
          © {new Date().getFullYear()} BookView. All rights reserved.
        </p>
      </div>
    </Footer>
  );
};

export default FooterComponent;
