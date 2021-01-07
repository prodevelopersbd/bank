// Login Event Handler
const loginButton = document.getElementById("login");loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";

    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = 'block';
});


// Deposit Button Event Heldler 

const depositButton = document.getElementById("deposit");

depositButton.addEventListener('click',function(){
//    const deepositAmount = document.getElementById("depositAmount").value;
//    const depositNumber = parseFloat(deepositAmount);

    const depositNumber = getInputNumber("depositAmount");
   
   const currentDeposit = document.getElementById("currentDeposit").innerText;

   const currentDepositNumber = parseFloat(currentDeposit);
   const totalDeposit = depositNumber + currentDepositNumber; 

   document.getElementById("currentDeposit").innerText = totalDeposit;
   document.getElementById("depositAmount").value='';
   

});

// Widthdraw button handler 

    var withdrawButton = document.getElementById("withdraw");

    withdrawButton.addEventListener('click',function(){
        const widthdrawNumber = getInputNumber("withdrawAmount");
        console.log(widthdrawNumber);
    });

    function getInputNumber(id){
        const withdrawAmount = document.getElementById(id).value;        
        const widthdrawNumber = parseFloat(withdrawAmount);
        return widthdrawNumber;
    }