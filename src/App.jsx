import { useState } from "react";

export default function App() {
  const [a, sa] = useState([]);
  const [b, sb] = useState("");
  const [c, sc] = useState("");
  const [d, sd] = useState("Food");
  const [e, se] = useState("All");

  function f() {
    if (b === "" || c === "" || isNaN(c) || Number(c) <= 0) {
      alert("Invalid input");
      return;
    }

    let x = {
      id: Date.now(),
      name: b,
      amount: Number(c),
      category: d
    };

    sa([...a, x]);
    sb("");
    sc("");

  }

  function g(id) {
    sa(a.filter((x) => x.id !== id));
  }

  let h = 0;

  for (let i = 0; i < a.length; i++) {
    h = h + a[i].amount;
  }

  let j = a;

  if (e !== "All") {
    j = a.filter((x) => x.category === e);
  }

  return (
  <div style={{ padding: "30px", fontFamily: "Arial" }}> <h1>Expense Tracker</h1>

    <h2>Total: ${h.toFixed(2)}</h2>

    <input
      placeholder="Expense name"
      value={b}
      onChange={(ev) => sb(ev.target.value)}
    />

    <input
      placeholder="Amount"
      type="number"
      value={c}
      onChange={(ev) => sc(ev.target.value)}
    />

    <select value={d} onChange={(ev) => sd(ev.target.value)}>
      <option>Food</option>
      <option>Transport</option>
      <option>Shopping</option>
      <option>Other</option>
    </select>

    <button onClick={f}>Add Expense</button>

    <br />
    <br />

    <select value={e} onChange={(ev) => se(ev.target.value)}>
      <option>All</option>
      <option>Food</option>
      <option>Transport</option>
      <option>Shopping</option>
      <option>Other</option>
    </select>

    <ul>
      {j.map((x) => (
        <li key={x.id}>
          {x.name} - ${x.amount.toFixed(2)} - {x.category}
          <button onClick={() => g(x.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
}
