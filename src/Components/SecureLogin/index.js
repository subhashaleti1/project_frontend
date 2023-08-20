import { Navigate } from "react-router-dom";
import { isloggedinService } from "../../Services/LoginService";

const SecureLogin = ({ children }) => {
  if (isloggedinService()) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
export default SecureLogin;
