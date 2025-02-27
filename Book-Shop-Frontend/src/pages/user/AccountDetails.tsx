import { Card, Typography, Descriptions, Button, Avatar } from "antd";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Text } = Typography;

const AccountDetails = () => {
  const user = useAppSelector(selectCurrentUser);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f4e1d2)",
        padding: "20px",
      }}
    >
      <Card
        bordered={false}
        style={{
          maxWidth: 500,
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <Avatar
          src={ "https://via.placeholder.com/150"}
          size={100}
          style={{
            marginBottom: "15px",
            border: "4px solid #e7995e",
          }}
        />
       
        <Text type="secondary">{user?.role || "Member"}</Text>

        <Descriptions
          title="User Information"
          column={1}
          style={{ marginTop: "15px" }}
        >
          <Descriptions.Item label="Email">
            <Text strong>{user?.email || "Not provided"}</Text>
          </Descriptions.Item>
          <Descriptions.Item label="Phone">
            <Text strong>{"+1234567890"}</Text>
          </Descriptions.Item>
        </Descriptions>
        
        <Button
          type="primary"
          style={{
            backgroundColor: "#e7995e",
            borderColor: "#e7995e",
            marginTop: "20px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Edit Details
        </Button>
      </Card>
    </div>
  );
};

export default AccountDetails;
