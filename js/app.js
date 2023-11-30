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

function displayTransactions(){
  const transactionObj = document.getElementById('transactionList')
  transactionList.innerHTML = '';

  //Call Array, append all elements as li HTML
  transactions.forEach(element => {
    const listItem = document.createElement('li');
    listItem.textContent = `${element.description} - ${element.date} - ${element.category} - ${element.amount.toFixed(2)}`;
    transactionList.appendChild(listItem);
  });
}

function updateBalance() {
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
