class BankAccount {
    static define(startingBalance) {
        return this.balance = startingBalance
    }
    static deposit(amount) {
        this.balance = tambahSaldo(this.balance, amount)
        return this.balance
    }
    static withdraw(amount) {
        this.balance = kurangiSaldo(this.balance, amount)
        return this.balance
    }
}

function init(startingBalance, typeOperation) {
    let saldo = startingBalance;
    if (isNaN(saldo) || saldo < 0) {
        alert("Please enter a number or a positive number")
        return init(+window.prompt("Enter starting balance"), typeOperation)
    }
    if (!typeOperation) {
        typeOperation = window.prompt("Enter another operation: deposit, withdraw, or stop")
    }
    saldo = BankAccount.define(saldo)
    if (typeOperation === "stop" || !typeOperation) { return }
    else if (typeOperation === "deposit") {
        let deposit = +window.prompt("Enter amount to deposit")
        if (isNaN(deposit) || deposit < 0) {
            alert("Please enter a number or a positive number")
            return init(saldo, typeOperation)
        }
        saldo = BankAccount.deposit(deposit)
    } else if (typeOperation === "withdraw") {
        let withdraw = +window.prompt("Enter amount to withdraw")
        if (isNaN(withdraw) || withdraw < 0 || withdraw > saldo) {
            alert("Please enter a number, a positive number, or a number lesser than your balance")
            return init(saldo, typeOperation)
        }
        saldo = BankAccount.withdraw(withdraw)
    } else {
        return init(saldo, window.prompt("Enter another operation: deposit, withdraw, or stop"))
    }
    alert("Your new balance is " + saldo)
    typeOperation = window.prompt("Enter another operation: deposit, withdraw, or stop")
    return init(saldo, typeOperation)
}

init(, "")

function tambahSaldo(balance, deposit) {
    return balance + deposit;
}

function kurangiSaldo(balance, withdraw) {
    return balance - withdraw;
}

function queries(query) {
    return +window.prompt(query)
}