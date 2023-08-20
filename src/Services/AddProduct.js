import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";

const ADD_PRODUCT_URL = `${API_URL}/add-product`;
const REMOVE_PRODUCT_URL = `${API_URL}/remove-product`;
const GET_PRODUCTS_URL = `${API_URL}/products`;
const GET_PRODUCTS_BY_NAME_URL = `${API_URL}/search-products`;
const GET_ONE_PRODUCT_URL = `${API_URL}/product`;

export const AddProduct = async (product) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    ADD_PRODUCT_URL,
    {
      id: loginInfo._id,
      product,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};
export const RemoveProduct = async (pid) => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    REMOVE_PRODUCT_URL,
    {
      id: loginInfo._id,
      pid,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data;
};

export const GetProducts = async () => {
  const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(
    GET_PRODUCTS_URL,
    {
      id: loginInfo._id,
    },
    {
      headers: {
        authorization: localStorage.getItem("LoginToken"),
      },
    }
  );
  return data.data.products;
};

export const GetProductsByName = async (pname) => {
  // const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
  const data = await axios.post(GET_PRODUCTS_BY_NAME_URL, {
    name: pname,
  });
  return data.data.products;
};

export const GetOneProduct = async (id) => {
  const data = await axios.post(GET_ONE_PRODUCT_URL, {
    id,
  });
  return data.data.products;
};
