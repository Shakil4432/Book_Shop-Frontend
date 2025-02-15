import { Card, Rate, Avatar } from "antd";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
    comment:
      "Absolutely love this bookstore! The collection is fantastic, and the premium plan is worth every penny!",
  },
  {
    id: 2,
    name: "Mark Anderson",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 4,
    comment:
      "Great variety of books, and the borrowing process is super smooth. Highly recommend!",
  },
  {
    id: 3,
    name: "Sarah Williams",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
    comment:
      "Best place for book lovers! I love the unlimited reading option in the premium plan.",
  },
  {
    id: 4,
    name: "John Doe",
    avatar: "https://i.pravatar.cc/100?img=4",
    rating: 4,
    comment:
      "A wonderful collection of books with a seamless borrowing process. Will definitely subscribe again!",
  },
];

const Review = () => {
  return (
    <div className="overflow-hidden w-full py-20 px-4">
      <h2 className="text-3xl text-center font-semibold mb-12">
        Customer Reviews
      </h2>
      <motion.div
        className="flex space-x-4 cursor-grab"
        drag="x"
        dragConstraints={{ left: -500, right: 0 }}
      >
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            className="min-w-[300px] h-auto rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Card
              bordered={false}
              style={{
                width: 300,
                backgroundColor: "#fff5ed",
                borderRadius: "10px",
              }}
            >
              <div className="flex flex-col items-center">
                <Avatar src={review.avatar} size={64} />
                <h3
                  className="text-xl font-semibold mt-4"
                  style={{ color: "#e7995e" }}
                >
                  {review.name}
                </h3>
                <Rate disabled defaultValue={review.rating} className="mb-2" />
                <p className="text-gray-700 text-center">{review.comment}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Review;
