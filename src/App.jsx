import { useState } from "react";

const categories = ["Food", "Transport", "Shopping", "Salary", "Other"];

export default function App() {
  const [a, sa] = useState([]);
  const [b, sb] = useState("");
  const [c, sc] = useState("");
  const [d, sd] = useState("Expense");
  const [e, se] = useState("Food");
  const [f, sf] = useState("All");

  function g() {
    if (b.trim() === "" || c === "" || isNaN(c) || Number(c) <= 0) {
      alert("Please enter a valid description and amount");
      return;
    }

    let x = {
      id: Date.now(),
      name: b,
      amount: Number(c),
      type: d,
      category: e,
      date: new Date().toLocaleString()
    };

    sa([...a, x]);
    sb("");
    sc("");
  }

  function h(id) {
    sa(a.filter((x) => x.id !== id));
  }

  let i = 0;
  let j = 0;

  for (let k = 0; k < a.length; k++) {
    if (a[k].type === "Income") {
      i = i + a[k].amount;
    } else {
      j = j + a[k].amount;
    }
  }

  let k = i - j;
  let l = a;

  if (f !== "All") {
    l = a.filter((x) => x.category === f);
  }

return ( 
  <div className="app"> 
    <header className="header"> 
      <div> <h1>Expense Tracker</h1> 
        <p>Manage your money and track your transactions.</p> 
      </div> 
    </header>

    <main>
      <section className="cards">
        <div className="card balance">
          <p>Current Balance</p>
          <h2>{k.toFixed(2)} DZ</h2>
        </div>

        <div className="card income">
          <p>Total Income</p>
          <h2>+{i.toFixed(2)} DZ</h2>
        </div>

        <div className="card expense">
          <p>Total Expenses</p>
          <h2>-{j.toFixed(2)} DZ</h2>
        </div>

        <div className="card transactions">
          <p>Transactions</p>
          <h2>{a.length}</h2>
        </div>
      </section>

      <section className="panel">
        <h2>Add Transaction</h2>

        <div className="form">
          <input
            placeholder="Description"
            value={b}
            onChange={(ev) => sb(ev.target.value)}
          />

          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="Amount (DZ)"
            value={c}
            onChange={(ev) => sc(ev.target.value)}
          />

          <select value={d} onChange={(ev) => sd(ev.target.value)}>
            <option value="Expense">Expense (-)</option>
            <option value="Income">Income (+)</option>
          </select>

          <select value={e} onChange={(ev) => se(ev.target.value)}>
            {categories.map((x) => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>

          <button className="add-button" onClick={g}>
            + Add
          </button>
        </div>
      </section>

      <section className="panel">
        <div className="history-header">
          <div>
            <h2>Transaction History</h2>
            <p>All your income and expenses in one place.</p>
          </div>

          <select value={f} onChange={(ev) => sf(ev.target.value)}>
            <option value="All">All Categories</option>
            {categories.map((x) => (
              <option key={x} value={x}>{x}</option>
            ))}
          </select>
        </div>

        {l.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">↕</div>
            <h3>No transactions found</h3>
            <p>Add a transaction to see it in your history.</p>
          </div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {l.map((x) => (
                  <tr key={x.id}>
                    <td className="description">{x.name}</td>
                    <td>{x.category}</td>
                    <td>{x.date}</td>
                    <td>
                      <span className={"badge " + x.type.toLowerCase()}>
                        {x.type}
                      </span>
                    </td>
                    <td className={x.type === "Income" ? "green" : "red"}>
                      {x.type === "Income" ? "+" : "-"}
                      {x.amount.toFixed(2)} DZ
                    </td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => h(x.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>

    <footer>Poor Code Version</footer>
  </div>

  );
}
