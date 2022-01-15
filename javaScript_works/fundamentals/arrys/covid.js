var coivd_data=[
    //sino district +ve deth cured firstdose seconddose
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
    // var positiveCasees=coivd_data.reduce((num1,num2)=>num1[2]>num2[2]?num1:num2)
    // console.log(positiveCasees);

// q2 district with higest 1 dose vaccination rate
    //var vaccinated=coivd_data.reduce((num1,num2)=>num1[5]>=num2[5]?num1:num2)
    //var filter=coivd_data.filter(data=>data[5]==vaccinated[5])
    //var districts= filter.map(district=>district[1])
    //console.log(districts);

// q3 district with lowest death cases
    // var lowest=coivd_data.reduce((num1,num2)=>num2<num1?num1:num2)[1]
    // console.log(lowest);

// q4 sort district with +ve cases
    // var districtPositive=coivd_data.sort((a,b)=>b[2]-a[2]).map(district=>district[1])
    // console.log(districtPositive);

// q5 sort the districts based on 1st dose
    // var district=coivd_data.sort((a,b)=>b[5]-a[5]).map(district=>district[1])
    // console.log(district);

// q6 is there any states with +ve cases > 60000
    // var positive_abow_60000=coivd_data.filter(data=>data[2]>60000)
    // console.log(positive_abow_60000);

// q7 print trissur details
    // var trissur=coivd_data.filter(data=>data[1]=='thrissur')
    // console.log(trissur);
    
// q8 total number of +ve cases
    // var sum=0
    // var total= coivd_data.filter(data=>sum+=data[2])
    // console.log(sum);
    
// q9 total number of cured cases
    // var sum=0
    // var total =coivd_data.filter(cured=>sum+=cured[4])
    // console.log(sum);

// q10 cured numbers of iduky
    // var cured_idukki=coivd_data.filter(data=>data[1]=='iduky')[0][4]
    // console.log(cured_idukki);

// q11 total number of death cases
    // var sum=0
    // var death=coivd_data.filter(death=>sum+=death[3])
    // console.log(sum);