import { useState } from "react";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import { formatDate } from "./utils/formatters";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleAddTransaction(newTransactionData) {
    const newTransaction = {
      id: crypto.randomUUID(),
      ...newTransactionData,
      date: formatDate(),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  }

  function handleDeleteTransaction(id) {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  }

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  return (
    <div className="app">
      <Header />

      <main>
        <SummaryCards transactions={transactions} />

        <TransactionForm onAddTransaction={handleAddTransaction} />

        <TransactionList
          transactions={filteredTransactions}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onDeleteTransaction={handleDeleteTransaction}
        />
      </main>

      <footer>Clean Code Version</footer>
    </div>
  );
}