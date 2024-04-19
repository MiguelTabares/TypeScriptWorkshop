// 2. Design a class to represent a bank account:
//    a. The class must have properties for the account number, balance, and holder's name.
//    b. Define methods for depositing, withdrawing, and querying the account balance.
//    c. Create two different bank account objects and perform operations on them.

// AGREGAR LOS MODIFICADORES DE ACCESO (private)
// AGREGAR UN IDENTIFICADOR DE CUENTA (id)

class BankAccount {
    numberAccount: number;
    funds: number;
    ownerName: string;

    constructor(numberAccount: number, funds: number, ownerName: string){
        this.numberAccount = numberAccount;
        this.funds = funds;
        this.ownerName = ownerName;
    }

    toDeposit(value: number){
        // An acum
        // this.funds = this.funds + total;
        this.funds += value;
        return `The amount deposited to the bank account is: ${value}. The new value of your funds is: ${this.funds}`;
    }

    toWithdraw(withdrawnValue: number){
        if(this.funds >= withdrawnValue){
            this.funds -= withdrawnValue;
            return `The amount to be withdrawn to the bank account is: ${withdrawnValue}. The new of your funds is: ${this.funds}`;
        } else {
            return `You have insufficient funds in your bank account`
        }
    }

    toConsult(){
        return `The amount in your bank account is: ${this.funds}`;
    }
}

const account1 = new BankAccount(30177251440, 10000000, 'Miguel Tabares');
const account2 = new BankAccount(31266294230, 20000000, 'Nury Cuadros');

console.log(account1.toConsult());
console.log(account1.toDeposit(100000));
console.log(account1.toWithdraw(100000));

console.log(account2.toConsult());
console.log(account1.toDeposit(200000));
console.log(account1.toWithdraw(200000));







