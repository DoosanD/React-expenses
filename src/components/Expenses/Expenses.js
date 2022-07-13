import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
// import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="trosak">Nema troškova za ovu godinu</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        datum={expense.date}
        product={expense.title}
        price={expense.amount}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      {/* // prvi nacin */}

      {/* {filteredExpenses.length === 0 ?
          <p style={{color: 'white', textAlign: 'center', fontSize: '2rem'}}>Nema troskova ove godine</p>
          :
          (filteredExpenses.map((expense) =>
              <ExpenseItem
                  key={expense.id}
                  datum={expense.date}
                  product={expense.title}
                  price={expense.amount}
              />
          )) } */}

      {/* // drugi nacin */}

      {/* {filteredExpenses.length === 0 &&  <p style={{color: 'white', textAlign: 'center', fontSize: '2rem'}}>Nema troskova ove godine</p>}
          {filteredExpenses.length > 0 &&
          (filteredExpenses.map((expense) =>
              <ExpenseItem
                  key={expense.id}
                  datum={expense.date}
                  product={expense.title}
                  price={expense.amount}
              />
          )) } */}

      {expensesContent}

      {/* {filteredExpenses.map((expense) =>
              <ExpenseItem
                  key={expense.id}
                  datum={expense.date}
                  product={expense.title}
                  price={expense.amount}
              />
          )} */}

      {/* {filteredExpenses.length === 0 ?
              (<p>Nema troškova za ovu godinu</p>)
              :
              (filteredExpenses.map((expense) =>
                  <ExpenseItem
                      key={expense.id}
                      datum={expense.date}
                      product={expense.title}
                      price={expense.amount}
                  />
              ))
          }
          {filteredExpenses.length === 0 && <p>Nema troškova za ovu godinu</p>}
          {filteredExpenses.length > 0 &&
          (filteredExpenses.map((expense) =>
                  <ExpenseItem
                      key={expense.id}
                      datum={expense.date}
                      product={expense.title}
                      price={expense.amount}
                  />
              ))} */}

      {/* {expensesContent} */}
    </Card>
  );
}

export default Expenses;
