class BankAccount{
    constructor(firstName, lastName, middleName, status, balance, accountType) {
        this.balance = balance 
        this.accountType = accountType
        this.firstName= firstName  
        this.lastName = lastName
        this.middleName = middleName
        this.status = status
    }
    deposit(amount){
        this.balance += amount
        
    }
    withdraw(amount){
        if(amount < this.balance){
        this.balance -= amount
        }
    }
    overdraft(amount){
        if(amount< 0 ){
        this.balance-= 35
        console.log('overdraft fee of 35$ will be chared to account')
        }
    }    
    }


let bankAccount = new BankAccount('saad', 'Hindash', 'Osama', 'active', 100,'checking')
bankAccount.deposit(100)
bankAccount.withdraw(50)
bankAccount.withdraw(5)
console.log(bankAccount)
			