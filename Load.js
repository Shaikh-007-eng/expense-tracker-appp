function saveExpenseToLocalStorage(description, amount) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push({ description, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
