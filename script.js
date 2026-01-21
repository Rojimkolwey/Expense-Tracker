const totalBalance = document.getElementById('totalBalance');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const transactionForm = document.getElementById('transactionForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const submitBtn = document.getElementById('submitBtn');


transactionForm.addEventListener('submit', function(e){
     e.preventDefault()

    const descriptionValue = description.value;
    const amountValue  = amount .value;
    const typeValue = type.value;


console.log(descriptionValue);
console.log(amountValue);
console.log(typeValue);

})


