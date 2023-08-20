import {
  AddProduct,
  GetOneProduct,
  GetProducts,
  RemoveProduct,
  GetProductsByName,
} from "../../../Services/AddProduct";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export const AddProductAction = async (address) => {
  const info = await AddProduct(address);
  return info;
};
export const RemoveProductAction = async (aid) => {
  const info = await RemoveProduct(aid);
  return info;
};
export const getProductAction = async (id, dispatch) => {
  const info = await GetOneProduct(id);
  dispatch({
    type: SET_PRODUCT,
    data: info,
  });
  return info;
};

export const getProductsAction = async () => {
  const info = await GetProducts();
  return info;
};
export const getProductsByNameAction = async (pname) => {
  const info = await GetProductsByName(pname);
  return info;
};
