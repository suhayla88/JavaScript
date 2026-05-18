// THERE'S TWO WAT OF WRITINHG FUNCTIONS:

// 1. Triditional way:

// function sayMyName() {
//     console.log("Hey" + "Suhayla");
// }


//2. Variable way:

// let sayMyName = function() {
//     console.log("Hey" + "Suhayla");
// }


//BUT BOTH WAYS ARE TOO LONG SO WE CAN USE ARROW FUNCTION:
// There's two arrows type: skinny arrow(->) and fat arrow(=>).

let sayMyName = name =>  "Hey " + name;


 let name = sayMyName("Suhayla!");
    console.log(name);
