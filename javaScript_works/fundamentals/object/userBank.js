class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }

    session={}
    accontNumberVlidate(accontNumber){
        return this.accounts[accontNumber]?true:false
    }
    authentication(accontNumber,password){
        if (this.accontNumberVlidate(accontNumber)) {
            let pass=this.accounts[accontNumber].password
            if (pass==password) {
             this.session.accuntnumber=accontNumber  
            }else{
                console.log("password mismatch");
            }
        }else{
            console.log("accunt number invalid");
        }
    }

    balance(){
        return this.accounts[this.session.accuntnumber].balance
    }
    fundTrasfer(amount){
        if (amount<=this.balance()) {//6000<=5000
            console.log("transfer fund");
        }else{
            console.log("insafitent balance");
        }
    }
    



}

var user1=new Bank()
user1.authentication(1000,"userone");
user1.fundTrasfer(6000)