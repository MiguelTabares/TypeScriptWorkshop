// 2. Diseñar una clase para representar una cuenta bancaria:
//    a. La clase debe tener propiedades para el número de cuenta, el saldo y el nombre del titular.
//    b. Definir métodos para depositar, retirar y consultar el saldo de la cuenta.
//    c. Crear dos objetos de cuenta bancaria diferentes y realizar operaciones sobre ellos.
var BankAccount = /** @class */ (function () {
    function BankAccount(numberAccount, funds, ownerName) {
        this.numberAccount = numberAccount;
        this.funds = funds;
        this.ownerName = ownerName;
    }
    BankAccount.prototype.toDeposit = function (value) {
        // An acum
        // this.funds = this.funds + total;
        this.funds += value;
        return "The amount deposited to the bank account is: ".concat(value, ". The new value of your funds is: ").concat(this.funds);
    };
    BankAccount.prototype.toWithdraw = function (withdrawnValue) {
        if (this.funds >= withdrawnValue) {
            this.funds -= withdrawnValue;
            return "The amount to be withdrawn to the bank account is: ".concat(withdrawnValue, ". The new of your funds is: ").concat(this.funds);
        }
        else {
            return "You have insufficient funds in your bank account";
        }
    };
    BankAccount.prototype.toConsult = function () {
        return "The amount in your bank account is: ".concat(this.funds);
    };
    return BankAccount;
}());
var account1 = new BankAccount(30177251440, 10000000, 'Miguel Tabares');
var account2 = new BankAccount(31266294230, 20000000, 'Nury Cuadros');
console.log(account1.toConsult());
console.log(account1.toDeposit(100000));
console.log(account1.toWithdraw(100000));
console.log(account2.toConsult());
console.log(account1.toDeposit(200000));
console.log(account1.toWithdraw(200000));
