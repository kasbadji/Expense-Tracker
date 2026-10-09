import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <h1>Expense Tracker</h1>
        <p>Manage your money and track your transactions.</p>
      </div>
    </header>
  );
}