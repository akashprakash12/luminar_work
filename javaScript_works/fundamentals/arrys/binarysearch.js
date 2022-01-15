//the arry will be sorted array
var input=[5,3,4,8,9,6,11]
var sorted=input.sort((num1,num2)=>num1-num2)
var searchingElement=1,lower=0,upper=input.length -1,flag=0
console.log(sorted);
while (lower<upper) {//0<6
    let mid=Math.floor(lower+upper/2)//0+6/2=3
    if (sorted[mid]==searchingElement) {//10==input[10]

        console.log(`searching element in midile`);
        break;
    }
    else if(searchingElement>sorted[mid]){//10>input[10]
        lower=mid+1
        console.log(`searching element is grater than midle`);
        break;
    }
    else if(searchingElement<sorted[mid]){//10>input[10]
        upper=mid-1
        console.log(`searching element is less than midle`);
        break;
    }else{
    console.log(`not found`);
    }
}