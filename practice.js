// let a=1
// console.log(a)
// if(true){
//     let a=11
//     console.log(a)
// }
// console.log(a)

// var fruits= ['Apple', 'Mango', 'Banana']//Object def key and value
// console.log(fruits)

// var fruit={
//     Apple:200 ,
//     Mango:150,
//     Banana:50,

// }
// console.log(fruit)
// const c=3
// console.log(c)
// if(true){
//     const d=4
//     console.log(d)
// }
// console.log(c)

// //Operator
// //Arithematic operator
// // var b = parseInt(prompt("Enter a number"))
// // var d = parseInt(prompt("Enter Second Number"))//ask user to enter a number
// // console.log(b+d)//print
// // console.log(b-d)
// // console.log(b/d)
// // console.log(b%d)
// // console.log(b**d)
// // console.log(b*d)
// debugger;
// for  ( var s=2; s<4; s++){
//     document.write(`<h2>*</h2>`)
//     document.write(`<h2>**</h2>`)
//     document.write(`<h2>***</h2>`)
//     document.write(`<h2>****</h2>`)
//     document.write(`<h2>****</h2>`)
// }

// document.write(`<select>`)

// for(var n='1'; n<8; n++){
// document.write(`<option>${n} </option>`)
// }
// document.write(`</select>`)

// document.write(`<select>`)
// for (var q=1; q<13; q++){
//     document.write(`<option> ${q} </option>`)
// }
// document.write(`</select>`)


// var month=11
// switch(month){
//     case 1:document.write("Jan");break
//     case 2:document.write("Feb");break
//     case 3:document.write("Mar");break
//     case 4:document.write("Apr");break
//     case 5:document.write("May");break
//     case 6:document.write("June");break
//     case 7:document.write("July");break
//     case 8:document.write("Aug");break
//     case 9:document.write("Sep");break
//     case 10:document.write("Oct");break
//     case 11:document.write("Nov");break
//     case 12:document.write("Dec");break
//     default: document.write("Not specified")
// }

//function
function weather(){
    document.write(`<h2>Hello</h2>`)
}
weather()
weather()


function weather(a){
    document.write(`${a} `)
}
weather("Winter")
weather("Summer")
weather("Rainy")
weather("Cloudy")

function mul(a,b){
    document.write(a*b);
}
mul(12,12)

//return
function name(){
    return
}
document.write('sandhya')
//Arrow function

var q=((a)=>a+1)
console.log(q(3))
//Arrow with multiple argument

var s=((q,w)=>q*w)
console.log(s(3,66))


//call function

function frame(){
    document.write("This frame belongs to sandhya")
    
}

function photo(){
    document.write("Images has good quality")
}
setTimeout(frame,4000)
photo()
//solve call back functio 
function frame1(aa){
    document.write("Hello")
    aa()
}

function photo1(){
    document.write("Welcome")
}
setTimeout(frame1,4000,photo1)

//for of 
var food=['laphing','noodles']
console.log(food)
for (const item of food){
    console.log(item)
}
// for in
for(const item in food){
    console.log(item)
}
//adding last component
food.push('rice')
console.log(food)
//adding first component
food.unshift('mo:mo')
console.log(food)

//removing last component
food.pop('rice')
console.log(food)
food.shift('mo:mo')
console.log(food)
food[2]=['momo']
console.log(food)
console.log(food.includes('laphing'))

//filter
age=[1,13,25,35]
var data=age.filter((a)=> a>16)
console.log(data)
//find
var data=age.find((a)=>a>16)
console.log(data)