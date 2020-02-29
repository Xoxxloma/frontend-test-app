import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToTable } from "../store/actions/datalist";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: null
};

const AddToTableForm = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch()
  const confirmHandler = event => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };


  const renderInput = inputName => {
    return (
      <>
      <label htmlFor={`input${inputName}`}>{inputName}</label>
      <input
        type="text"
        className="form-control"
        id={`input${inputName}`}
        placeholder={inputName}
        name={inputName}
        onChange={confirmHandler}
      />
      </>
    );
  };
  const addToTableHandler = (e) => {
    e.preventDefault()
    dispatch(addToTable(form))
  }

  return (
    <div className="container">
      <form onSubmit={(e) => addToTableHandler(e)}>
        <h2 className="text-center mb-3">Добавьте свои данные</h2>
        <div className="form-row">
          <div className="form-group col-md-1">{renderInput("id")}</div>
          <div className="form-group col-md-3">{renderInput("firstName")}</div>
          <div className="form-group col-md-3">{renderInput("lastName")}</div>
          <div className="form-group col-md-2">{renderInput("email")}</div>
          <div className="form-group col-md-2">{renderInput("phone")}</div>
          <div className="form-group col-md-1">
            <input
            style={{marginTop: "32px"}}
              name="submit"
              type="submit"
              placeholder="Submit"
              className="btn btn-secondary align-items-end"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToTableForm;
