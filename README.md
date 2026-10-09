# Expense Tracker — Demonstration Before & After Clean Code

Un projet d'application de gestion de dépenses développé avec **React** et **Vite**, conçu pour illustrer concrètement l'impact des principes du **Clean Code** et de la **refactorisation logicielle**.

Ce dépôt comporte deux branches distinctes permettant de comparer côte à côte une implémentation monolithique non structurée et une architecture modulaire et maintenable.

---

## Branches du Projet

| Branche | Description |
| :--- | :--- |
| **`poor-code`** | **Version Monolithique :** Tout le code, la logique d'état et le rendu sont regroupés dans un unique fichier `App.jsx`. Nommage cryptique et logique impérative. |
| **`clean-code`** | **Version Refactorisée :** Composants modulaires (CSS Modules), séparation des responsabilités (SRP), helpers utilitaires et nommage explicite. |

---

## 🔍 Analyse Comparative : Bad Code vs Clean Code

### 1. Structure et Responsabilité Unique (SRP)
* **Poor Code :** Le composant principal gère simultanément l'état du formulaire, les filtres de catégories, la logique de calcul financier, la validation et tout le rendu JSX.
* **Clean Code :** Découpage en composants spécialisés et indépendants :
  * `Header` — En-tête de l'application.
  * `SummaryCards` — Affichage du solde, des revenus et des dépenses.
  * `TransactionForm` — Gestion et validation de la saisie d'une transaction.
  * `TransactionList` — Affichage de l'historique et filtrage par catégorie.

### 2. Lisibilité et Nommage
* **oor Code :** Variables et fonctions aux noms opaques (`a`, `b`, `c`, `d`, `e`, `f`, `g()`, `h()`, `i`, `j`, `k`, `l`).
* **Clean Code :** Identifiants explicites et auto-documentés (`transactions`, `selectedCategory`, `handleAddTransaction`, `formatCurrency`).

### 3. Logique de Calcul
* **Poor Code :** Utilisation d'une boucle impérative `for` manuelle pour calculer les totaux :
  ```javascript
  let i = 0, j = 0;
  for (let k = 0; k < a.length; k++) { ... }
