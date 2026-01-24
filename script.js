const totalBalance = document.getElementById('totalBalance');
const transactionList = document.getElementById('transactionList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');
const transactionForm = document.getElementById('transactionForm');
const description = document.getElementById('description');
const amount = document.getElementById('amount');
const type = document.getElementById('type');
const submitBtn = document.getElementById('submitBtn');

//fetch error ids



const descriptionError = document.getElementById('descriptionError');
const amountError = document.getElementById('amountError');

let transactions =[]


function showError(input, errorElement, message){
    errorElement.textContent = message;
    errorElement.classList.add('active');
    input.style.border="2px solid red";
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
        <button class="btn-delete">Delete</button>
    `;

  // Add the li to the transaction list
    transactionList.appendChild(li);


    

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
console.log(transactions)

    transactions.push(transaction);
displayTransaction(transaction);





})

