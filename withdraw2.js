document.getElementById("Withdraw-btn").addEventListener("click", function () {
   const WithdrawINputField = document.getElementById("Withdraw-input");
   const WithdrawInputFieldString = WithdrawINputField.value;
   WithdrawINputField.value = "";
   const newWithdrawInput = parseFloat(WithdrawInputFieldString);

   if (isNaN(newWithdrawInput)) {
      alert("please input is a number");
      return;
   }

   const WithdrawText = document.getElementById("Withdraw-text");
   const WithdrawTextString = WithdrawText.innerText;
   const newWithdrawText = parseFloat(WithdrawTextString);

   const balance = document.getElementById("Balance");
   const balanceTextString = balance.innerText;
   const newBalance = parseFloat(balanceTextString);

   if (newBalance < newWithdrawInput) {
      alert("please balance is low");
      return;
   }

   const currentWithdraw = newWithdrawInput + newWithdrawText;
   WithdrawText.innerText = currentWithdraw;

   const currentBalance = newBalance - newWithdrawInput;
   balance.innerText = currentBalance;
});
