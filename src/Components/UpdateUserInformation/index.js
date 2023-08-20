import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { user_details } from "../Actions/GetUserDetails";
import { UpdateUserDetails } from "../Actions/UpdateUsers";

const UpdateUserInformation = () => {
  const tempProfile = useSelector((state) => state.UserDetails);
  const profile = {
    firstName: tempProfile.firstName,
    lastName: tempProfile.lastName,
    dateOfBirth: tempProfile.dateOfBirth,
    password: "",
    confirmPassword: "",
    phone: tempProfile.phone,
  };

  const [initProfile, setProfile] = useState(profile);
  const [errors, updateErrors] = useState({});
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();
  const putData = (event) => {
    const { name, value } = event.target;
    setProfile({ ...initProfile, [name]: value });
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    updateErrors(validation(initProfile));
    setValid(true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(errors).length === 0 && valid) {
      UpdateUserDetails(dispatch, initProfile).then((data) => {
        if (data.success) {
          navigate("/profile");
        }
      });
    } else {
      user_details(dispatch).then((data) => {
        const profile2 = {
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          password: "",
          confirmPassword: "",
          phone: data.phone,
        };
        setProfile(profile2);
      });
    }
    /* eslint-disable-next-line */
  }, [dispatch, errors, valid, navigate]);
  const validation = (value) => {
    const errors = {};
    const regexpPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,20}$/;
    const regexpPhone =
      /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!value.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!value.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!value.dateOfBirth) {
      errors.dateOfBirth = "date is Required";
    }
    if (!value.password) {
      errors.password = "Password is Required";
    } else if (value.password.length < 4) {
      errors.password = "Password length has to be atleast 4 Characters";
    } else if (value.password.length > 20) {
      errors.password = "Password length should not exceed 20 Characters";
    } else if (value.lastName && value.password.includes(value.lastName)) {
      errors.password = "Password should not contain your Last Name";
    } else if (!regexpPassword.test(value.password)) {
      errors.password =
        "Password should contain atleast one lowercase character, uppercase character, digit and Symbol";
    }
    if (!value.confirmPassword) {
      errors.confirmPassword = "Confirm Password is mandatory";
    } else if (value.confirmPassword !== value.password) {
      errors.confirmPassword = "Password did not match!";
    }
    if (!value.phone) {
      errors.phone = "Phone Number is Required";
    } else if (!regexpPhone.test(value.phone)) {
      errors.phone = "Phone Number is invalid";
    }
    return errors;
  };
  return (
    <>
      <div className="row my-4">
        <div className="col-2">
          <NavLink to="/profile">
            <IconButton children={<CloseIcon />} style={{ color: "black" }} />
          </NavLink>
        </div>
        <div className="col-8">
          <span className="mt-1" style={{ fontSize: "1.5rem" }}>
            Edit Profile
          </span>
        </div>
        <div className="col col-md-2">
          <div
            className="btn mt-3 mt-md-1 w-100"
            style={{ background: "lightblue" }}
            onClick={(event) => dataSubmit(event)}
          >
            Save
          </div>
        </div>
      </div>
      <form>
        <div className="row g-3">
          <div className="col-sm-6">
            <div className="form-floating mt-3">
              <input
                type="text"
                className={`form-control${
                  errors.firstName ? " is-invalid" : ""
                }`}
                id="firstName"
                name="firstName"
                value={initProfile.firstName}
                onChange={(event) => putData(event)}
              />
              <label htmlFor="firstName">First Name</label>
              <p className="text-danger">
                {errors.firstName ? errors.firstName : ""}
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-floating mt-3">
              <input
                type="text"
                className={`form-control${
                  errors.lastName ? " is-invalid" : ""
                }`}
                id="lastName"
                name="lastName"
                value={initProfile.lastName}
                onChange={(event) => putData(event)}
              />
              <label htmlFor="lastName">Last Name</label>
              <p className="text-danger">
                {errors.lastName ? errors.lastName : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="form-floating my-3">
          <input
            type="date"
            className={`form-control${errors.dateOfBirth ? " is-invalid" : ""}`}
            id="dateOfBirth"
            name="dateOfBirth"
            max={new Date().toISOString().split("T")[0]}
            value={initProfile.dateOfBirth}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <p className="text-danger">
            {errors.dateOfBirth ? errors.dateOfBirth : ""}
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-floating my-3">
              <input
                type="new-password"
                className={`form-control${
                  errors.password ? " is-invalid" : ""
                }`}
                id="Password"
                name="password"
                value={initProfile.password}
                onChange={(event) => putData(event)}
              />
              <label htmlFor="Password">Password</label>
              <p className="text-danger">
                {errors.password ? errors.password : ""}
              </p>
            </div>
            <div className="form-floating my-3">
              <input
                type="new-password"
                className={`form-control${
                  errors.confirmPassword ? " is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={initProfile.confirmPassword}
                onChange={(event) => putData(event)}
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <p className="text-danger">
                {errors.confirmPassword ? errors.confirmPassword : ""}
              </p>
            </div>
          </div>
          <div className="col-sm-6 my-auto">
            <ul>
              <li>Password should not contain your last name.</li>
              <li>Password should have atleast 4 characters.</li>
              <li>Password must not exceed 20 characters.</li>
              <li>
                Password must have atleast one lowercase character, uppercase
                character, digit and Symbol.
              </li>
            </ul>
          </div>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className={`form-control${errors.phone ? " is-invalid" : ""}`}
            id="phone"
            name="phone"
            value={initProfile.phone}
            onChange={(event) => putData(event)}
          />
          <label htmlFor="phone">Phone</label>
          <p className="text-danger">{errors.phone ? errors.phone : ""}</p>
        </div>
      </form>
    </>
  );
};
export default UpdateUserInformation;
