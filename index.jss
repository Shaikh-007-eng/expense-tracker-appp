const form = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

const renderExpenses = () => {
  expenseList.innerHTML = ''; // Clear the current list
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.textContent = `${expense.description}: $${expense.amount}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      expenses.splice(index, 1);
      localStorage.setItem('expenses', JSON.stringify(expenses));
      renderExpenses();
    };

    li.appendChild(deleteBtn);
    expenseList.appendChild(li);
  });
};

form.onsubmit = (e) => {
  e.preventDefault();
  
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;

  if (description && amount) {
    expenses.push({ description, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    form.reset(); // Clear the input fields
  }
};

// Initial render
renderExpenses();
