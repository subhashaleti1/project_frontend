import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUser, FetchUsers } from "../Actions/Admin";
import { getCatalogsAction,addCatalogsAction,deleteCatalogsAction } from "../Actions/Catalogs";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Option from 'react-bootstrap'
const Admin = () => {
  const navigate = useNavigate();
  const [change, setChange] = useState({});
  const [data, setData] = useState({});
  const [catalogData, setCatalogData] = useState();
  const [errors, updateErrors] = useState({});
  const [valid, setValid] = useState(false);
  const [catalogs,setCatalogs] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [addDisabled,setAddDisabled] = useState(true);
  const [deleteDisabled,setDeleteDisabled] = useState(true);
  const [deleteCatalog,setDeleteCatalog] = useState();
  const arr = [1,2,3]
  const validation = (value) => {
    console.log(value)
    const errors = {};
    if (!value) {
      errors.name = "Catalog Name is required";
    }
    return errors;
  };

  useEffect(() => {
    FetchUsers().then((data) => setData(data));
  }, [change]);

  useEffect(()=>{
    fetchAllCatalogs();
  },[fetchStatus])

  const fetchAllCatalogs = async () => {
    getCatalogsAction().then((data) => {
      setCatalogs(data)
    });
    setFetchStatus(false)
  };
  const putData = (event) => {
    setAddDisabled(false);
    setCatalogData(event.target.value)
  };
  const dataSubmit = (event) => {
    event.preventDefault()
    if(catalogs.some(el => el.catalogName === catalogData)){
      errors.name = "Catalog Already exists"
      setAddDisabled(true);
    }
    else{
    updateErrors(validation(catalogData));
    setValid(true);
    addCatalogsAction(catalogData).then(setFetchStatus(true));
    }
  };

  const dataDeleteSubmit = (event) => {
    event.preventDefault()
    setValid(true);
    deleteCatalogsAction(deleteCatalog).then(setFetchStatus(true));
  };

  const changeDeleteCatalog = (event) =>{
    setDeleteDisabled(false);
    setDeleteCatalog(event.target.value)
  };

  return (
    <>
    <div className="my-3">
      <h3>Add/Delete Catalogs</h3>
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
      <form>
          <div className="form-floating my-3 col-xl-3" style={{display:"inline-block"}}>
            <input
              type="text"
              className={`form-control${errors.name ? " is-invalid" : ""}`}
              id="catalogName"
              name="catalogName"
              value={catalogData}
              onChange={(event) => putData(event)}
            />
            <label htmlFor="Name">Catalog Name</label>
            <p className="text-danger">{errors.name ? errors.name : ""}</p>
            </div>
            <div className="form-floating my-3 col-xl-3" style={{display:"inline-block", marginLeft:"50px"}}>
            <Form.Control as="select" aria-label="" onChange={changeDeleteCatalog} value={deleteCatalog}>
            <option style={{color:"#9fa0a2"}}>Select Catalog</option>
            {catalogs.map((cat) => (
                    <option
                      className="category-list"
                      key={"l" + cat._id}
                      value={cat._id}
                    >
                      {cat.catalogName}
                    </option>
                  ))}
            </Form.Control>
            <p className="text-danger">{errors.deletename ? errors.deletename : ""}</p>
            </div>
          <div>
          <div className="col-xl-3" style={{display:"inline-block"}}>
            <button
              className="btn btn-primary w-100 p-2"
              onClick={(event) => dataSubmit(event)}
              disabled ={addDisabled}
            >
              Add Catalog
            </button>
          </div>
          <div className="col-xl-3" style={{display:"inline-block",marginLeft:"50px"}}>
            <button
              className="btn btn-danger w-100 p-2"
              onClick={(event) => dataDeleteSubmit(event)}
              disabled ={deleteDisabled}
            >
              Delete Catalog
            </button>
          </div>
          </div>
        </form>
      
    </div>
    <div className="my-3">
      <h3>List of Users:</h3>
      <ul className="list-group">
        {data.allUsers &&
          data.allUsers.length > 0 &&
          data.allUsers.map((element) => {
            return (
              <li className="list-group-item ps-5" key={element._id}>
                <div className="row">
                  <div className="col-7">
                    {element &&
                      element.firstName &&
                      element &&
                      element.lastName && (
                        <p>
                          {element.firstName}, {element.lastName}
                        </p>
                      )}
                    {element && element.email && <h6>{element.email}</h6>}
                  </div>
                  <span className="col-md-5 my-2 my-md-auto text-align-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => setChange(deleteUser(element._id))}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() => {
                        navigate(`/profile/${element._id}`);
                      }}
                    >
                      View Profile
                    </button>
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
    </>
  );
};
export default Admin;
