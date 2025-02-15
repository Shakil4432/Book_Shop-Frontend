import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";

import BSForm from "../components/form/BSForm";
import BSInput from "../components/form/BSInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const [login, { data, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  console.log(data);
  console.log(error);
  const onSubmit = async (data: FieldValues) => {
    const res = await login(data).unwrap();
    const user = verifyToken(res.data.token);

    console.log(user);
    dispatch(setUser({ user: user, token: res.data.token }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#f4e1d2] p-8 rounded-lg shadow-md w-80">
        <h1 className="px-8 mb-4 text-center font-bold text-[#2c3e50] text-2xl w-full ">
          Register Form
        </h1>
        <Row justify="center">
          <BSForm onSubmit={onSubmit}>
            <BSInput type="text" name="name" label="Name" />
            <BSInput type="email" name="email" label="Email" />
            <BSInput type="password" name="password" label="Password" />
            <div className="flex justify-center mt-4">
              <Button type="default" htmlType="submit">
                Login
              </Button>
            </div>
          </BSForm>
        </Row>
      </div>
    </div>
  );
};

export default Login;
