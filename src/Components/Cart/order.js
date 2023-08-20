import React, { useState, useEffect } from "react";

import "./index.css";
import {FindOrdersByUser} from "../Actions/Cart";
import {Link} from "react-router-dom";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        FindOrdersByUser().then((data) => {setOrders(data); console.log(data)});
    }, []);


    return (
        <div>
            <br></br>
            <div>
                <h3>Your Orders</h3>
            </div>
            {orders?.map((x) => {

                return(
                    <>
                        <div className="item">

                            <div className="image">
                                <img className="wd-image" src={x.order.productimg} alt=""/>
                            </div>

                            <div className="description">
                                <span>{x.order.name}</span>
                            </div>

                            <div className="quantity">
                                <button className="plus-btn" type="button" name="button">
                                    +
                                </button>
                                <input type="text" name="name" value={x.order.quantity}></input>
                                <button className="minus-btn" type="button" name="button">
                                    -
                                </button>
                            </div>
                            <div className="total-price">${x.order.unitPrice}</div>
                        </div>
                    </>
                )
            })}
            </div>

    );
};

export default Orders;
