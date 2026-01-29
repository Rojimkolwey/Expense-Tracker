const totalBalance = document.getElementById('totalBalance');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const transactionForm = document.getElementById('transactionForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const submitBtn = document.getElementById('submitBtn');
const emptyMessage = document.getElementById('emptyMessage')

//fetch error ids
const descriptionError = document.getElementById('descriptionError');
const amountError = document.getElementById('amountError');


// const stringData = localStorage.getItem('transactions');
// const transactions = JSON.parse(stringData)

let transactions =[]


function showError(input, errorElement, message){
    errorElement.textContent = message;
    errorElement.classList.add('active');
    input.style.border="2px solid red";
}

//store data in local storage

function saveToLocalStorage(){

    // Convert array to string for saving
    const stringData =JSON.stringify(transactions);
    localStorage.setItem('transactions', stringData)
 
}

function loadFromLocalStorage(){
    const stringData = localStorage.getItem('transactions')

    if(stringData){

        transactions=JSON.parse(stringData)
    }
    if(transactions.length>0){
        emptyMessage.style.display='none';

    }
}



function displayTransaction(transaction){

       // 1. Create a list item (li)

    const li =document.createElement('li')


    // 2. Add the 'transaction-item' class to it

li.classList.add('transaction-item');


    // 3. Set the inner HTML with the transaction details

    li.innerHTML=`
       <div class="transaction-info">
            <h4>${transaction.description}</h4>
            <p>${transaction.type}</p>
        </div>
        <span class="transaction-amount ${transaction.type}">
            $${transaction.amount}
        </span>
        <button class="btn-delete" data-id='${transaction.id}'>Delete</button>
    `;

  // Add the li to the transaction list
    transactionList.appendChild(li);


//delete transaction

const deleteBtn = li.querySelector('.btn-delete');
deleteBtn.addEventListener('click', function(){
const id =transaction.id;

const index = transactions.findIndex(t=>t.id ===id);

if(index !== -1){
    transactions.splice(index, 1);
}
saveToLocalStorage();
li.remove();
updateBalance();

console.log('Transactions after delete:' , transactions);

})



}

//update Balance
    function updateBalance(){

        let income = 0;
        let expense = 0;


        for(let i=0; i<transactions.length; i++){
            const transaction=transactions[i];

            if(transaction.type === 'income'){
                income += transaction.amount;
            }
            else if(transaction.type=== 'expense'){
                expense += transaction.amount;
            }


        }
 const balance = income - expense;

  console.log('income:', income);
  console.log('expense:', expense);
  console.log('balance:', balance);

  // update the displays

totalIncome.textContent = `$${income.toFixed(2)}`;
totalExpense.textContent = `$${expense.toFixed(2)}`;
totalBalance.textContent = `$${balance.toFixed(2)}`;
    
    
    }

transactionForm.addEventListener('submit', function(e){
     e.preventDefault()

    const descriptionValue = description.value;
    const amountValue  = amount .value;
    const typeValue = type.value;




//inputs validations

    if(descriptionValue ===''){

     showError(description, descriptionError, "Enter description")
 return;
    }
    if(transactions.length > 0){
        emptyMessage.style.display='none';
    }

    if (transactions.length === 0) {
  emptyMessage.style.display = 'block';
}

    else if(amountValue === '' || amountValue <= 0){

        showError(amount, amountError, "Enter a valid amount greater than zero")
 return;
    }
  

console.log('validation passed');



//c object create

const transaction ={

    id:Date.now(),
    description:(descriptionValue),
    amount:parseFloat(amountValue),
    type:typeValue,
}
console.log(transaction)

//log in data in the array

transactions.push(transaction);
saveToLocalStorage();
displayTransaction(transaction);
updateBalance();

emptyMessage.style.display='none';


// Clear form inputs
description.value = '';
amount.value = '';
type.value ='expense';



})

// Load data when page loads
loadFromLocalStorage();

// Display all loaded transactions
transactions.forEach(transaction => {
    displayTransaction(transaction);
});



