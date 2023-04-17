let a = 20;// global variable
function add(b){
    a = 30; // a global variable can be changed inside a function and due to its global nature it changes everywhere.g
    console.log(a+b);
   
    let fruit = 'Apple'; //local variable cannot be accessed outside the function
    console.log(fruit);

}
add(50);

function greet(){
    let hello = "hi";
    function talk(){
        let c = "hello there";
        console.log(`${hello} ${c}`); //variable hello can be accessed because it is a global vriable to functions within greet only.
    }
    talk();
    // console.log({c}); can't be acessed because its a local variable in function talk
}
greet();