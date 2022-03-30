import React, { useState } from "react";
import "./Form.css";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { addCardItem } from "../redux/action";

const Form = () => {
  const dispatch = useDispatch();

  const store = useSelector((store) => store.cards);

  const [cardInfo, setCardInfo] = useState({
    id: store.length,
    name: "",
    card: null,
    date: null,
    cvv: null,
    zip_code: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setCardInfo((prevState) => ({
      ...prevState,
      [name]: name !== "name" ? parseInt(value.split(" ").join("")) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCardItem(cardInfo));
  };

  return (
    <div className="container">
      <div className="form-header">
        <img src="assets/header-logo.svg" alt="logo" />
        <h1>Payment info</h1>
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <p className="form-label-text">Full Name</p>
          <input
            className="form-input-text"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <p className="form-label-text">Card Number</p>
          <InputMask
            mask="9999 9999 9999 9999"
            maskChar=""
            placeholder="1234 1234 1234 1234"
            onChange={(e) => handleChange(e)}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                className="form-input-text"
                name="card"
                type="text"
                required
              />
            )}
          </InputMask>
        </div>
        <div className="form-group-input">
          <div className="group-first-item">
            <p className="form-label-text">Exp Date</p>
            <InputMask
              mask="99/99"
              maskChar=""
              placeholder="MM/YY"
              onChange={(e) => handleChange(e)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="form-input-text"
                  name="date"
                  required
                  type="text"
                />
              )}
            </InputMask>
          </div>
          <div className="group-last-item">
            <p className="form-label-text">CVV</p>
            <InputMask
              mask="999"
              maskChar=""
              placeholder="***"
              onChange={(e) => handleChange(e)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="form-input-text"
                  name="cvv"
                  required
                  type="text"
                />
              )}
            </InputMask>
          </div>
        </div>
        <div>
          <p className="form-label-text">Zip Code</p>
          <InputMask
            mask="99999"
            maskChar=""
            placeholder="90120"
            onChange={(e) => handleChange(e)}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                className="form-input-text"
                name="zip_code"
                type="text"
                required
              />
            )}
          </InputMask>
        </div>
        <div>
          <input type="submit" className="button" value="Confirm Payment" />
        </div>
      </form>
    </div>
  );
};

export default Form;
