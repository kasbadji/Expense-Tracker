import { formatCurrency } from "../utils/formatters";
import styles from "./SummaryCards.module.css";

export default function SummaryCards({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const currentBalance = totalIncome - totalExpenses;

  return (
    <section className={styles.cards}>
      <div className={styles.card}>
        <p>Current Balance</p>
        <h2 className={styles.balanceValue}>{formatCurrency(currentBalance)}</h2>
      </div>

      <div className={styles.card}>
        <p>Total Income</p>
        <h2 className={styles.incomeValue}>+{formatCurrency(totalIncome)}</h2>
      </div>

      <div className={styles.card}>
        <p>Total Expenses</p>
        <h2 className={styles.expenseValue}>-{formatCurrency(totalExpenses)}</h2>
      </div>

      <div className={styles.card}>
        <p>Transactions</p>
        <h2 className={styles.transactionsValue}>{transactions.length}</h2>
      </div>
    </section>
  );
}