import React, { useState } from "react";
import "./Form.css";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { addCardItem } from "../../redux/action";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.cards);
  const [cardInfo, setCardInfo] = useState({
    id: store.length,
    "cc-name": "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      name !== "cc-name"
        ? parseInt(e.target.value.split(" ").join(""))
        : e.target.value;

    setCardInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(addCardItem(cardInfo));
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="form-header">
        <img src="assets/header-logo.svg" alt="logo" />
        <Link to="/cards">
          <h1>Cards</h1>
        </Link>
      </div>

      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>
            <p className="form-label-text">Full Name</p>

            <input
              className="form-input-text"
              name="cc-name"
              type="text"
              required
              placeholder="Name"
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>

        <div>
          <label>
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
                  name="cc-number"
                  type="text"
                  required
                />
              )}
            </InputMask>
          </label>
        </div>

        <div className="form-group-input">
          <div className="group-first-item">
            <label>
              <p className="form-label-text">Exp Date</p>
            </label>
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
                  name="cc-exp"
                  required
                  type="text"
                />
              )}
            </InputMask>
          </div>

          <div className="group-last-item">
            <label>
              <p className="form-label-text">CVV</p>
            </label>
            <InputMask
              mask="999"
              maskChar=""
              placeholder="•••"
              onChange={(e) => handleChange(e)}
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  className="form-input-text"
                  name="cc-csc"
                  required
                  type="text"
                />
              )}
            </InputMask>
          </div>
        </div>

        <div>
          <label>
            <p className="form-label-text">Zip Code</p>
          </label>
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
                name="postal-code"
                type="text"
                required
              />
            )}
          </InputMask>
        </div>
        <div>
          <input type="submit" className="button" value="Confirm Payment" />
          {error && (
            <label className="error-message">
              Error! This card number already exist!
            </label>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
