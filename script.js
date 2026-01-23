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


transactionForm.addEventListener('submit', function(e){
     e.preventDefault()

    const descriptionValue = description.value;
    const amountValue  = amount .value;
    const typeValue = type.value;


    
//c object create

const transaction ={

    id:Date.now(),
    description:(descriptionValue),
    amount:parseFloat(amountValue),
    type:typeValue,
}
console.log(transaction)


//log in data in the array

transactions.push(transactions);
console.log(transactions)


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

})
