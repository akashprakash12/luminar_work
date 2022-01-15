//searching algoritam is hash table .is vervey faster
var employe={
    eid:1000,
    ename:'tom',
    salary:25000,
    desig:"developer"
}
// console.log("ename" in employe);
if ("exp" in employe) {
    employe.exp+=1
} else {
    employe.exp=1
}
console.log(employe);