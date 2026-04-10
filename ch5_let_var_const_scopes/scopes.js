// Scopes has two types: global and local.
// Global scope: it means as long as u can write it dircetly in the main code without the curly brackets.
// Local scope: it means as long as u can write it inside the curly brackets, like in functions, loops, and if statements. Exapmle:
// {
//     let name = "Suhayla"
//     console.log(name) // this will work because it's inside the curly brackets.
// }

// WHY ARE SCOPES IMPORTANT?

//Global scope:
let firstName = "Suhayla" 

function mycode() {
    //local scope:
    let lastName = "Mukhtar"
    console.log(firstName, lastName) 
} mycode() // this will work because the function is calling the global variable and the local variable.