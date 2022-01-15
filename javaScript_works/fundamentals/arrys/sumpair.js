array = [2, 4, 6];
// out=[10,8,6]
output = [];
var sum = 0;
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
for (let value of array) {
    output.push(sum - value);
}
console.log(output);
