// THERE'S TWO TYPE OF ERROR:
// 1. COMPILE TIME ERROR.
// 2. RUNTIME ERROR.

// IDE: stands for Integrated Development Environment, Enf:
// 1. Visual Studio Code.
// 2. Sublime Text.
// 3. Atom.
// 4. Notepad++.
// 5. intelliJ IDEA.
// 6. Eclipse.
// 7. NetBeans.
// 8. PyCharm.
// 9. WebStorm.
// 10. Android Studio.
// 11. Xcode.
// what they do? they allow u to write a code inside them.

// IF u which let and firstName like this: 'firstName let' this will give u a compile time error because u didn't write it the way it degined and the computer recognised it.
// The synax of the code is wrong:
// firstName let = "Suhayla";
//this is the correct one:
// let firstName = "Suhayla";
// console.log(firstName);
// So what compile time error means an error that can be checked while ur writting the code.


// For runtime error: it appears when u run the code, or when the user is using application and it's trying to connect the interenet but the internet is not working or the user is trying to open a file but the file is not exist, this is runtime error because it appears when u run the code and it's not related to the synax of the code.

// So what u can do before ur code crashs use 'try' it means watch or keep an eye on the code and if there is an error we catch it, why are we catching it? because we're trying to handle it.
//Example:

try {
    // open database connection.
//  let firstName 
//  console.log(firstName.toUpperCase());
//  console.log("Hello");
//  console.log("Hello");


let dbError = new Error("Couldn't connect to the database")
throw dbError
// So if u want t throw an error by urself as a developer u use something callled 'throw'.
 // this will throw the error that we created and it will be caught by the catch block.

} catch (error) {
    console.log(error.message);
} finally { // finally means that this code will run no matter what, even if there is an error or not.
    console.log("This will run regardless of the error.");
}

// close database connection.