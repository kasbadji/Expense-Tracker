import { CATEGORIES } from "../constants/categories";
import { formatCurrency } from "../utils/formatters";
import styles from "./TransactionList.module.css";

export default function TransactionList({
  transactions,
  selectedCategory,
  onCategoryChange,
  onDeleteTransaction,
}) {
  return (
    <section className={styles.panel}>
      <div className={styles.historyHeader}>
        <div>
          <h2>Transaction History</h2>
          <p>All your income and expenses in one place.</p>
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {transactions.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>↕</div>
          <h3>No transactions found</h3>
          <p>Add a transaction to see it in your history.</p>
        </div>
      ) : (
        <div className={styles.tableContainer}>
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
              {transactions.map((transaction) => {
                const isIncome = transaction.type === "Income";
                return (
                  <tr key={transaction.id}>
                    <td className={styles.description}>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <span
                        className={
                          isIncome ? styles.incomeBadge : styles.expenseBadge
                        }
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td
                      className={
                        isIncome ? styles.incomeAmount : styles.expenseAmount
                      }
                    >
                      {isIncome ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td>
                      <button
                        className={styles.deleteButton}
                        onClick={() => onDeleteTransaction(transaction.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}