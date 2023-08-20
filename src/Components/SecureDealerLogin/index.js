import { Navigate } from "react-router-dom";
import {
  isDealerService,
  isloggedinService,
} from "../../Services/LoginService";

const SecureDealerLogin = ({ children }) => {
  if (isloggedinService() && isDealerService()) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default SecureDealerLogin;
