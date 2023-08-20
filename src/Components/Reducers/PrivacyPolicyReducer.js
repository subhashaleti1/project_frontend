import {
  CLOSE_PRIVACY_POLICY,
  OPEN_PRIVACY_POLICY,
} from "../Actions/PrivacyPolicy";

const PrivacyPolicyReducer = (state = { display: false }, action) => {
  switch (action.type) {
    case CLOSE_PRIVACY_POLICY:
      return { display: false };
    case OPEN_PRIVACY_POLICY:
      return { display: true };
    default:
      return state;
  }
};
export default PrivacyPolicyReducer;
