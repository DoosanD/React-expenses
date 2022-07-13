import React, { useState } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import ChartBar from "../components/Chart/ChartBar";

const DUMMY = [
  {
    id: "e1",
    title: "Toalet papir",
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Televizor", amount: 35000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Benzin",
    amount: 25000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Ugaona garnitura",
    amount: 65000,
    date: new Date(2021, 5, 12),
  },
];

export default function HomePage(props) {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ChartBar />
      <Expenses items={expenses} />
    </div>
  );
}
