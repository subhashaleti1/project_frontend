import { loginService, logOutService } from "../../../Services/LoginService";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginAction = async (dispatch, login) => {
  const loginInfo = await loginService(login);
  if (loginInfo.success) {
    dispatch({
      type: LOGIN_USER,
      loginInfo,
    });
  }
  return loginInfo;
};

export const logoutAction = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  logOutService();
};
