import { Card, Button, Badge, Col, Row, Typography } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import { useVerifyOrderQuery } from '../redux/features/order/orderApi';
import { useCurrentToken } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';

const { Title, Text } = Typography;

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const OrderVerification = () => {
    const [searchParams] = useSearchParams();
    const token = useAppSelector(useCurrentToken);
    const orderId = searchParams.get("order_id");
    const {data, isLoading} = useVerifyOrderQuery({order_id: orderId, token});
    const orderData: OrderData = data?.data?.[0];

  return (
    <div className="container" style={{ padding: '40px', backgroundColor: '#f4f4f4', borderRadius: '10px' }}>
      <Title level={2} style={{ marginBottom: 20, fontWeight: 'bold', color: '#333' }}>Order Verification</Title>

      <Row gutter={24}>
        <Col span={12}>
          <Card title="Order Details" bordered hoverable style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Order ID:</Text> 
              <Text>{orderData?.order_id}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Amount:</Text> 
              <Text>{orderData?.currency} {orderData?.amount?.toFixed(2)}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Status:</Text>
              <Badge
                color={orderData?.bank_status === "Success" ? "green" : "red"}
                text={orderData?.bank_status}
                style={{ marginLeft: 10 }}
              />
            </div>
            <div>
              <Text strong style={{ color: '#555' }}>Date:</Text> 
              <Text>{new Date(orderData?.date_time).toLocaleString()}</Text>
            </div>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Payment Information" bordered hoverable style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Method:</Text> 
              <Text>{orderData?.method}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Transaction ID:</Text> 
              <Text>{orderData?.bank_trx_id}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Invoice No:</Text> 
              <Text>{orderData?.invoice_no}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>SP Code:</Text> 
              <Text>{orderData?.sp_code}</Text>
            </div>
            <div>
              <Text strong style={{ color: '#555' }}>SP Message:</Text> 
              <Text>{orderData?.sp_message}</Text>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card title="Customer Information" bordered hoverable style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Name:</Text> 
              <Text>{orderData?.name}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Email:</Text> 
              <Text>{orderData?.email}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Phone:</Text> 
              <Text>{orderData?.phone_no}</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Text strong style={{ color: '#555' }}>Address:</Text> 
              <Text>{orderData?.address}</Text>
            </div>
            <div>
              <Text strong style={{ color: '#555' }}>City:</Text> 
              <Text>{orderData?.city}</Text>
            </div>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Verification Status" bordered hoverable style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {orderData?.is_verify === 1 ? (
                <>
                  <CheckCircleOutlined style={{ color: 'green', fontSize: 30, marginRight: 10 }} />
                  <Text style={{ color: 'green', fontSize: '18px' }}>Verified</Text>
                </>
              ) : (
                <>
                  
                </>
              )}
            </div>
          </Card>
        </Col>
      </Row>

    </div>
  );
};

export default OrderVerification;
