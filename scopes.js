let a = 20;// global variable
function add(b){
    a = 30; // a global variable can be changed inside a function and due to its global nature it changes everywhere.g
    console.log(a+b);
   
    let fruit = 'Apple'; //local variable cannot be accessed outside the function
    console.log(fruit);

}
add(50);