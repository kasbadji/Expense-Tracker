import { CATEGORIES } from "../constants/categories";
import { formatCurrency } from "../utils/formatters";

export default function TransactionList({
  transactions,
  selectedCategory,
  onCategoryChange,
  onDeleteTransaction,
}) {
  return (
    <section className="panel">
      <div className="history-header">
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
              {transactions.map((transaction) => {
                const isIncome = transaction.type === "Income";
                return (
                  <tr key={transaction.id}>
                    <td className="description">{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <span className={`badge ${transaction.type.toLowerCase()}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className={isIncome ? "green" : "red"}>
                      {isIncome ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td>
                      <button
                        className="delete-button"
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