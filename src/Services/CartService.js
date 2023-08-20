import axios from "axios";

const API_URL = process.env.REACT_APP_API_SVR || "http://localhost:4300/api";

const ADD_TO_CART_URL = `${API_URL}/cart/add`;
const REMOVE_FROM_CART_URL = `${API_URL}/cart/remove`;
const UPDATE_CART_URL = `${API_URL}/cart/update`;
const FIND_CART_URL = `${API_URL}/cart/`;
const ADD_ORDER_URL = `${API_URL}/order/add`;
const GET_ORDERS_URL = `${API_URL}/orders/`;


export const AddToCart = async (cart) => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        ADD_TO_CART_URL,
        {
            id: loginInfo._id,
            cart,
        },
        {
            headers: {
                authorization: localStorage.getItem("LoginToken"),
            },
        }
    );
    return data.data;
};

export const AddToOrders = async (order) => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        ADD_ORDER_URL,
        {
            id: loginInfo._id,
            order,
        },
        {
            headers: {
                authorization: localStorage.getItem("LoginToken"),
            },
        }
    );
    return data.data;
}

export const FindOrdersOfUser = async () => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    console.log("inside api call");
    const data = await axios.get(
        `${GET_ORDERS_URL}${loginInfo._id}`,
        {
            headers: {
                authorization: localStorage.getItem("LoginToken")
            }
        });

    return data.data;
}

export const RemoveFromCart = async (pid) => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(
        REMOVE_FROM_CART_URL,
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

export const FindCart = async () => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.get(
        `${FIND_CART_URL}${loginInfo._id}`,
        {
            headers: {
                authorization: localStorage.getItem("LoginToken")
            }
        });

    return data.data;
};

export const UpdateCart = async (pname) => {
    // const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const data = await axios.post(UPDATE_CART_URL, {
        name: pname,
    });
    return data.data.products;
};


