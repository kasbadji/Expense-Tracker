export function formatCurrency(amount) {
  return `${amount.toFixed(2)} DZ`;
}

export function formatDate(date = new Date()) {
  return date.toLocaleString();
}