import { Button, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import { useAddBookMutation } from "../../redux/features/bookManagement/bookApi";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
const imageHostingKey = import.meta.env.VITE_IMAGE_BB_API_KEY;
console.log(imageHostingKey);
const image_hosting_api_key = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
const CreateProduct = () => {
  const [addBook, { error }] = useAddBookMutation();
  console.log(error);

  const token = useAppSelector(useCurrentToken);

  const uploadImage = async (image: File) => {
    if (!image) {
      toast.error("No image selected!");
      return null;
    }

    console.log("Uploading Image:", image); // ✅ Log the image file

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch(image_hosting_api_key, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("ImgBB Response:", result); // ✅ Log response from ImgBB

      if (!result.success) {
        toast.error("Image upload failed!");
        return null;
      }

      return result.data.url; // ✅ Return the image URL
    } catch (error) {
      console.error("Image Upload Error:", error);
      toast.error("Image upload failed!");
      return null;
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (!data.image) {
      toast.error("Please upload an image");
      return;
    }
    try {
      const imageUrl = await uploadImage(data.image);
      if (!imageUrl) return;

      const productData = {
        name: data.name,
        brand: data.Brand,
        price: Number(data.price),
        model: data.model,
        stock: Number(data.stock),
        image: imageUrl,
      };

      console.log("Sending data:", productData);
      addBook({ token, data: productData });

      toast.success("Product created successfully");
    } catch (error: any) {
      console.error("Error:", error);
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
