function tambahSaldo(balance, deposit) {
    return balance + deposit;
}

function kurangiSaldo(balance, withdraw) {
    return balance - withdraw;
}

class BankAccount {
    static define(startingBalance) {
        this.balance = startingBalance
    }
    static deposit(amount) {
        this.balance = tambahSaldo(this.balance, amount)
        return this.balance
    }
    static withdraw(amount) {
        this.balance = kurangiSaldo(this.balance, amount)
        return this.balance
    }
    static getBalance() {
        return this.balance
    }
}