// console.log( 5 == 5 && 6 == 6) // it means 5 is equal to 5 and 6 is equal to 6, (which is true!)

// console.log( true && true)  // which means true + true = true. 
// And this: is (&&) called and operator.



// && always shows what's happing if u get true && true = true, but if u get true && false = false, and if u get false && true = false, and if u get false && false = false. So the only way to get true is if both sides are true.

// Examples:

// console.log( true && true) // true
// console.log( true && false) // false
// console.log( false && true) // false
// console.log( false && false) // false



// But if u use || (or) operator:

// console.log( false || false) // false
// console.log( false || true) // true
// console.log( true || false) // true
// console.log( true || true) // true

// So the only way to get false is if both sides are false. it only cares about true! (THAT'S WHEN U USING || OPERATOR)

// These are called logical operators, they allow u to group multiple conditions/expressions together. 

var ismarried = true
console.log(ismarried) // It's gonna show true, but if u put/use ! it's gonna change it to false> ! always flips/swichs to the other directions if it was false it turns it to true, and same for the otherwise!

var ismarried = true
console.log(!ismarried); //when u added ! now, it's gonna show false.

