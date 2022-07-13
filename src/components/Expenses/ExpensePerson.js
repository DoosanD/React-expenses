import React, { useState } from "react";
import "./ExpensePerson.css";
import Ime from "./ExpensePersonName";

function ExpensePerson(props) {
  //const ime = props.person.name;
  const prezime = props.person.lastName;
  const zanimanje = props.person.occupation;
  let plata = props.person.income;

  let [ime, setPlata] = useState(props.person.name);

  const handleClick = () => {
    setPlata("Nova plata");
    console.log(ime);
  };

  return (
    <div className="expense-person">
      <div>{ime}</div>
      <div>{prezime}</div>
      <div>{zanimanje}</div>
      <div>{plata ? "Prima platu" : "Bez plate"}</div>
      <Ime name={ime ? "True" : "False"}></Ime>
      <button onClick={handleClick}>$$$</button>
    </div>
  );
}

export default ExpensePerson;
