
 // ARRAYS: Are store list of values in a single variable, and the values are ordered/listed and can be accessed by their index. And what's inside the arrays we call it "elements". 

// let firstnames = ["Masuud", "Maryam", "Suhayla", "Salwa"]; // Array of strings
// let ages = [2, 19, 21, 16]; // Array of numbers
//  and generally it's elements inside the array can be of any type, even mixed types.

// And if u want to replace one of the elements in the array, example changing Maryam to Fatima without chainging the old elements.
// DO IT LIKE THIS:

// firstnames[1] = "Fatima"; 

// console.log(firstnames); // arrays is the square brackets and we write the index of the element inside the brackets.
// console.log(ages); 

let shopppinglist = ["Onoins", "tomato", "botato", "cucumber" , "carrot", "garlic", "pepper", "salt", "sugar", "flour"];
// If u want to see only one element in the array, do this:
console.log(shopppinglist[1]);

// ANOTHER WAY OF CREATING ARRAYS IS: 
// let shoppinglist2 = new Array("Onoins", "tomato", "botato", "cucumber" , "carrot", "garlic", "pepper", "salt", "sugar", "flour"); 

// Let's say u forggot to buy something and u want to add it to the end of the list, and ur boss said add t later prommaticly without changing the old elements, so u can do it like this:
// shopppinglist.push("tea"); // push is a method that adds an element to the end of the array. 
// Now what if u want to remove flour from the list, u can do it like this:
// shopppinglist.pop(); // pop is a method that removes the last element from the array.

// Now what if i want to change the first element in the list 'onions' to 'Pain killer', use this:
// shopppinglist.unshift("Pain killer"); // unshift is a method that adds an element to the beginning of the array.

// Now what if i want to remove the first origin element in the list 'onions'?
// shopppinglist.shift(); // shift is a method that removes the first element from the array.

// console.log(shopppinglist.length); // length is a property that returns the number of elements in the array. and it doen't have () because it's a property not a method/function.
 


 
