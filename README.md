# Expense Tracker — Demonstration Before & After Clean Code

An expense tracker application built with React and Vite, designed to demonstrate the practical impact of Clean Code principles and software refactoring.

This repository contains two distinct branches allowing a side-by-side comparison between an unstructured monolithic implementation and a maintainable, modular architecture.

---

## Project Branches

| Branch | Description |
| :--- | :--- |
| poor-code / main | Monolithic Version: All code, state management, and UI rendering squeezed into a single App.jsx file. Cryptic naming and imperative logic. |
| clean-code | Refactored Version: Modular components (CSS Modules), Single Responsibility Principle (SRP), utility helpers, and explicit naming. |

---

## Comparative Analysis: Bad Code vs. Clean Code

### 1. Structure & Single Responsibility Principle (SRP)
* Poor Code: The root component simultaneously manages form state, category filters, financial calculation logic, validation, and full JSX rendering.
* Clean Code: Decomposed into specialized, independent components:
  * Header — Application header.
  * SummaryCards — Balance, income, and expense totals display.
  * TransactionForm — Transaction input management and validation.
  * TransactionList — History table display and category filtering.

### 2. Readability & Naming Conventions
* Poor Code: Cryptic variable and function names (a, b, c, d, e, f, g(), h(), i, j, k, l).
* Clean Code: Explicit, self-documenting identifiers (transactions, selectedCategory, handleAddTransaction, formatCurrency).

### 3. Calculation Logic
* Poor Code: Uses a manual, imperative for loop to accumulate financial totals:
  let i = 0, j = 0;
  for (let k = 0; k < a.length; k++) { ... }
* Clean Code: Declarative approach leveraging modern higher-order array methods (.filter(), .reduce()):
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

### 4. Styles & CSS Modularity
* Poor Code: Monolithic global CSS file susceptible to selector conflicts and class naming collisions.
* Clean Code: Style encapsulation using CSS Modules (*.module.css) co-located with each component.

---

## Project Architecture (clean-code branch)

src/
├── components/
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── SummaryCards.jsx
│   ├── SummaryCards.module.css
│   ├── TransactionForm.jsx
│   ├── TransactionForm.module.css
│   ├── TransactionList.jsx
│   └── TransactionList.module.css
├── constants/
│   └── categories.js
├── utils/
│   └── formatters.js
├── App.jsx
├── index.css
└── main.jsx

---

## Tech Stack

* Framework: React
* Build Tool: Vite
* Styling: CSS Modules
* Version Control: Git & GitHub

---

## Getting Started

1. Clone the repository:
   git clone https://github.com/kasbadji/Expense-Tracker.git
   cd Expense-Tracker

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Switch branches to compare implementations:
   # View the monolithic bad code version
   git checkout poor-code

   # View the refactored clean code version
   git checkout clean-code
