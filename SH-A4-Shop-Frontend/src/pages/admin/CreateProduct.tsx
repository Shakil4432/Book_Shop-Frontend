import { Button, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import { useAddBookMutation } from "../../redux/features/bookManagement/bookApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const CreateProduct = () => {
  const [addBook] = useAddBookMutation();
  const token = useAppSelector(useCurrentToken);

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          name: data.name,
          brand: data.Brand, // Fix casing, backend expects `brand` not `Brand`
          price: Number(data.price),
          model: data.model,
          stock: Number(data.stock),
        })
      );
      formData.append("file", data.image); // Append image file
      toast.success("Product created successfully");

      addBook({ token: token, data: formData }); // Send FormData instead of JSON
    } catch (error: any) {
      toast.error(error.message);
    }
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
                <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                  <Controller
                    name="image"
                    render={({ field: { onChange, value, ...field } }) => (
                      <Form.Item label="Picture">
                        <Input
                          type="file"
                          value={value?.fileName}
                          {...field}
                          onChange={(e) => onChange(e.target.files?.[0])}
                        />
                      </Form.Item>
                    )}
                  />
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

export default CreateProduct;
