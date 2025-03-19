// console.log("JS External")
var fname="sandhya";
var lname="Mainali";
var add= "Bhaktapur";
var ph="98076654321";
console.log(fname)
console.log(lname)
console.log(add)
console.log(ph)
console.log("Hello I am", fname,lname, "and from", add)


//var cab be reassign and re declear
var a=6
console.log(a)
var a=12
console.log(a)

//let can be reassign but can't redeclear

let b=24
console.log(b)
b=27
console.log(b)

//const are unique can't be redefine and reassign
const c=13
console.log(c)

let age =11
console.log(age)
if (true){
    let age=22
    console.log(age)
}
console.log(age)

//Data type primitive [string, number, boolean, undefine] non-primitive

var a='sandhya'
console.log(typeof a)

var aa= 11
console.log(typeof aa)

var aaa=11.11
console.log(typeof aaa)

var aaaa=true
console.log(aaaa)

var bb
console.log(bb)

var ss=null
    console.log(typeof ss)
//Symbol has unique value
console.log(Symbol('ram')== Symbol('ram') )

var family=['Sandhya','sarita' ,'rita']
console.log(typeof family)

var family1={
    S:'sandhya',
    sis:'sarita',
    mother:'rita', 
}
console.log(family1)
console.log(typeof family1)

//Template Literate(Template String)
var q='Welcome'
var z='JavaScript'
document.write("<h1>", q ," to ",  z,"</h1>")
document.write(`<h1> Hello  ${q} to  ${z} </h1>`)
