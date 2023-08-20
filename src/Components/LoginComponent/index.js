import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../Actions/Login";
import "./login.css";

const LoginComponent = () => {
  const [data, updateData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState({
    error: false,
    msg: "",
  });
  const [errors, updateErrors] = useState({});
  const [valid, setValid] = useState(false);

  const putData = (event) => {
    const { name, value } = event.target;
    updateData({ ...data, [name]: value });
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(data));
    setValid(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && valid) {
      loginAction(dispatch, data).then((data) => {
        if (data.success) {
          navigate("/");
        } else {
          setLoginMessage({ error: true, msg: data.message });
          setValid(false);
        }
      });
    }
  }, [errors, data, navigate, dispatch, valid]);
  const validation = (value) => {
    const errors = {};
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.email) {
      errors.email = "Email is Required";
    } else if (!regexp.test(value.email)) {
      errors.email = "Email is Not Valid";
    }
    if (!value.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };

  return (
    <div className="mx-auto my-5 p-5 wd-login-container">
      <div className="wd-form-login-text">
        <h3>LOGIN</h3>
      </div>
      {loginMessage.error && (
        <div className="alert alert-warning ">{loginMessage.msg}</div>
      )}
      <form>
        <div className="form-floating my-3">
          <input
            type="email"
            className={`form-control${errors.email ? " is-invalid" : ""}`}
            id="Email"
            name="email"
            value={data.email}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Email">Email</label>
          <p className="text-danger">{errors.email ? errors.email : ""}</p>
        </div>
        <div className="form-floating my-3">
          <input
            type="password"
            className={`form-control${errors.password ? " is-invalid" : ""}`}
            id="Password"
            name="password"
            value={data.password}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="Password">Password</label>
          <p className="text-danger">
            {errors.password ? errors.password : ""}
          </p>
        </div>
        <Link to="/register" className="float-end me-2 mb-3">
          Create Account
        </Link>
        <div>
          <button
            className="btn btn-primary rounded-pill w-100 p-2"
            onClick={(event) => dataSubmit(event)}
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
