// var array = [2, 3, 4, 5]; //4^2   coplexity is high  //  n^2
// var element = 10;
// var lower = 0;
// var upper = array.length - 1;
// var count=0

// for (let i of array) { //2
//     for (let j of array) { //2
//         if (i + j == sum) { //2+2=7(flase)
//             console.log(`paris (${i},${j})`);
//             flag = 1;
//         }
//     }
// }
// if (flag==0) {
//     console.log(`no pairs found`);
// }
// while (lower < upper) {
//     //7 //0<2
//     let sum = array[lower] + array[upper];//2+4
//     if (element == sum) {
//         //7==6 //6==6
//         console.log(`pair (${array[lower]} ,${array[upper]})`);
//         break;
//     } else if (sum < element) {
//         //7<6
//         lower++;
//     } else if (sum > element) {
//         //7>6
//         upper--;
//     }else{
//         console.log("not working");
//     }
//     count++
// }
// console.log(count);

//find common element from two arry
var arr1 = [10, 11, 20, 21];
var arr2 = [11, 12, 20, 21];
var lower = 0;
var upper1 = arr1.length;
// for (let index = 0; index < arr1.length; index++) {
//     for (let index = 0; index < arr2.length; index++) {
//        if (arr1[index]==arr2[index]) {
//            console.log(arr1[index],arr2[index]);
//        }
//     }
// }
// var index=0;
// var conunt=0
// while (lower<upper1) {
//     console.log(arr1[index] == arr2[index]);
//     // if (arr1[index] == arr2[index]) {
//     //     console.log(arr1[index], arr2[index]);
//     // } else {
//     //     console.log("no same result");
//     // }
//     index++;
//     conunt++
//     upper1--   
// }
// console.log(conunt);
// var arr2=[11,12,20,21]
//element =15
// search elemente exist or not
