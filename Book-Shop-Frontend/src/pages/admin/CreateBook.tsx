import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import { useAddBookMutation } from "../../redux/features/bookManagement/bookApi";

const CreateBook = () => {
  const [addBook, { data, error }] = useAddBookMutation();
  console.log(data);
  console.log(error);
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    addBook(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#e7995e] p-8 rounded-lg shadow-md w-[600px]">
        <h1 className="px-8 mb-4 text-center font-bold text-[#2c3e50] text-2xl w-full ">
          Create Book Form
        </h1>
        <Row justify="center">
          <Col span={24}>
            <BSForm onSubmit={onSubmit}>
              <Row gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="name" label="Name" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="Brand" label="Brand" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="number" name="price" label="Price" />
                </Col>

                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="text" name="model" label="Model" />
                </Col>
                <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                  <BSInput type="number" name="stock" label="Stock" />
                </Col>
              </Row>
              <div className="flex justify-center mt-4">
                <Button type="default" htmlType="submit">
                  Submit
                </Button>
              </div>
            </BSForm>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreateBook;
