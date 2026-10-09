import { useState } from "react";
import { CATEGORIES } from "../constants/categories";

export default function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState(CATEGORIES[0]);

  function handleSubmit(event) {
    event.preventDefault();

    const parsedAmount = Number(amount);
    if (!description.trim() || isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid description and positive amount.");
      return;
    }

    onAddTransaction({
      description: description.trim(),
      amount: parsedAmount,
      type,
      category,
    });

    setDescription("");
    setAmount("");
  }

  return (
    <section className="panel">
      <h2>Add Transaction</h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount (DZ)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="Expense">Expense (-)</option>
          <option value="Income">Income (+)</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button type="submit" className="add-button">
          + Add
        </button>
      </form>
    </section>
  );
}