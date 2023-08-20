export const CLOSE_CONTACT_US = "CLOSE_CONTACT_US";
export const OPEN_CONTACT_US = "OPEN_CONTACT_US";

export const OpenContactUs = (dispatch) => {
  dispatch({ type: OPEN_CONTACT_US });
};

export const CloseContactUs = (dispatch) => {
  dispatch({ type: CLOSE_CONTACT_US });
};
