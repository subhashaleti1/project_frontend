import { Navigate } from "react-router-dom";
import { isAdminService, isloggedinService } from "../../Services/LoginService";

const SecureAdminLogin = ({ children }) => {
  if (isloggedinService() && isAdminService()) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default SecureAdminLogin;
