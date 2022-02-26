    var hide = document.getElementById('buttn');
        hide.addEventListener('click', function () {
    const loginBtn = document.getElementById('loginFrom');
        loginBtn.style.display = "none";
    const nextPage = document.getElementById('nextPage')
        nextPage.style.display = 'block'
});

    const addDepositBtn = document.getElementById('addDepositBtn');

    addDepositBtn.addEventListener('click', function () {
    const currentDeposit = document.getElementById('depositAmount').value;
    const currentDepositNumber = parseFloat(currentDeposit);
    if (currentDepositNumber <= 0) {
        return null;
    }

    let currentDepositAmount = document.getElementById('currentDeposit').innerText;
    let depositAmount = parseFloat(currentDepositAmount);
    let depositAdBalance = currentDepositNumber + depositAmount;

    document.getElementById('currentDeposit').innerText = depositAdBalance;
    document.getElementById('depositAmount').value = "";

    let currentBalance = document.getElementById('currentBalance').innerText;
    let balanceNumber = parseFloat(currentBalance);
    let totalBalance = balanceNumber + currentDepositNumber;

    document.getElementById('currentBalance').innerText = totalBalance;
})
    document.getElementById('withdrawBtn').addEventListener('click', function(){
        const withdrawAmount = document.getElementById('withdrawAdd').value;
        const withdrawAmountNumber = parseFloat(withdrawAmount)
        if (withdrawAmountNumber <= 0) {
            return null;
        }
        const WithdrawMony = document.getElementById('withdrawMony').innerText;
        const withdrawNumber = parseFloat(WithdrawMony);

        let currentBalance = document.getElementById('currentBalance').innerText;
        let balanceNumber = parseFloat(currentBalance);
        
        const totalWithdraw = withdrawNumber + withdrawAmountNumber;

        document.getElementById('withdrawMony').innerText =totalWithdraw ;
        document.getElementById('currentBalance').innerText = balanceNumber - withdrawAmountNumber;
        document.getElementById('withdrawAdd').value = "";
        
    });
    