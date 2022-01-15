num =80;
num2=72;
factor=0
for (let index = 1; index <=num2; index++) { //i==8
    //
    if ((num%index==0) && (num2%index==0)) {
        factor=index
        console.log(factor);
    }
}
console.log("comon factor",factor);