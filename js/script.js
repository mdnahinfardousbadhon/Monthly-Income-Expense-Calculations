function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);
    return inputAmountValue;
};


document.getElementById('calculate-btn').addEventListener('click', function(){

        // Calling a Function
        const salaryAmount = getInputValue('salary-input');
        const foodAmount = getInputValue('food-input');
        const rentAmount = getInputValue('rent-input');
        const clothesAmount = getInputValue('clothes-input');

        // Get Total Expense
        const totalExpense = document.getElementById('total-expense');
        const totalExpenseText = totalExpense.innerText;
        const totalExpenseAmountText = parseFloat(totalExpenseText);
        const totalExpenseAmount = totalExpenseAmountText + foodAmount + rentAmount + clothesAmount;
        totalExpense.innerText = totalExpenseAmount;


        // Get Total Balance Now
        const totalBalance = document.getElementById('balance-now');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmountText = parseFloat(totalBalanceText);
        const totalBalanceAmount = totalBalanceAmountText + salaryAmount - totalExpenseAmount;
        totalBalance.innerText = totalBalanceAmount;
    
    
    
    document.getElementById('save-btn').addEventListener('click', function(){

        // Get Saving Perchantage
        const saveInput = document.getElementById('save-input');
        const saveInputText = saveInput.value;
        const savingPercentage = parseFloat(saveInputText);
        const savingCalculateAmount = savingPercentage / 100 * totalBalanceAmount;

        // Get Saving Balance
        const savingBalance = document.getElementById('saving-amount');
        const savingBalanceText = savingBalance.innerText;
        const savingBalanceAmountText = parseFloat(savingBalanceText);
        const savingBalanceAmount = savingBalanceAmountText + savingCalculateAmount;
        savingBalance.innerText = savingBalanceAmount;

        // Get Remaining Balance
        const remainingBalance = document.getElementById('remaining-balance');
        const remainingBalanceText = remainingBalance.innerText;
        const remainingBalanceAmountText = parseFloat(remainingBalanceText);
        const remainingBalanceAmount = remainingBalanceAmountText + totalBalanceAmount - savingBalanceAmount;
        remainingBalance.innerText = remainingBalanceAmount;
    
    });



});

