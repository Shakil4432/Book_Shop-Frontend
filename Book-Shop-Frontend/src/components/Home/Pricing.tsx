import { Card, Button } from "antd";



const Pricing = () => {
  return (
    <div>
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-[#e7995e] mt-12 mb-2">
        Choose Your Perfect Plan
      </h1>
      
      {/* Subheading */}
      <h2 className="text-sm font-semibold pb-6 text-center">
        Book Store Pricing
      </h2>

      <section className="py-16 px-4" style={{ backgroundColor: "#f4e1d2" }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-8">
            <Card
              hoverable
              className="w-80"
              bordered={false}
              extra={
                <div className="flex justify-between items-center gap-4">
                  <h3
                    className="text-xl font-semibold "
                    style={{ color: "#e7995e" }}
                  >
                    Basic Plan
                  </h3>
                  <p className="text-xl text-gray-600">$5/month</p>
                </div>
              }
              style={{
                width: 300,
                backgroundColor: "#fff5ed",
                borderRadius: "10px",
              }}
            >
              <ul className="text-left text-gray-700 mb-6">
                <li>📖 Access to 5 Books per Month</li>
                <li>📚 Standard Book Collection</li>
                <li>⏳ 7-Day Borrowing Limit</li>
              </ul>
              <Button
                type="primary"
                style={{ backgroundColor: "#e7995e", borderColor: "#e7995e" }}
                className="w-full"
              >
                Get Plan
              </Button>
            </Card>

            <Card
              hoverable
              className="w-80"
              bordered={false}
              extra={
                <div className="flex justify-between items-center gap-4">
                  <h3
                    className="text-xl font-semibold "
                    style={{ color: "#e7995e" }}
                  >
                    Standard Plan
                  </h3>
                  <p className="text-xl text-gray-600">$10/month</p>
                </div>
              }
              style={{
                width: 300,
                backgroundColor: "#fff5ed",
                borderRadius: "10px",
              }}
            >
              <ul className="text-left text-gray-700 mb-6">
                <li>📖 Access to 15 Books per Month</li>
                <li>📚 Premium Book Collection</li>
                <li>⏳ 14-Day Borrowing Limit</li>
              </ul>
              <Button
                type="primary"
                style={{ backgroundColor: "#e7995e", borderColor: "#e7995e" }}
                className="w-full"
              >
                Get Plan
              </Button>
            </Card>

            <Card
              hoverable
              className="w-80"
              bordered={false}
              extra={
                <div className="flex justify-between items-center gap-4">
                  <h3
                    className="text-xl font-semibold "
                    style={{ color: "#e7995e" }}
                  >
                    Premium Plan
                  </h3>
                  <p className="text-xl text-gray-600">$15/month</p>
                </div>
              }
              style={{
                width: 300,
                backgroundColor: "#fff5ed",
                borderRadius: "10px",
              }}
            >
              <ul className="text-left text-gray-700 mb-6">
                <li>📖 Unlimited Books per Month</li>
                <li>📚 Exclusive Book Collection</li>
                <li>⏳ No Borrowing Limit</li>
              </ul>
              <Button
                type="primary"
                style={{ backgroundColor: "#e7995e", borderColor: "#e7995e" }}
                className="w-full"
              >
                Get Plan
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;



