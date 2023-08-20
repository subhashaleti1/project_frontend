export const CLOSE_PRIVACY_POLICY = "CLOSE_PRIVACY_POLICY";
export const OPEN_PRIVACY_POLICY = "OPEN_PRIVACY_POLICY";

export const OpenPrivacyPolicy = (dispatch) => {
  dispatch({ type: OPEN_PRIVACY_POLICY });
};

export const ClosePrivacyPolicy = (dispatch) => {
  dispatch({ type: CLOSE_PRIVACY_POLICY });
};
