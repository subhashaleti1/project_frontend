import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Modal from 'react-bootstrap/Modal';
import {GetCartItems, AddToOrder, deleteCartItem} from "../Actions/Cart"
import Button from 'react-bootstrap/Button';


const CartItems = () => {

    const [items, setCart] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        GetCartItems().then((data) => {setCart(data); setDeleteStatus(false);});
     }, [deleteStatus]);

     const deleteItem = (id) => {
        deleteCartItem(id).then(setDeleteStatus(true));
    }
    const CheckOut = (items) => {
        handleShow();
        const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
        items.forEach(function (item, index) {
            let array = {
                order: item._id,
                user: loginInfo._id,
                payment: "63938fdfeea0738f7b370b85",
                date: new Date().toString(),
            }
            AddToOrder(array);
        });
        items.forEach(function(item) {
            deleteItem(item.product);
        })
    }
    

    return (
        <>
            <div className="row my-4">
                <div>
                <h3>Your shopping cart</h3>
                </div>
                {items?.map((x) => {

                    return(
                    <>
                        <div className="item">

                            <div className="image">
                                <img className="wd-image" src={x.productimg} alt=""/>
                            </div>
                            <div className="total-price" style={{marginTop:"25px"}}>
                                <p style={{textAlign:"center"}}>Unit Price: ${x.unitPrice}</p></div>
                            <div style={{marginLeft:"50px", marginTop:"25px"}}>
                              <i className="fa-solid fa-trash-can" style={{float:"right"}} onClick={()=>deleteItem(x.product)}></i>  
                            </div>
                                
                        </div>
                    </>
                    )
                })}
                <button className="btn btn-primary cart-order-btn" onClick ={()=> CheckOut(items)} disabled={items.length==0 ? true:false}>Checkout</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>Cart checked out successfully!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
export default CartItems;
