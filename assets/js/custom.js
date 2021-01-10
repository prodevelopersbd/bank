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
   
    updateSpanText("currentDeposit",depositNumber);
    updateSpanText("currentBalance",depositNumber);
    
   document.getElementById("depositAmount").value='';

});
function updateSpanText(id,depositNumber){ 
    const currentBalance = document.getElementById(id).innerText;

    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

// Widthdraw button handler 

    var withdrawButton = document.getElementById("withdraw");

    withdrawButton.addEventListener('click',function(){
        const widthdrawNumber = getInputNumber("withdrawAmount");
        // console.log(widthdrawNumber);
        updateSpanText("currentWidthdraw", widthdrawNumber);
        updateSpanText("currentBalance", -1 * widthdrawNumber);
        document.getElementById("withdrawAmount").value="";
    });

    function getInputNumber(id){
        const withdrawAmount = document.getElementById(id).value;        
        const widthdrawNumber = parseFloat(withdrawAmount);
        return widthdrawNumber;
    }



