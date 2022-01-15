//map()
//filter()
//sort()
//reduce()
//some()
//find()
//forEach()

var arr = [2, 3, 4, 5];
// var sqr=arr.map((num)=>num+2) //*[2]
// console.log(sqr);
// var names = ["ram", "ravi"];
// console.log(names.map((name) => name.toUpperCase())); //return  arry [ram] to [RAM] then [ravi] to [RAVI] =[RAM,RAVI]

// var even=arr.filter(num=>num%2==0)
// console.log(even);
var names = ["arjun", "akhil", "aravind", "ram", "ravi", "Abilash"];

// var A_or_a_name = names.filter((name) => name[0] == "a" || name[0] == "A");
// console.log(A_or_a_name);

var num=[2,5,4,6,8,7,4]
// var op=num.map(num=>num>5?num+1:num-1)
// console.log(op);

// var sum=num.reduce((num1,num2)=>num1+num2)
// console.log(sum);

var max=num.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);
var min=num.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);