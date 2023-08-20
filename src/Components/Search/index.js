import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { getProductsByNameAction } from "../Actions/AddProduct";
import { getCatalogsAction } from "../Actions/Catalogs";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import {AddToCart} from "../../Services/CartService";
import { GetCartItems } from "../Actions/Cart";
import { isAdminService, isDealerService } from "../../Services/LoginService";
import { useDispatch, useSelector } from "react-redux";
import temp_products from "./temp_products";
const Search = () => {
  const login = useSelector((state) => state.LogIn);
  const [products, setProducts] = useState([]);
  const [dbproducts, setDbproducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catalogs, setCatalogs] = useState([]);
  const [searchText, setSearchText] = useState();
  const [cartData,setCartData] = useState([])
  const { productName } = useParams();
  const Navigate = useNavigate();
  const productRef = useRef();
  var searchString = "";

  // const searchProductsByName = async () => {
  //   if (productRef.current.value !== "") {
  //     await getProductsByNameAction(productRef.current.value).then((data) => {
  //       setDbproducts(data);
  //       setLoading(false);
  //     });
  //   } else if (productName !== undefined) {
  //     await getProductsByNameAction(productName).then((data) => {
  //       setDbproducts(data);
  //       setLoading(false);
  //     });
  //   }
  // };

  const fetchAllCatalogs = async () => {
    getCatalogsAction().then((data) => setCatalogs(data));
  };

  const addToCart = (product) => {
    const loginInfo = JSON.parse(localStorage.getItem("LoggedIn"));
    const p = {
      product: product.asin,
      productimg: product.thumbnail,
      unitPrice: product.price.current_price,
      quantity: 1,
      user: loginInfo._id
    };
    AddToCart(p).then(GetCartItems().then((data) => {
      console.log("Cart data - ", data)
      setCartData(data)
    })
      );
  };

  const searchProductsByCategory = (catalogName) => {
    setLoading(true);

    const options = {
      method: "GET",
      url: 'https://amazon23.p.rapidapi.com/product-search',
      params: {

        query: catalogName,
        country: "US",
        page: "1",
      },
      headers: {
        'X-RapidAPI-Key': 'a04b30f033msh3604416a9b48d84p175864jsnf51561f385ff',
        'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
      }
    };
    axios
        .request(options)
        .then(function (response) {
          //setProducts(temp_products.docs)
          setProducts(response.data.result);
          console.log(response.data)
          setLoading(false);
        })
        .catch(function (error) {});

    Navigate(`/search/${catalogName}`);


  }

  const searchProducts = () => {
    // searchProductsByName();

    if (productRef.current.value !== null && productRef.current.value !== "") {
      searchString = productRef.current.value;
    } else if (productName !== undefined) {
      searchString = productName;
      setSearchText(productName);
    }
    if(searchString!== "" && catalogs.indexOf(searchString)>=0){
        searchProductsByCategory(searchString);
    }
    if (searchString !== "") {
      setLoading(true);
      const options = {
        method: "GET",
        url: 'https://amazon23.p.rapidapi.com/product-search',
        params: {
          query: searchString,
          country: "US",
          page: "1",
        },
        headers: {
          'X-RapidAPI-Key': 'a04b30f033msh3604416a9b48d84p175864jsnf51561f385ff',
          'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          setProducts(response.data.result);
          setLoading(false);
        })
        .catch(function (error) {});
    }
    Navigate(`/search/${searchString}`);
  };

  useEffect(() => {
    searchProducts();
    fetchAllCatalogs();
    /* eslint-disable-next-line */
  }, []);

  useEffect(() => {
    if(login.logedIn && !isAdminService() && !isDealerService()){
    GetCartItems().then((data) => setCartData(data));
    }
  },[])

  return (
    <div className="row wd-bg-image">
      <div className="mt-3 mb-3">
        <div className="mt-1 mb-3 input-icons">
          <div className="row">
            <div className="col col-10">
              <i className="fas fa-search wd-icon-pos"></i>

              <input
                ref={productRef}
                className="form-control ms-3 ps-5 rounded-pill w-100 d-inline"
                id="text-fields-search"
                placeholder="Search Product"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <div className="col col-2">
              <button
                className=" btn btn-primary rounded"
                onClick={() => searchProducts()}
                style={{backgroundColor: "#222f3e",
                  color: "#fff", borderColor:"#222f3e"}}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button wd-my-list-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={{backgroundColor: "#222f3e",
                  color: "#fff"}}
              >
                <strong>Search by Catalog</strong>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                {/* {catalogs.length > 0 ? (
                  <>
                  <ul className="list-group">
                    { catalogs.map((cat) => {
                      console.log(cat.catalogName);
                      <li className="list-group-item">{cat.catalogName}</li>
                    })}
                    </ul>
                  </>
                  )
                  : <></>
                   } */}
                  {catalogs.map((cat) => (
                    <li
                      className="category-list"
                      key={"l" + cat._id}
                    >
                    <Button variant="primary" onClick = { ()=> searchProductsByCategory(cat.catalogName)}>{cat.catalogName}</Button>
                    </li>
                  ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={{backgroundColor: "#222f3e",
                  color: "#fff"}}
              >
                <strong>List of Products:</strong>
              </button>
            </h2>
            {loading ? (
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <div className="d-flex flex-column align-items-center bg-white justify-content-center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              </div>
            </div>
            ):(
              <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <ul className="list-group">
                  {products.map((product) => (
                    <li
                      className="list-group-item"
                      style={{ backgroundColor: "rgba(137, 215, 245, 0.83)" }}
                      key={"l" + product.asin}
                    >
                      <div className="row">
                      <div className="col-2">
                        <img
                          src={product.thumbnail}
                          className="me-3"
                          height={60}
                          alt="Product"
                          />
                      </div>
                      <div className="col-8">
                      <Link to={`/details/${product.asin}`}
                            state={{productState: product }}>
                      {product.title}
                      </Link>
                      </div>
                      <div className="col-2">
                      {login.logedIn && !isAdminService() && !isDealerService() &&
                        <button className=" btn btn-primary rounded"
                                      style={{backgroundColor: "#222f3e",
                                        color: "#fff", borderColor:"#222f3e"}}
                                      onClick ={()=> addToCart(product)} disabled = {cartData.some(el => el.product === product.asin)}>
                                      { cartData.some(el => el.product === product.asin) ?
                                      ("Added to cart") : ("Add to cart")
                                      }
                        </button>
                      }
                      </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
