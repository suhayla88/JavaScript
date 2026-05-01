// console.log("Hello world!");
// console.log("Hello world!");
// console.log("Hello world!");
// console.log("Hello world!");
// console.log("Hello world!");
// console.log("Hello world!");

//instead of repeating the same line using copy and paste, u can use for loop, e.g:

// console.log("Hello world!");
// console.log("I'M Suhayla!");
// console.log("I love coding!"); //when u want to repeat this 5 time using for loop, u can do it like this:


// 'FOR' means i need to start looping.
// First u have to start the counting from 0 'count = 0'.
// Second u have to tell where it stoping (when do i stop the looping) 'count < 5'
// Third u have to tell how much u want to increase the counting 'count++' (++ stands for 1).

// 'i' is a shortcut for index.
// for ( let index = 0; index < 0; index++) {
// console.log(" i is " + index);
// console.log("..................beginning...................") 
// console.log("Hello world!");
// console.log("I'M Suhayla!");
// console.log("I love coding!");
// console.log("..................end...................\n")
// let firstName = "Suhayla";
// }
//if u remove what's  inside the curly brackets, it will reapet none stoply, and that's called infinite loop. E.g: that's if u do same as below....


// for ( ;; ) { 
// console.log("..................beginning...................") 
// console.log("Hello world!");
// console.log("I'M Suhayla!");
// console.log("I love coding!");
// console.log(`..................end................... 
//`)
// }

//Evrey time u create a variable it's taking the computer's memory, so if u create a variable inside the loop, it will take more memory, and that's not good for the computer, so it's better to create the variable outside the loop.

// Code snippet:
// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }

// the codders use snippet to write the code faster, they use it as a shortcut 'for loop' then it everything will appear u just need to modifying it as u want.

//LOOP are always good with arrays. E.g:

let namesofstudent = ["Suhayla", "Sara", "Huda", "Lama", "Maha"];
for (let i = 0; i < namesofstudent.length; i++) { //inside the array it contains 5 elements but only its shoing the first three why? cause i estimate the numer of ellement by puting '3' inside index, this is called 'hard coding' thats when u put data or string inside the code, which meant u put the data/string dircetly insode the code.
    //But when u use 'namesofstudent.length' that's called 'dynamic coding' not hard coding. 
    //namesofstudent.length will show all the element inside the array. 
    if (i == 2) {
        //break; //when u use 'break' it will stop the loop when it reach the condition that u put inside the parentheses, in this case when i reach 2 it will stop the loop and it will not show the rest of the element inside the array.;
        continue; //when u use 'continue' it will skip the condition that u put inside the parentheses, in this case when i reach 2 it will skip the condition and it will show the rest of the element inside the array.
    }
    console.log(namesofstudent[i]);
}
