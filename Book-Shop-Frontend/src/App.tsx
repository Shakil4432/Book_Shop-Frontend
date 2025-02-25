import { useEffect } from "react";
import HomeLayout from "./components/layouts/HomeLayout";
import { useAppDispatch } from "./redux/hooks";
import { setUser } from "./redux/features/auth/authSlice";



const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      // If user and token are in localStorage, dispatch to Redux store
      dispatch(setUser({
        user: JSON.parse(storedUser),
        token: storedToken,
      }));
    }
  }, [dispatch]);

  return (
    <div>
      <HomeLayout></HomeLayout>
    </div>
  );
};

export default App;
