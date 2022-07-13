import ExpensePerson from "../components/Expenses/ExpensePerson";

const person = [
  {
    id: "p1",
    name: "Boban",
    lastName: "Kokic",
    occupation: "Cistac",
    income: true,
  },
  {
    id: "p2",
    name: "Miodrag",
    lastName: "Papic",
    occupation: "Doktor",
    income: false,
  },
  {
    id: "p3",
    name: "Denis",
    lastName: "Panic",
    occupation: "Kelner",
    income: true,
  },
];

export default function PersonPage() {
  return (
    <div>
      <h2 className="header">Najvece trosadzije u kuci</h2>
      <ExpensePerson person={person[0]} />
      <ExpensePerson person={person[1]} />
      <ExpensePerson person={person[2]} />
    </div>
  );
}
