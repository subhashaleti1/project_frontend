import { CLOSE_CONTACT_US, OPEN_CONTACT_US } from "../Actions/ContactUs";

const ContactUsReducer = (state = { display: false }, action) => {
  switch (action.type) {
    case CLOSE_CONTACT_US:
      return { display: false };
    case OPEN_CONTACT_US:
      return { display: true };
    default:
      return state;
  }
};
export default ContactUsReducer;
