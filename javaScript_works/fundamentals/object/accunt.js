var accounts = [
    {
        acno: 1000,
        ac_type: "savings",
        balance: 5000,
        transactions: [
            { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
            { to: 1002, amount: 600, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" },
        ],
    },
    {
        acno: 1001,
        ac_type: "savings",
        balance: 6000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" },
        ],
    },
    {
        acno: 1002,
        ac_type: "current",
        balance: 8000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1001, amount: 5000, note: "geto", method: "neft" },
            { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" },
        ],
    },
    {
        acno: 1003,
        ac_type: "current",
        balance: 16000,
        transactions: [
            { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
            { to: 1002, amount: 500, note: "geto", method: "neft" },
            { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" },
        ],
    },
];
//q1 total number of accunt
//   console.log(accounts.length);
//q2 all savings accounts
//   console.log(accounts.filter(data=>data.ac_type=='savings'));
//q3 print balance of acconumber=1000
// let balence=accounts.find(data=>data.acno==1000)
// console.log(balence.balance);
// q4 print all g-pay transactions detals
// let gPay=accounts.map(data=>data.transactions).flat().filter(data=>data.method=='g-pay').forEach(data=>console.log(data))
//q5 print credit transactions of 1002
// let credit=accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002).forEach(data=>console.log(data))
//q6 print highest balence amount detals
// let highest=accounts.sort((n1,n2)=>n2.balance-n1.balance)
// console.log(highest[0]);
//q7 print transactions hystory of 1002
// let hystory=accounts.find(data=>data.acno==1002)
// console.log(hystory);