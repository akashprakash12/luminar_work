// noremel
// var qube = 3,
//     limit = 3,
//     res = 0,
//     i = 1,
//     sum = 0;

// while (i <= limit) {
//     console.log(i ** qube);
//     sum += i ** qube;
//     i++;
// }
// console.log(`total =${sum}`);


//  reverse qube
var num=654654,sum=0
while (num !=0) {
    let degi=num%10
    console.log(degi);
    sum+=degi**3
    num=Math.floor(num/10)
}
console.log(sum);