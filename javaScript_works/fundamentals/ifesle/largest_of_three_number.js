// if ((true)||(false)) {
//     console.log(true);     //importent
// }else{
//     console.log(false);
// }


var num1=30
var num2=20
var num3=40
// console.log(((num1>num2)&&(num1>num3))?(num2>num3)?`2ndlargest is ${num2}`:`2ndlargest is${num3}`:(num2>num3)?`largest is ${num2}`:`largest is ${num3}`);
if ((num1>num2)&&(num1>num3)) {
    if (num2>num3) {
        console.log(`second largest ${num2}`);
    }else{
        console.log(`second largest ${num3}`);
    }
}else if((num2>num3)&&(num2>num1)){
   console.log(`second largest ${num2}`);
}else{
console.log(` 2 largest ${num1}`);
}
