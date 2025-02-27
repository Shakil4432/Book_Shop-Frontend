import React from "react";
import { Card, Col, Typography, Button, Modal, message } from "antd"; // Assuming TUser is defined in your types
import { UserOutlined } from "@ant-design/icons"; // For the default avatar icon
import { TUserCard } from "../../types/TUserCard";
import { useDeleteUserMutation, useUpdateUserMutation } from "../../redux/features/userManagement/userApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
// Add API hooks

const { Title } = Typography;

interface UserCardProps {
  user: TUserCard;
  isAdmin: boolean; // To check if the current user is an admin
}

const UserCard: React.FC<UserCardProps> = ({ user, isAdmin }) => {
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const token  = useAppSelector(useCurrentToken)
  

  const handleDelete = async (userId:string) => {
    console.log(userId)
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk: async () => {
        try {
          await deleteUser({ id: userId , token});
          message.success("User deleted successfully!");
        } catch (error) {
          message.error("Failed to delete user!");
        }
      },
    });
  };

  const handleUpdate = () => {
    // Handle user update (could be a form or redirect to a page)
    // Example: Open a modal or navigate to a user edit page
    // For now, we'll just log the user
    console.log("Update user:", user);
    message.info("This is where you update the user.");
  };

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4} style={{ marginBottom: "20px" }}>
      <Card
        hoverable
        cover={
          <div
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f0f2f5",
              borderRadius: "10px",
            }}
          >
            <UserOutlined
              style={{
                fontSize: "50px",
                color: "#1890ff",
                backgroundColor: "#e6f7ff",
                borderRadius: "50%",
                padding: "20px",
              }}
            />
          </div>
        }
        style={{
          width: "100%",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
        bodyStyle={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <Title level={4} style={{ color: "#333", fontWeight: "600" }}>
          {user.name}
        </Title>
       
        <div style={{ marginBottom: "10px" }}>
          <strong>Email:</strong> {user.email}
        </div>
       

        {/* Admin actions (Update and Delete) */}
        {isAdmin && (
          <div style={{ marginTop: "15px" }}>
            <Button
              type="primary"
              onClick={handleUpdate}
              style={{ marginRight: "10px", backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}
            >
              Update
            </Button>
            <Button
              type="default"
              onClick={()=>handleDelete(user._id)}
            >
              Delete
            </Button>
          </div>
        )}
      </Card>
    </Col>
  );
};

export default UserCard;
