for (let row = 1; row <=4; row++) {//1<=4 2<=4 //3<=4 //4<=4=true
   let str=""
   for(let space=1;space<=(4-row);space++){//first row 1<=4-1 2<4-1 3<=4-1=true 
                                            //second row 1<=4-2 2<=4-2=true  
                                            //third row 1<=4-3=true
                                            //forth row 1<=4-4=false
   str+="A" //aaa 
            //aa
            //a
   }
   for(let col=1;col<=row;col++){//1<=1=true
                                //1<=2 //2<=2=true
                                //1<=3 //2<=3 3<=3=true             
                                //1<=4 //2<=4 3<=4 4<=4=true                        
      str+="*"  //   * 
                //  * *
                // * * * 
                //* * * * 
   }
   console.log(str);//first print   aaa*
                    //second print  aa**
                    //third print   a***
                    //forth print   ****
}