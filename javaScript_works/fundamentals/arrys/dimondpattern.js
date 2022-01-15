//aa*
//a* *
//aa*

function dimond(max,trangle=false,dimond=false) {
    let limit = 1;
    while (limit <= max) {
        if (trangle) {
            for (let row = 1; row <= 5; row++) {
                //1<=3
                let str = "";
                for (let space = 5; space >= row; space--) {
                    str += " ";
                }
                for (let col = 1; col <= row; col++) {
                    //1<=1 //1<=2 //2<=2 1<=3 2<=3 3<=3
                    str += " *";
                }
                for (let space2 = 5; space2 >= row; space2--) {
                    //3>=3
                    str += "  ";
                }
                for (let col2 = 1; col2 <= row; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str += " *";
                }

                console.log(str);
            }
        } else if(dimond) {
            for (let row = 1; row <= 5; row++) {
                //1<=3
                let str = "";
                for (let space = 5; space >= row; space--) {
                    str += " ";
                }
                for (let col = 1; col <= row; col++) {
                    //1<=1 //1<=2 //2<=2 1<=3 2<=3 3<=3
                    str += " *";
                }
                for (let space2 = 5; space2 >= row; space2--) {
                    //3>=3
                    str += "  ";
                }
                for (let col2 = 1; col2 <= row; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str += " *";
                }

                console.log(str);
            }
            for (let row2 = 6; row2 >= 1; row2--) {
                //3>=3 2>=3 1>=3
                let str2 = "";
                // str2+="a"
                for (let space2 = 6; space2 >= row2; space2--) {
                    //3>=3
                    str2 += " ";
                }
                for (let col2 = 1; col2 <= row2; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str2 += "* ";
                }
                for (let space3 = 5; space3 >= row2; space3--) {
                    //3>=3
                    str2 += "  ";
                }
                for (let col2 = 1; col2 <= row2; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str2 += "* ";
                }
                console.log(str2);
            }
        }else{
            for (let row2 = 6; row2 >= 1; row2--) {
                //3>=3 2>=3 1>=3
                let str2 = "";
                // str2+="a"
                for (let space2 = 6; space2 >= row2; space2--) {
                    //3>=3
                    str2 += " ";
                }
                for (let col2 = 1; col2 <= row2; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str2 += "* ";
                }
                for (let space3 = 5; space3 >= row2; space3--) {
                    //3>=3
                    str2 += "  ";
                }
                for (let col2 = 1; col2 <= row2; col2++) {
                    //1<=3 2<=3 3<=3 1<=2 2<=2 1<=1
                    str2 += "* ";
                }
                console.log(str2);
            }
        }
        limit++;
    }
}
dimond(6,false,true);
