import {
  addAddress,
  getUserInfo,
  RemoveAddress,
} from "../../../Services/AddAddress";

export const ADD_ADDRESS = "ADD_ADDRESS";

export const AddAddressAction = async (address) => {
  const info = await addAddress(address);
  return info;
};
export const RemoveAddressAction = async (aid) => {
  const info = await RemoveAddress(aid);
  return info;
};
export const getAddressAction = async (dispatch) => {
  const info = await getUserInfo();
  dispatch({
    type: ADD_ADDRESS,
    address: info.user.address,
  });
  console.log(info.user.address)
  return info.user.address;
};
