import { formatCurrency } from "../utils/formatters";

export default function SummaryCards({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  return (
    <section className="cards">
      <div className="card balance">
        <p>Current Balance</p>
        <h2>{formatCurrency(currentBalance)}</h2>
      </div>

      <div className="card income">
        <p>Total Income</p>
        <h2>+{formatCurrency(totalIncome)}</h2>
      </div>

      <div className="card expense">
        <p>Total Expenses</p>
        <h2>-{formatCurrency(totalExpenses)}</h2>
      </div>

      <div className="card transactions">
        <p>Transactions</p>
        <h2>{transactions.length}</h2>
      </div>
    </section>
  );
}