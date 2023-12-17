document.getElementById("deposit-btn").addEventListener("click", function () {
   const depositInputField = document.getElementById("deposit-input-field");
   const depositInputFieldString = depositInputField.value;
   depositInputField.value = "";
   const newDepositField = parseFloat(depositInputFieldString);

   if (isNaN(newDepositField)) {
      alert("please input a valid number");
      return;
   }

   const depositText = document.getElementById("deposit");
   const depositTextString = depositText.innerText;
   const newDepositText = parseFloat(depositTextString);

   const balance = document.getElementById("Balance");
   const balanceTextString = balance.innerText;
   const newBalance = parseFloat(balanceTextString);

   const currentDeposit = newDepositField + newDepositText;
   depositText.innerText = currentDeposit;

   const currentBalance = currentDeposit + newBalance;
   balance.innerText = currentBalance;
});
