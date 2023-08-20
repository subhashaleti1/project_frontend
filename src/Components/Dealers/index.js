import { useEffect, useState } from "react";
import "./login.css";
import { getCatalogsAction, addCatalogsAction } from "../Actions/Catalogs";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";

const Dealers = () => {
  const [start, setStart] = useState(true);
  const [data, updateData] = useState();
  const [errors, updateErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [catalogs,setCatalogs] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [disabled,setDisabled] = useState(true);
  const putData = (event) => {
    setDisabled(false);
    updateData(event.target.value)
  };
  const dataSubmit = (event) => {
    event.preventDefault();
    if(catalogs.some(el => el.catalogName === data)){
      errors.name = "Catalog Already exists"
      setDisabled(true);
    }
    else{
    updateErrors(validation(data));
    setValid(true);
    addCatalogsAction(data).then(setFetchStatus(true));
    }
  };

  const fetchAllCatalogs = async () => {
    getCatalogsAction().then((data) => setCatalogs(data));
    setFetchStatus(false);
  };

  useEffect(() => {
    fetchAllCatalogs();
    /* eslint-disable-next-line */
  }, [errors, valid,fetchStatus]);
  
  const validation = (value) => {
    const errors = {};
    if (!value) {
      errors.name = "Catalog Name is required";
    }
    return errors;
  };

  return (
    <>
      <div className="mx-auto my-5 p-5 wd-dealer-container">
        <div className="wd-form-login-text">
          <h3>Add Catalog</h3>
        </div>
        <form>
          <div className="form-floating my-3">
            <input
              type="text"
              className={`form-control${errors.name ? " is-invalid" : ""}`}
              id="catalogName"
              name="catalogName"
              value={data}
              onChange={(event) => putData(event)}
            />
            <label htmlFor="Name">Catalog Name</label>
            <p className="text-danger">{errors.name ? errors.name : ""}</p>
          </div>
          <div>
            <button
              className="btn btn-primary rounded-pill w-100 p-2"
              onClick={(event) => dataSubmit(event)}
              disabled ={disabled}
            >
              Add Catalog
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto my-5 p-5 wd-dealer-container">
        <h3 className="mb-3 wd-form-login-text">All Catalogs Created till now:</h3>
        <div>
        {catalogs.map((cat) => (
                    <li
                      className="category-list"
                      key={"l" + cat._id}
                    >
                    <Button variant="primary">{cat.catalogName}</Button>
                    </li>
                  ))}
        </div>
      </div>
    </>
  );
};
export default Dealers;
