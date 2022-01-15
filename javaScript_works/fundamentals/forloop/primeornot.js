num=3
flag=0;
for (let index = 2; index < num; index++) {
    if (num%index==0) {
        flag=1;
        break
    }
    
}
if (flag==0) {
    console.log("prime");
}else{
    console.log("not prime");
}