// WAYS TO CREATE STRINGS:
// let fullName = "Suhayla Mukhtar"; // using double quotes.
// let fullName2 = 'Suhayla Mukhtar'; // using single quotes.
// let fullName3 = new String("Suhayla Mukhtar"); // using the String constructor. This is an object cause (new) is an object constructor. 

// console.log(fullName3.toString()); // its for the the string value of the object.(so the brackets will be removed and only the string value will be printed.)

// AND THERE'S A FOURTH WAY TO CREATE STRINGS: which is mixing the first two ways ( if u want to mix variables and strings )
// let firstName = "Suhayla";
// let lastName = "Mukhtar";
// let fullName = "My full name is " + firstName + "  " + lastName + "!"; 
// console.log(fullName);
// using concatenation (the + operator) to combine strings and variables. 
 // ("My full name is") these one called literals: which means strings/text that are not in variables. 
 // and the words literals: means naked, it doean't have any variable or anything else, it's the opposite of variables.

 // But when u want to mix literals and variables, to make very long sentence, like shown in the example above, we have to concatenate them using the + operator, and this is a bit hard to read and write, especially when we have many variables and literals.

 // But when u remove the + operator and just write the variables and literals together, it will not work, it will just print them as they are without combining them.
// let fullName = "My full name is firstName  lastName !"; // its gonna show how it is!
// console.log(fullName);

// So to fix this u can u somthing called backticks (``) and ${} to embed variables inside the string, this is called template literals.

// let firstName = "Suhayla";
// let lastName = "Mukhtar";
// let fullName = `My full name is ${firstName}  ${lastName} !`;
// console.log(fullName);

// So when u use backticks, u can put $ and {} around the variable names to embed them inside the string, and this is much easier to read and write than concatenation.
// AND WHEN DO WE USE THIS?
//WE USE IT WHEN WE WANT TO MIX NORMAL STRINGS/TEXT WITH VARIABLES, AND THIS IS VERY COMMON IN PROGRAMMING, SO TEMPLATE LITERALS ARE VERY USEFUL AND MAKE OUR CODE MUCH CLEANER AND EASIER TO READ.


// let firstName = "Suhayla"; 
// console.log(firstName.charAt(6)); 
// //  firstName = firstName.trim();
// // console.log(firstName.length);

// let lastName = "Mukhtar";

// let fullName = `My full name is ${firstName}  ${lastName} !`

// //immutable: it means u can't change theem.

// fullName = fullName.replace("My", "Our");
// fullName = fullName.toUpperCase(); 
// fullName = fullName.toLowerCase();
//  // this is a method to replace a part of the string with another string. it takes two arguments: the first one is the string to be replaced, and the second one is the string to replace it with. in this case, we are replacing "my" with "our".
// console.log(fullName)


// let firstName = "Suhayla";
// let lastName = "Mukhtar";

// let fullName = firstName + " " + lastName   //this is called concat, and it is used to combine/join two or more strings together. in this case, we are combining the firstName and lastName variables with a space in between them.
// console.log(fullName);


// let paragraph = "I like Switzerland"
// let firstPart = paragraph.substring(6, paragraph.length); // this is a method to extract a part of the string, it takes two arguments: the first one is the starting index, and the second one is the ending index (not included). in this case, we are extracting the first 6 characters of the paragraph string, which is "I like". 
// // paragraph.length and the ending index are the same, it will start from the index 6 to the end.
// console.log(firstPart);

let paragraph = "I  \t \t like Switzerland. \n" // To make each one has it's own line, use \n this's will start a new line for each. //and for a shortcut to make a space in the sentence, use \t(it's called scaping characters.)
console.log(paragraph.repeat(50)); // this is a method to repeat a string a specified number of times. in this case, we are repeating the paragraph string 50 times.

