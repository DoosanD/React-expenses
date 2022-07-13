import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleChangeTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleChangeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleChangeDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHanlder = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(enteredData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={handleChangeAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-07-31"
            onChange={handleChangeDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={props.onCancel}
          style={{
            background: "transparent",
            border: "none",
            color: "#40005d",
          }}
        >
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
