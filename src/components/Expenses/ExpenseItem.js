import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [nazivProizvoda, setNazivProizvoda] = useState(props.product);
  const handleClick = () => {
    setNazivProizvoda("Novi proizvod");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.datum} />
      <div className="expense-item__description">
        <h2>{nazivProizvoda}</h2>
        <div className="expense-item__price">RSD {props.price}</div>
      </div>
      <button onClick={handleClick}>Promeni naziv proizvoda</button>
    </Card>
  );
}

export default ExpenseItem;
