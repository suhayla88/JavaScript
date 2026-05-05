
//1. ONE WAY OF DOING ObjectS:

// let person = {
//     name: "Suhayla Mukhtar",
//     age: 21,
//     City: "Sweden"

// }

// let vehticle = {
//     brand: "Toyota", 
//     model: "Camry",
//     year: 2020,
//     color: "blue",
//     owner: person
// } 

// console.log(person.name);
// console.log(vehticle.owner.name);

//2. Another WAY OF DOING ObjectS:

// let animal = new Object()
// animal.type = "Dog"
// animal.breed = "Golden Retriever"
// console.log(animal) 

//3. Another ONE WAY OF DOING ObjectS:
// let animal = [2,5, 6, "Bob", 7, 8]
// console.log(animal);

//4. Another WAY OF DOING ObjectS:

// let person = {
//     name: "Suhayla Mukhtar",
//     age: 21,
//     city: "Sweden"
// }
// // IF someone asked u to change the age '21' to '50' u gonna do this (u not allowed to touch the brevous one):
// person.age = 50 // This is the sec time we changed the age without touching the original one.
// person.name = "Layla Ahmed" // This is the sec time we changed the name without touching the original one.
// person.city = "Canada" // This is the sec time we changed the city without touching the original one.
//  console.log(person);


 //HOW DO WE ACCESS WHAT'S INSIDE? There's three/3 ways to access Objrcts (Access means: get the value/data):
 
//  let person = {
//     name: "Suhayla Mukhtar",
//     age: 21,
//     city: "Sweden"
//  }
 
//   console.log(person);

  //The first one is using the normal way which is without '.' e.g console.log(person.name);

  //The sec way is by using '[]' e.g console.log(person["name"]); but it woudn't work without ' "" ', " '' " like a string.

  // The third way called destructring: 

//   let {city} = person
//   console.log(person);


  // How do we add function in Objects?

 
//  let person = {
//     name: "Suhayla Mukhtar",
//     age: 21,
//     city: "Sweden", 
//     saySalam: function() {
//         console.log( "Asalamu Alaykum!")

//     }
//  }
 
//  person.saySalam()


 //Functions represent the actions that thing make.


 // Another way of doing fumctions:

let vehticle = {
    brand: "Toyota", 
    model: "Camry",
    year: 2020,
    color: "blue",
    // owner: person,

    stop: function() {
        console.log("The car has stopped!");
    }
} 

console.log(vehticle.stop());