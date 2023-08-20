import { FindCart, AddToOrders, FindOrdersOfUser, RemoveFromCart } from "../../../Services/CartService";

export const GetCartItems = async () => {
    const items = await FindCart();
    return items;
};

export const deleteCartItem = async(id) => {
    const items = await RemoveFromCart(id);
    return items;
}

export const AddToOrder = async (order) => {
    console.log(order);
    const out = await AddToOrders(order);
    return out;
};

export const FindOrdersByUser = async () => {
    console.log("called orders");
    const out = await FindOrdersOfUser();
    return out.order;
};


