import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Skeleton, message } from "antd";
import { useDeleteBookMutation, useGetBookByIdQuery,  } from "../redux/features/bookManagement/bookApi";
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons"; // Icons
import { currentUser } from "../redux/features/auth/authSlice";
import { useAppSelector } from "../redux/hooks";
import { TUser } from "../components/layouts/Dashboard";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading, error } = useGetBookByIdQuery(id);
  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();
  
  // Get user role from Redux store (Modify based on your store structure)
   const user = useAppSelector(currentUser) as TUser | null;

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      message.success("Book deleted successfully!");
      navigate("/books"); // Redirect after deletion
    } catch (err) {
      message.error("Failed to delete the book.");
    }
  };

  if (isLoading) return <Skeleton active />;
  if (error || !book)
    return <p className="text-red-500 text-center">Book not found</p>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="max-w-lg w-full p-6 shadow-lg bg-[#f4e1d2]">
        <img
          src={book?.data.image}
          alt={book?.data.name}
          className="w-full h-72 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold text-[#2c3e50]">
          <strong>Name:</strong> {book?.data.name}
        </h1>
        <h1 className="text-2xl font-bold text-[#2c3e50]">
          <strong>Author:</strong> {book?.data.brand}
        </h1>
        <p className="text-lg text-gray-600">
          <strong>Stock:</strong> {book?.data.stock}
        </p>
        <p className="text-xl font-semibold text-[#e7995e]">
          <strong>Price:</strong> ${book?.data.price}
        </p>
        
        {/* Buy Now Button */}
        <Button 
          type="default" 
          icon={<ShoppingCartOutlined />} 
          className="mt-4 w-full"
        >
          Buy Now
        </Button>

        {/* Show Update & Delete buttons only for Admin */}
        {user?.role === "admin" && (
          <div className="flex justify-between mt-4">
            <Button 
              type="primary" 
              icon={<EditOutlined />} 
              onClick={() => navigate(`/update-book/${id}`)}
            >
              Update
            </Button>
            <Button 
              
              icon={<DeleteOutlined />} 
              loading={isDeleting} 
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default BookDetails;
