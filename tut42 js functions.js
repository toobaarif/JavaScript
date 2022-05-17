// console.log("It is another javaScript file!");

// // using function
// function greet(namef, goodMor=" greetings javaScript"){
//     let name1 = "name1"; // local variable ye kch ni bigaryga q k ye function k andar hai
//     console.log(goodMor+ " "+namef)
//     console.log(namef+" is a good girl");
// }
// // return function
// function sum(a,b,c){
//     let  d = a+ b + c;
//     return d;
// }

// let name = "Tooba";
// let name1 = "Laiba";
// let name2 = "Marwa";
// let name3 = "Noor";

// let greetText = "Good Morning"
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3);

// // console.log(name+" is a good girl");
// // console.log(name1+" is a good girl");
// // console.log(name2+" is a good girl");
// // console.log(name3+" is a good girl");

// // return function calling
// let returnValue = sum(1,2,6);
// console.log("return value of function is: "+returnValue);



// function is like a method which used to to short programe reuse again and agin by calling. function can be argument and without argument and we can also used just reference of function

function greet(name = "This is name!", greetText="Hello GM"){   //functoin 1
    console.log(name+" is a good girl");
    console.log(`${greetText} ${name}`);
}

function sum(a, b, c){     //function 2  return function
    let d = a + b + c;
    return d;
 // console.log("function is returned!")// it is not print
} 

function condition(a,b){  //func 3
    if (a<b){
        console.log(a+" is less than "+b);
    }
    else if (a>b){
        console.log(a+" is greater than "+b);
    }
    else if (a==b){
        console.log(a+" is equal to "+b);
    }
    else{
        console.log("Undefined!")
    }
}

let name1 = "Tooba";
let name2 = "Laiba";
let name3 = "Marwa";
let name4 = "Noor";
let greetText1 = "Good morning";
// console.log(name1+" is a good girl");
// console.log(name2+" is a good girl");
// console.log(name3+" is a good girl");
// console.log(name4+" is a good girl");
// by using function (function is building block)
// calling function
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4);

console.log("Sum: "+sum(1,2,3));

let num1 = 10;
let num2 = 3;
condition(num1,num2);

