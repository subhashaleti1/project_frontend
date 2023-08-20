import { ADD_ADDRESS } from "../Actions/AddAddress/index.js";
const AddAddressReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return action.address;
    default:
      return state;
  }
};
export default AddAddressReducer;
