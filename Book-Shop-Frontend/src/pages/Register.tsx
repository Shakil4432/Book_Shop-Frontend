import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";

import BSForm from "../components/form/BSForm";
import BSInput from "../components/form/BSInput";

import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useRegisterMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (formData: FieldValues) => {
    const toastId = toast.loading("Registering...");
    try {
      const res = await registerUser(formData).unwrap();
      const user = verifyToken(res.data.token);
      dispatch(setUser({ user, token: res.data.token }));
      toast.success("Registration successful!", {
        id: toastId,
        duration: 2000,
      });
      navigate(`/dashboard`);
    } catch (err: any) {
      console.error("Registration Error:", err);
      toast.error(err?.data?.message || "Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#e7995e] p-8 rounded-lg shadow-md w-80">
        <h1 className="px-8 mb-4 text-center font-bold text-[#2c3e50] text-2xl w-full">
          Register Here
        </h1>
        <Row justify="center">
          <BSForm onSubmit={onSubmit}>
            <BSInput type="text" name="name" label="Name" />
            <BSInput type="email" name="email" label="Email" />
            <BSInput type="password" name="password" label="Password" />
            <div className="flex justify-center mt-4">
              <Button type="default" htmlType="submit">
                Register
              </Button>
            </div>
          </BSForm>
        </Row>
      </div>
    </div>
  );
};

export default Register;
