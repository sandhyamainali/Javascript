//for loop
// debugger;//line by line code execute 
// for (var a=0; a<11; a++){
//     document.write(`<h1>Loop ${a} </h1>`)
// }


// document.write(`<select>`)//dropdown concept using  for loop
// for(var a=0; a<100; a++){
//     document.write(`<option> ${a} </option>`)

// }
// document.write(`</select>`)

// var a=0;
// for (var a=0; a<10; a++){
//     if(a==1){
//         document.write("<h2> Good Morning </h2>")
//         continue
//     }
//     document.write(`<h2> loop ${a} </h2>` )
// }

//while loop

// //first we have to define variable
// var a=0;
// //we have to write condition inside while 
// while(a<10){
//     document.write(`<h2>While Loop ${a} </h2>`)
//     a++
// }


//do while loop

//we have to first redefine var and write condition in while

var a=2 
do{
document.write(`<h2> Do While loop ${a}</h2>`);
a++
}while(a<12)

for(var a=12; a>0; a--){
    if (a==10){
        document.write(`<h2> Hello Welcome`)
        continue
    }
    document.write(`<h2>Hello ${a}</h2>`)
}

