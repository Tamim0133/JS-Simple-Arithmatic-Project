const currentBalance = document.getElementById("current-balance");
const currentBalanceInt = parseFloat(currentBalance.innerText);
// console.log(currentBalanceInt);
function inputs(x) {
  const input = document.getElementById(x);
  const inputText = input.value;
  const inputInt = parseFloat(inputText);
  return inputInt;
  //   console.log(inputInt);
}
function depoOrWith(n) {
  const display = document.getElementById(n);
  const displayText = display.innerText;
  const displayInt = parseFloat(displayText);
  return displayInt;
}

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = inputs("diposit-field");
    const currentDeposit = depoOrWith("current-deposit");
    if (depositAmount > 0) {
      const newDeposit = depositAmount + currentDeposit;
      const newBalance = depositAmount + currentBalanceInt;
      document.getElementById("current-deposit").innerText = newDeposit;
      currentBalance.innerText = newBalance;
    } else {
      alert("Enter A valid Deposit Number");
    }
    document.getElementById("diposit-field").value = "";
  });
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = inputs("withdraw-amount");
    const currentWithdraw = depoOrWith("current-withdraw");
    if (withdrawAmount > 0 && withdrawAmount <= currentBalanceInt) {
      const newWithdraw = withdrawAmount + currentWithdraw;
      const newBalance = currentBalanceInt - withdrawAmount;
      document.getElementById("current-withdraw").innerText = newWithdraw;
      currentBalance.innerText = newBalance;
    } else {
      alert(
        "Enter A valid Withdraw Number & Your Withdraw Number Should be lower than your balance "
      );
    }
    document.getElementById("withdraw-amount").value = "";
  });
