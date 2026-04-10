function checkSchool(){

let age = document.getElementById("age").value;
let result = document.getElementById("result");

if(age >= 2 && age <= 4){
    result.innerHTML = "Your child should go to Nursery School.";
}

else if(age >= 5 && age <= 11){
    result.innerHTML = "Your child should go to Primary School.";
}

else if(age >= 12 && age <= 16){
    result.innerHTML = "Your child should go to Secondary School (GCSE years).";
}

else if(age == 17 || age == 18){
    result.innerHTML = "Your child should go to Sixth Form / College.";
}

else if(age >= 19 && age <= 23){
    result.innerHTML = "Your child can attend University.";
}

else if(age < 2){
    result.innerHTML = "Your child is too young for school.";
}

else{
    result.innerHTML = "Age outside typical education range.";
}

}


// It's dynamic, it means it changes depending on the input. HTML is not dynamic it's statics, CSS is not dynamic, the thing that makes web aplication, laptops, computers, ur page dynamic is JavaScript.
