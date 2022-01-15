class Parent {
    constructor(){
        
    }
    bike() {
        console.log("passion pro");
    }
}
class Child extends Parent {
    // inheritence
  
    bike() {
        super.bike()//Parent method calling
        //method over ride
        console.log("royal enfiled");
    }
    add(n1, n2) {
        //method over load
        return n1 + n2;
    }
    add(n1, n2, n3) {
        console.log("last");
        return n1 + n2;
    }
}
var child = new Child();

child.bike();
// console.log(child.add(10, 10, 52));
