var students = [
    [1000, "akhil", "mearnstack", 145, "mca"],
    [1001, "anu", "mearnstack", 165, "bca"],
    [1002, "nikil", "django", 175, "bca"],
    [1003, "vjil", "django", 165, "mca"],
    [1004, "tim", "testing", 185, "bca"],
    [1005, "jhon", "testing", 155, "mca"],
];

// console.log(students[0][3]);
//print all name in the student arry
// for (let name of students) {
//     console.log(name[1]);
// }

//print details of mearnstack batch students
    // for (let student of students) {
    //     if (student[4] == "mca" && student[1] =='jhon' ) {
    //         console.log(student);
    //     }
    // }

// print details of students whose marks above>100
    // for (let student of students) {
    //     if (student[3] > 160) {
    //         console.log(student);
    //     }
    // }

// print names of django batch student whose total >168
// for (let student of students) {
//     if (student[2] == "django" && student[3] > 168) {
//         console.log(student[1]);
//     }
// }

// print higest total
// var max_total=students.reduce((st1>str2)=>console.log(str);)
// var inital=students[0]
// for(let student of students){
// if (student[3]>max_total) {//1655>145
//     max_total=student[3]//165
// }
// }
// console.log(max_total);

var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1989, 2005],
    [1002, "akhil", 7000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
];
// print all employees name

// for (const employee of employees) {
//     if (employee[3]=='developer') {
//         console.log(employee);
//     }
// }

// print developer details

// for (const employee of employees) {
//     console.log(employees[3]);
// }

// print experience of each employee

// for (const employee of employees) {
//     let experiance = employee[5] - employee[4];
//     console.log(`${employee[1]} experians=${experiance}`);
// }

// print employee details who is having exp>10

// for (const employee of employees) {
//     let experiance = employee[5] - employee[4];
//     if (experiance > 10) {
//         console.log(employee);
//     }
// }
// print highest salary
// let max_salary = 0;
// for (const employee of employees) {
//     if (employee[2] > max_salary) {
//         max_salary += employee[2];
//     }
// }
// console.log(max_salary);

// q6 print  second highest salary
// q7 minimum salary
// q8 number of employees
// q9 highest salary amoung developers
// q10 print details of employees whose name start with A
// q11 print details of employees who were working int period of 2010 to 2015

//minimum
// let initial_salary = employees[0][2];
// let element = 0;
// for(let employee of employees){
//     if (employee[2]< initial_salary) {
//         element+=employee[2]
//     }
// }
// console.log(element);

// second largest

// employees.sort((a,b)=>b[2]-a[2])
// console.log(employees[1][2]);
// minimum salary

// employees.sort((a,b)=>a[2]-b[2])
// console.log(employees[0][2]);

// print details of employees whose name start with A

// for (let employee of employees) {
//     if (employee[1][0] == "A" || employee[1][0] == "a") {
//         console.log(employee);
//     }
// }

// highest salary amoung developers
// let arr=[]
// for (let employee of employees) {
//     if (employee[3]=='developer'  ) {
//         employee.sort((a,b)=>b-a)
//         arr.push(employee[2])
//     }
// }
// console.log(arr[arr.length-1]);

// print details of employees who were working int period of 2010 to 2015 
// for (let employee of employees) {
    
// }