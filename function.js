//create function

function greet(){
    document.write("<h3>Hello !! Good Morning </h3>")
}
greet()
greet()
//function with argument and parameter
function book(a){
    document.write(`<h2>${a} book </h2>`)
}
book('HTMl')
book('CSS')
book('Java Script')

//function with argument and parameter by asking user to enter a number


// function add(num1,num2){
//     document.write(num1+num2)
// }
// var a=parseInt(prompt("Enter a first number"))
// var b=parseInt(prompt("Enter a Second number"))
// add(a,b)


// function info(fname,ph){
//     document.write(`Hello I am ${fname} and phone number is ${ph}`)
// }
// var fname=prompt("Enter a Name")
// var ph=(prompt("Enter a Phone number"))
// info(fname,ph)

// //return function
 
// function name(name){
//     return name
// }

// //return function [it return only one value]
// function sum (a,b)
// {
//     return a+b
// }
// var a=parseInt(prompt("Enter a number"))
// var b=parseInt(prompt("Enter a number"))
//  document.write(sum(a,b))
// console.log(Sum(10,12))

//default value

// function mul(a=33,b=6){
//     return a*b
// }
// document.write(mul(12))//12*6 [default value is given for b]
// document.write(mul())//33*6 [default value is given for a and b]

// //Function Expression

// var a=function(b,c){
//     return b**c
   
// }

// console.log(a(9,3))

// //Arrow with one Argument

// var num=a=>a
// console.log(num(3))
// //Arrow with two argument

// var add=(a,b)=>a+b
// console.log(add(5,9))

//call function

// function water(){
//     console.log("Drink Lots of water")
// }
// function juice(){
//     console.log("It might hamper our health")
// }
// setTimeout(water,4000)
// juice()//output (1.it might......... 2. Drink .....).

//call back function
//solve
// function water1(aa){
//     console.log("Be Hydrate")
//     aa()
// }
// function juice1(){
//     console.log("It affect our health")
// }
// setTimeout(water1,4000, juice1);


function intro(name,ph,address){
    document.write(`Hello I am ${name} and my phone number is ${ph} and I am from ${address}`)
}

intro(name=prompt("Enter a Name"),ph=prompt("Enter a Phone number"),address=prompt("Enter a Address"))


