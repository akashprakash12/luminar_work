var users = {
    1000: {
        accno: 1000,
        personName: "ram",
        balance: 5000,
        password: "userone",
        transction: [{ credited: [], debited: [] }, true],
    },
    1001: {
        accno: 1001,
        personName: "ravi",
        balance: 7000,
        password: "usertwo",
        transction: [{ credited: [], debited: [] }],
    },
    1002: {
        accno: 1002,
        personName: "raju",
        balance: 8000,
        password: "userthree",
        transction: [{ credited: [], debited: [] }],
    },
    1003: {
        accno: 1003,
        personName: "vivek",
        balance: 15000,
        password: "userfour",
        transction: [{ credited: [], debited: [] }],
    },
};
// users[1000].transction[0].credited.push(500)
// console.log(users[1000].transction);
// var arr=[[10,50,80,],[10,82,741],["sgdfg",'sdgg',true]].flat().pop()

// console.log(arr);
// function transction(send){
//     if (users[1000].balance>=send) {//5000>=6000
//         let current= users[1000].balance-send;
//        users[1000].balance=current
//        let recive=users[1002].balance+send
//        users[1002].balance=recive
//     }else{
//         console.log("fail");
//     }

// }

// transction(1000)
// console.log(users);

//accunt validation

function validateAccuntNumber(accno) {
    return accno in users ? true : false;
}
function fundTransaction(from_accunt, to_accunt, amount) {
    if (validateAccuntNumber(from_accunt) && validateAccuntNumber(to_accunt)) {
        let senderBalance = users[from_accunt].balance;
        let reciverBalance = users[to_accunt].balance;
        if (senderBalance < amount) {
            console.log("insafient balance"); //
        } else {
            if (senderBalance > users[from_accunt].balance - amount) {
                //debited
                senderBalance -= amount;
                users[from_accunt].transction[0].debited.push(amount)
                console.log(
                    `your ${from_accunt} debited with ${amount} and availble balance ${senderBalance}`
                );
            }
            if (reciverBalance < users[to_accunt].balance + amount) {
                //credited
                users[to_accunt].transction[0].credited.push(amount)
                reciverBalance+= amount;
                console.log(
                    `your ${to_accunt} credited with ${amount} and availble balance ${reciverBalance}`
                );
            }
        }
    } else {
        console.log("faild transction");
    }
}

fundTransaction(1000, 1001, 200);
let transction=users[1000].transction
console.log(transction);