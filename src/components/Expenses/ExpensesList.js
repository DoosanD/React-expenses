import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // let expensesContent = <p>Nema troškova za ovu godinu</p>

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          datum={expense.date}
          product={expense.title}
          price={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
