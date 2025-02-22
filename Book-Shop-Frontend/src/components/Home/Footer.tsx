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
       
      }}
    >
      <div className="max-w-6xl  h-auto mx-auto text-center mt-24">
        <h2 className="text-4xl font-semibold" style={{ color: "#e7995e" }}>
          BookView
        </h2>
        <p className="text-gray-700 mt-2">
          Your one-stop shop for amazing books!
        </p>

        <div className="mt-8 flex item-center justify-center gap-24">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: "#e7995e" }}>
              About Us
            </h3>
            <p className="text-gray-600 w-80 text-center">
              BookView offers a wide range of books from all genres to cater to your reading needs. Enjoy a seamless borrowing experience with our membership plans.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: "#e7995e" }}>
              Quick Links
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>Home</li>
              <li>Books</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold" style={{ color: "#e7995e" }}>
              Contact Us
            </h3>
            <p className="text-gray-600">Email: support@bookview.com</p>
            <p className="text-gray-600">Phone: +123 456 789</p>
          </div>
        </div>

       
      </div>
      <div className="flex justify-center space-x-6 mt-8">
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

        <p className="text-gray-600 mt-6 text-center">
          © {new Date().getFullYear()} BookView. All rights reserved.
        </p>
    </Footer>
  );
};

export default FooterComponent;
