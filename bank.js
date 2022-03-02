    var hide = document.getElementById('buttn');
        hide.addEventListener('click', function () {
    const loginBtn = document.getElementById('loginFrom');
        loginBtn.style.display = "none";
    const nextPage = document.getElementById('nextPage')
        nextPage.style.display = 'block'
});
// function(1) for take input value
function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// function(2) for take inner text value
function getInnerText(id) {
    let currentBalance = document.getElementById(id).innerText;
let balanceNumber = parseFloat(currentBalance);
return balanceNumber;
}
document.getElementById('addDepositBtn').addEventListener('click', function () {
    const deposit = getInputNumber('depositAmount');
    const depositAmount = getInnerText('currentDeposit');
    let depositAdBalance = deposit + depositAmount;

    document.getElementById('currentDeposit').innerText = depositAdBalance;
    document.getElementById('depositAmount').value = "";

    const balance = getInnerText('currentBalance');
    let totalBalance = balance + deposit;
    document.getElementById('currentBalance').innerText = totalBalance;
})
document.getElementById('withdrawBtn').addEventListener('click', function(){
    const withdraw = getInputNumber('withdrawAdd');
    const withdrawNumber = getInnerText('withdrawMony');
    const balanceNumber = getInnerText('currentBalance');
    const totalWithdraw = withdrawNumber + withdraw;

    document.getElementById('withdrawMony').innerText =totalWithdraw ;
    document.getElementById('currentBalance').innerText = balanceNumber - withdraw;
    document.getElementById('withdrawAdd').value = "";
    })
    

    