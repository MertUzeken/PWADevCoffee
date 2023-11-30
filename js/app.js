const container = document.querySelector(".container");



let transactions = [];
let totalBalance = 0;

function submitForm(event) {
  
  event.preventDefault();
  const description = document.getElementById('description').value;
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  const transaction = { description, date, category, amount };
  transactions.push(transaction);

  console.log("SubmitForm wurde ausgelöst")
  console.table(transaction);

  displayTransactions();
  updateBalance();
  clearForm();

}

function displayTransactions() {
  const transactionTableBody = document.getElementById('transactionList');
  const newRow = transactionTableBody.insertRow();

  transactions.forEach(transaction => {
    const newRow = transactionTableBody.insertRow();
    const cellDescription = newRow.insertCell();
    const cellDate = newRow.insertCell();
    const cellCategory = newRow.insertCell();
    const cellAmount = newRow.insertCell();

    cellDescription.textContent = transaction.description;
    cellDate.textContent = transaction.date;
    cellCategory.textContent = transaction.category;
    cellAmount.textContent = transaction.amount.toFixed(2);
  });
}

function updateBalance() {
  totalBalance = 0;
  totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  document.getElementById('balance').value = totalBalance.toFixed(2);
}

function clearForm() {
  document.getElementById('description').value = '';
  document.getElementById('date').value = '';
  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
}


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
     .register("./serviceWorker.js",{ scope: "./" })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
