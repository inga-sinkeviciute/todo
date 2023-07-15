import { useRecoilValue } from "recoil";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../state/atoms";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useRecoilValue(isLoggedIn);

  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
