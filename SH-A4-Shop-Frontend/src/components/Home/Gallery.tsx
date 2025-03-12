import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "https://img.freepik.com/free-photo/colorful-pens-set-table_23-2148209043.jpg?w=740",
  "https://img.freepik.com/free-photo/notebooks-table-with-stationery_23-2147890455.jpg?w=740",
  "https://img.freepik.com/free-photo/pencils-colorful-table_23-2148209042.jpg?w=740",
  "https://img.freepik.com/free-photo/top-view-office-supplies-arrangement_23-2149032272.jpg?w=740",
  "https://img.freepik.com/free-photo/paint-brushes-color-palette_23-2148209045.jpg?w=740",
  "https://img.freepik.com/free-photo/variety-paintbrushes-paint-tubes_23-2147932794.jpg?w=740",
  "https://img.freepik.com/free-photo/colored-paper-clips-desk_23-2147888779.jpg?w=740",
];

const Gallery = () => {
  return (
    <div className="overflow-hidden w-full">
      <h1 className="text-4xl text-center font-bold text-[#e7995e] mb-4">
        Explore Our Collection of Stationery
      </h1>
      <h2 className="text-sm text-center font-semibold text-gray-800 mt-4 mb-12">
        Stationery Gallery
      </h2>
      <motion.div
        className="flex space-x-4"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] h-[300px] rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Stationery ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center justify-center py-8">
        <Link to="/stationery">
          <Button style={{ background: "#e7995e", color: "white" }}>
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
