var mobiles = [
    [1000, "samsung", "samsung f41", 15000, "snapdragon", "AMOLED", "4g"],
    [1001, "samsung", "samsung A51", 32000, "snapdragon", "AMOLED", "5G"],
    [1002, "redmi", "not 10 pro", 19000, "snapdragon", "LED", "4g"],
    [1003, "redmi", "mi 11 lite ", 30000, "mediatek", "LED", "4G"],
    [1004, "apple", "12 pro", 72000, "snapdragon", "AMOLED", "4g"],
    [1005, "apple", "12 pro max", 100000, "snapdragon", "AMOLED", "5G"],
    [1006, "one plus", "nord 2", 29000, "snapdragon", "AMOLED", "4g"],
    [1007, "one plus", "nord 2", 15000, "mediatek", "LED", "4G"],
];
//costly mobile
// mobiles.sort((a,b)=>b[3]-a[3])
// console.log(`${mobiles[0][1]} price=${mobiles[0][3]}`);

//snapdragon processor moblies
// for (let mobile of mobiles) {
//     if (mobile[4] == "snapdragon") {
//         console.log(mobile[1]);
//     }
// }

//print costly moble with processor snapdragon whith 5g band
// let highprice=[]
// for (let mobile of mobiles) {
//     if (mobile[4] == "snapdragon" && mobile[6]=='5G') {
//         highprice.push(mobile)
//     }
// }
// highprice.sort((a,b)=>b[3]-a[3])
// console.log(highprice[0][1]);
//another way
// var snap=mobiles.filter(mobile=>mobile[4]=='snapdragon' && mobile[6]=='4g').sort((a,b)=>b[3]-a[3])
// console.log(snap[0][3]);


// is there any mobile can i purchase below 10k
// print samsung mobile detail 
// for(let mobile of mobiles){
//     if(mobile[1]=='samsung'){
//         console.log(mobile);
//     }
// }


// var mob_price=mobiles.map(price=>price[3])
// console.log(mob_price);

// var samsung=mobiles.filter(name=>name[1]=='samsung')
// console.log(samsung);

// var below=mobiles.filter(price=>price[3]>=25000).map(names=>names[2])
// console.log(below);

// list all 5g mobile names
// list all 5g mobiles available under 25000
// list all samsung mobile names whose band=4g and display type AMOLED

// var fiveG=mobiles.filter((name)=>name[6]=='5G').map(moble_name=>moble_name[2])
// console.log(fiveG);

// var under_25k_moble=mobiles.filter(mobile=>mobile[3]<25000 && mobile[6]=='5G').map(names=>names[2])
// console.log(under_25k_moble);

// var mob=mobiles.filter(mobile=>mobile[1]=='samsung'&&mobile[6]=='4g'||mobile[6]=='4G'  && mobile[5]=='AMOLED')//?all records print 
// console.log(mob);

// var max=mobiles.reduce((num1,num2)=>num1[3]>num2[3]?num1:num2)//?conditon check
// var min=mobiles.reduce((num1,num2)=>num1[3]<num2[3]?num1:num2)
// console.log(max);
// console.log(min);

// var isAvilable=mobiles.some(mob=>mob[3]==10000) //?bolean value returned
// var isAvilable=mobiles.some(mob=>mob[3]>=10000&&mob[3]<=25000)
// console.log(isAvilable);

// var redmidtails=mobiles.find(mob=>mob[1]=='redmi') //?only first record printed
// console.log(redmidtails);

var moblenames=mobiles.map((names)=>names[2])
console.log(moblenames);
mobiles.some()