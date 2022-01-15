
for(let row=1;row<=10;row++){
    let str=''
    for(let space=1;space<=10-row;space++){
        str+=' '

    }
    for(let col=1;col<=row;col++){
        str+='    *'
    }
    console.log(str);
}
