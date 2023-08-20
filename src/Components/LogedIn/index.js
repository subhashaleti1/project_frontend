import { Navigate } from "react-router-dom";
import { isloggedinService } from "../../Services/LoginService";

const LogedIn = ({ children }) => {
  if (!isloggedinService()) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default LogedIn;
