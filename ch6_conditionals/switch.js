let age = 1;

switch (true) { // means always go inside the switch statement, and check the cases one by one. 
  case (age <= 3):
    console.log("You are a toddler.");
    break; // it means stop checking the cases, and exit the switch statement.

  case (age >= 12 && age <= 17):
    console.log("You are a teenager.");
    break;

  case (age >= 18):
    console.log("You are an adult.");
    break;

  default: // it means if none of the cases are true, then execute/use this code.
    console.log("You are not an adult.");
}