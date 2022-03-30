import React from "react";
import { useSelector } from "react-redux";

import "./CardsList.css";

const CardsList = () => {
  const state = useSelector((store) => store.cards);
  return (
    <div className="container">
      <h1>Cards List</h1>
      {state.map((card) => {
        const getLastNums = card["cc-number"].toString().slice(12, 16);
        console.log(getLastNums);

        return (
          <div className="card-item" key={card.id}>
            <p className="credit-card-numbers">•••• •••• •••• {getLastNums}</p>
            <p>{card["cc-name"]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsList;
