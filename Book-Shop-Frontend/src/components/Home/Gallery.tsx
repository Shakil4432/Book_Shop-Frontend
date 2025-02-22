import { motion } from "framer-motion";

const images = [
  "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1738339889~exp=1738343489~hmac=2d2456b72bb13fda3ec349562336342c5810337dc784dfca1854e33e9b6b8a88&w=826",
  "https://img.freepik.com/free-photo/reading-concept-with-hands-holding-book_23-2147690502.jpg?t=st=1738339977~exp=1738343577~hmac=932791d8e5c6ca3623efaa3a57b0e592c05b1d8d12a3dc638fdd525c0a7c85f1&w=740",
  "https://img.freepik.com/free-photo/reading-concept-with-pile-books_23-2147690501.jpg?t=st=1738340036~exp=1738343636~hmac=885de22fe10082c1fcf517899bea593248c87d90e2a408506569e661f3817242&w=360",
  "https://img.freepik.com/free-photo/top-view-books-with-floral-bookmark_23-2149871459.jpg?t=st=1738340099~exp=1738343699~hmac=dde94f25af672a4b49a391843dca6c389e5340ecc1282f1b9cc7e9e33ca9ced2&w=360",
  "https://img.freepik.com/free-photo/top-view-open-book-with-bookmark_23-2149871485.jpg?t=st=1738340138~exp=1738343738~hmac=b3e3b07fab7427ba2afa046fd721140581b31035e2006f5f48ee07fac52a13b6&w=826",
  "https://img.freepik.com/free-photo/open-book-with-flowers-arrangement_23-2149871456.jpg?t=st=1738340172~exp=1738343772~hmac=7e59445dc82cc7ad90b943daa191f94a35b049531b87d79cf47e6a8e0c83afce&w=826",
  "https://img.freepik.com/premium-photo/old-book-with-pink-flower-it_573856-384.jpg?w=900",
];

const Gallery = () => {
  return (
    <div className="overflow-hidden w-full">
      {/* Main Heading */}
      <h1 className="text-4xl text-center font-bold text-[#e7995e] mb-4">
        Explore Our Collection of Books
      </h1>
      {/* Subheading */}
      <h2 className="text-sm text-center font-semibold text-gray-800 mt-4 mb-12">
        Books Gallery
      </h2>
      <motion.div
        className="flex space-x-4"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }} // Adjust based on images
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] h-[300px] rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Book ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;



