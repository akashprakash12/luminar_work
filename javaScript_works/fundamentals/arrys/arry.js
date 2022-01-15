var arry = [10, 20];
// arr[0]

// Array   is dynamic typed
// define
// Array length not fixed
// possible to store  different types of Object
// insertion oder is reserverd
// dubplicates are allwed

//fatching object by useing arry index

// updating arry

var expenses = [2000, 25000, 3000, 35000, 35000, "4k", true];
// expenses[2]=40000
// console.log(expenses);
// console.log(expenses.length);

// for (let i = 0; i < 8; i++) {
//     let str=""
//    for (let j = 0; j < 8; j++) {
//    }
//    for(let col=0;col>i;col++){
//    }
// }

// var expenses=[20000,25000,30000,35000,35000,700]
// var numbers=[9,5,46,50,7,6,85,133]
// for (let index = 0; index < numbers.length; index++) {
//     if (numbers[index]>10) {
//         numbers[index]=numbers[index]+1
//     }else{
//         numbers[index]=numbers[index]-1
//     }
// }
// console.log(numbers);
/* fecthin array */
/* 1 */
// for (let index = 0; index < expenses.length; index++) {
//     const element = expenses[index];
//     console.log(element);
// }
/* 2 */
// for(let element of expenses){
//     console.log(element);
// }

// print expenses sum and  amount >25000
for(let element of expenses){
    if (element>25000) {
        console.log(element);
    }
}

// var sum=0
// for (let index = 0; index <expenses.length; index++) {
//     sum+=expenses[index]
// }

// for(element of expenses){
//     sum+=element
// }
 
// console.log(sum);

//find maximum expenses
// var max=0
// for(let element of  expenses){
//     if (element>max) {
//         max=element
//     }
// }
// console.log(max);

//find minimum expenses
// var minimum=expenses[0]
// for(let element of  expenses){
//     if (element<minimum) {
//         minimum=element
//     }
// }
// console.log(minimum);

// max
// max=0
// for(let amount of expenses){
//     if (max<amount) {
//         max=amount
//     }
// }
// console.log(max);
