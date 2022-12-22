import React, { useState } from "react";
import Card from "./Card";

const Stack = ({ id, clrName }) => {
  const [cardList, setCardList] = useState([]);

  const setCardListHandler = (e) => {
    if (e.target.id === "add") {
      return [...cardList, {}];
    } else if (e.target.id === "dlt") {
      // delete card from the cardList
    }
  };

  return (
    <div className="stack">
      <div className="header">
        <span>{clrName}</span>
        <button onClick={setCardListHandler} id="add">
          Add
        </button>
      </div>
      {cardList.map((item) => (
        <Card item={item} color={id} deleteCard={setCardListHandler} />
      ))}
    </div>
  );
};

export default Stack;
