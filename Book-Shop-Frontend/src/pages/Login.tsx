import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";

import BSForm from "../components/form/BSForm";
import BSInput from "../components/form/BSInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  console.log(data);
  console.log(error);

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.data.token);
     
      dispatch(setUser({ user: user, token: res.data.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/dashboard`);
    } catch (error: any) {
      if (error?.data?.message === "User not found") {
        toast.error("You have no account. Please register first.", {
          id: toastId,
          duration: 3000,
        });
        setTimeout(() => {
          navigate("/register"); 
        }, 2000);
      } else {
        toast.error("Something went wrong", { id: toastId, duration: 2000 });
      }
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#e7995e] p-8 rounded-lg shadow-md w-80">
        <h1 className="px-8 mb-4 text-center font-bold text-[#2c3e50] text-2xl w-full ">
          Login Form
        </h1>
        <Row justify="center">
          <BSForm onSubmit={onSubmit}>
            <BSInput type="email" name="email" label="Email" />
            <BSInput type="password" name="password" label="Password" />
            <div className="flex justify-center mt-4">
              <Button type="default" htmlType="submit">
                Login
              </Button>
            </div>
          </BSForm>
        </Row>
        <p className="mt-4">You have no account? Please {<Link className="text-white" to={"/register"}>REGISTRATION</Link>} </p>
      </div>
    </div>
  );
};

export default Login;
