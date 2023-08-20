import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isloggedinService } from "../../Services/LoginService";
import {
  AddAddressAction,
  getAddressAction,
  RemoveAddressAction,
} from "../Actions/AddAddress";

const AddAddress = () => {
  const [start, setStart] = useState(true);
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.AddAddress);
  const navigate = useNavigate();
  const [data, setData] = useState({
    addressLine: "",
    addressLine2: "",
    city: "",
    state: "",
    zipcode: "",
  });
  const [errors, updateErrors] = useState({});
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);
  const putAddressData = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const validation = (value) => {
    const errors = {};
    if (!value.addressLine) {
      errors.addressLine = "Address Line cant be empty";
    }
    if (!value.city) {
      errors.city = "Enter a city name";
    }
    if (!value.state) {
      errors.state = "Select a State";
    } else if (value.state.length === 0) {
      errors.state = "Select a State";
    }
    if (!value.zipcode) {
      errors.zipcode = "Zip Code is Required";
    }
    return errors;
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(data));
    setValid(true);
  };

  const deleteAddress = (aid) => {
    RemoveAddressAction(aid).then(() => getAddressAction(dispatch));
  };

  useEffect(() => {
    if (start) {
      setStart(false);
      getAddressAction(dispatch);
    }
    if (!isloggedinService()) {
      navigate("/login");
    }
    if (Object.keys(errors).length === 0 && valid) {
      AddAddressAction(data).then(() => {
        getAddressAction(dispatch);
        setValid(false);
      });
    }
  }, [errors, start, data, dispatch, navigate, valid]);
  console.log(addresses)
  return (
    <div className="my-5">
      <ul className="list-group">
        {addresses.length > 0 &&
          addresses.map((element) => {
            return (
              <li className="list-group-item ps-5" key={element._id}>
                <div className="row">
                  <div className="col-10">
                    {element && element.addressLine && (
                      <p>{element.addressLine},</p>
                    )}
                    {element && element.addressLine2 && (
                      <p>{element.addressLine2},</p>
                    )}
                    {element && element.city && <p>{element.city},</p>}
                    {element && element.state && <p>{element.state},</p>}
                    {element && element.zipcode && <p>{element.zipcode}</p>}
                  </div>
                  <span className="col-md-2 my-auto text-align-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAddress(element._id)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
      <button
        className={`btn btn-primary rounded-pill w-100 ${
          show ? "d-none" : ""
        } my-3`}
        onClick={() => {
          setShow(!show);
        }}
        style={{backgroundColor: "#222f3e",
                  color: "#fff", borderColor:"#222f3e"}}
      >
        Add Address
      </button>
      <button
        className={`btn btn-primary rounded-pill w-100 ${
          show ? "" : "d-none"
        } my-3`}
        onClick={() => {
          setShow(!show);
        }}
      >
        Close
      </button>
      <div className={`${show ? "" : "d-none"}`}>
        <form>
          <fieldset>
            <legend>
              <h3>Address</h3>
            </legend>
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control${
                      errors.addressLine ? " is-invalid" : ""
                    }`}
                    id="addressLine"
                    name="addressLine"
                    value={data.addressLine}
                    onChange={(event) => putAddressData(event)}
                  />
                  <label htmlFor="addressLine">Address</label>
                  <p className="text-danger">
                    {errors.addressLine ? errors.addressLine : ""}
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control${
                      errors.addressLine2 ? " is-invalid" : ""
                    }`}
                    id="addressLine2"
                    name="addressLine2"
                    value={data.addressLine2}
                    onChange={(event) => putAddressData(event)}
                  />
                  <label htmlFor="addressLine2">Apartment</label>
                  <p className="text-danger">
                    {errors.addressLine2 ? errors.addressLine2 : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-sm-4">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className={`form-control${
                      errors.city ? " is-invalid" : ""
                    }`}
                    id="city"
                    name="city"
                    value={data.city}
                    onChange={(event) => putAddressData(event)}
                  />
                  <label htmlFor="city">City</label>
                  <p className="text-danger">
                    {errors.city ? errors.city : ""}
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating my-3">
                  <select
                    className={`form-select ${
                      errors.state ? " is-invalid" : ""
                    }`}
                    id="state"
                    name="state"
                    aria-label="Floating label select example"
                    onChange={(event) => putAddressData(event)}
                  >
                    <option key="" value="" defaultValue></option>
                    {states.map((element) => (
                      <option key={element} value={element}>
                        {element}
                      </option>
                    ))}
                  </select>

                  <label htmlFor="state">State</label>
                  <p className="text-danger">
                    {errors.state ? errors.state : ""}
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    className={`form-control${
                      errors.zipcode ? " is-invalid" : ""
                    }`}
                    id="zipcode"
                    name="zipcode"
                    value={data.zipcode}
                    onChange={(event) => putAddressData(event)}
                  />
                  <label htmlFor="zipcode">Zip Code</label>
                  <p className="text-danger">
                    {errors.zipcode ? errors.zipcode : ""}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary rounded-pill w-100"
              onClick={(event) => dataSubmit(event)}
              style={{backgroundColor: "#222f3e",
                  color: "#fff", borderColor:"#222f3e"}}
            >
              Add Address
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default AddAddress;
