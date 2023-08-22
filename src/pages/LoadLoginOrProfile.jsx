import { useSelector } from "react-redux";
import Login from "./Login";
import Profile from "./UserProfile";
import { selectUserToken } from "../redux/loginSlice";

const LoadLoginOrProfile = () => {
  const userToken = useSelector(selectUserToken);
  const LoginOrProfile = () =>
    !userToken ? <Login /> : <Profile Token={userToken} />;
  return <LoginOrProfile />;
};

export default LoadLoginOrProfile;
