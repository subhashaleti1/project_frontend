import { SignUpService } from "../../../Services/SignUpService";

const SignupAction = async (signup) => {
  const info = await SignUpService(signup);
  return info;
};
export default SignupAction;
