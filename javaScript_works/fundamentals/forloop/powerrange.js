var num=3,result="",sum=0,limit=10
for (let index = 1; index <=limit; index++) { //1 2 3
    result+=num //3 33 333
    console.log(Number(result));
    sum+=Number(result) //3 3+33=36 3+33+333=369
}
console.log(sum);