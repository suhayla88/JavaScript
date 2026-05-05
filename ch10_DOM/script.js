//WHAT DOES DOM MEAN/STANDS FOR? 
// - it means 'Document Object Model.'
// DOM has 5 functions & 2 element proporties & 6 selectors:

// *5 functions:*
//1. createElement()
//2. appendChild()
//3. insertBefore()
//4. removeChild()
//5. replaceChild()

// *2 element proporties:*
//1. innerHTML
//2. textContent

// *6 selectors:*
//1. getElementById()
//2. getElementsByName()
//3. getElementsByClassName()
//4. getElementsByTagName()
//5. 'querySelector()' it will always get the first element.
//6. 'querySelectorAll()' it will always get all of the elements.




// let firstH1 = document.createElement("h1")
// firstH1.textContent =  "Hello world"
// document.body.appendChild(firstH1)

// for (let i = 0; i <= 500; i++) {
//     let firstH1 = document.createElement("h1")
// firstH1.innerHTML = i + " Hello <br> world!" //textcontent doesn't regonise anything it's only regonise text.
// firstH1.style.color = "navy"
// let firstP = document.getElementById("wanna-first")
// document.body.appendChild(firstH1,) //append means can u attach/add these elements inside Javascript file to the HTML file, (if u don't use append it wouldn't appear in the broswer in (live server.))
// //document.body.insertBefore(firstH1, firstP )
// }


//WHEN U WANT TO USE 'getElementsByClassName() YOU DO THIS:'

// let allTheFirstWanneBe = document.getElementsByClassName("wanna-first")
// allTheFirstWanneBe[0].style.color = "green"
// allTheFirstWanneBe[0].style.fontSize = "50px"

// allTheFirstWanneBe[1].style.color = "red"
// allTheFirstWanneBe[1].style.fontSize = "70px"


// for (let i = 0; i <= 500; i++) {
//     let firstH1 = document.createElement("h1")
// firstH1.innerHTML = i + " Hello <br> world!" //textcontent doesn't regonise anything it's only regonise text.
// firstH1.style.color = "navy"

// document.body.appendChild(firstH1,) //append means can u attach/add these elements inside Javascript file to the HTML file, (if u don't use append it wouldn't appear in the broswer in (live server.))
//document.body.insertBefore(firstH1, firstP )
// }


// //WHEN U WANT TO USE 'getElementsByName() YOU DO THIS:'

// let allTheFirstWanneBe = document.getElementsByName("wanna-first")
// allTheFirstWanneBe[0].style.color = "green"
// allTheFirstWanneBe[0].style.fontSize = "50px"

// allTheFirstWanneBe[1].style.color = "red"
// allTheFirstWanneBe[1].style.fontSize = "70px"

// for (let i = 0; i <= 500; i++) {
//     let firstH1 = document.createElement("h1")
// firstH1.innerHTML = i + " Hello <br> world!" //textcontent doesn't regonise anything it's only regonise text.
// firstH1.style.color = "navy"

// document.body.appendChild(firstH1,) 
// }

//WHEN U WANT TO USE 'getElementsByTagName() YOU DO THIS:'

// let allTheFirstWanneBe = document.getElementsByTagName("p")
// allTheFirstWanneBe[0].style.color = "pink"
// allTheFirstWanneBe[0].style.fontSize = "50px"

// allTheFirstWanneBe[1].style.color = "purple"
// allTheFirstWanneBe[1].style.fontSize = "70px"

// for (let i = 0; i <= 500; i++) {
//     let firstH1 = document.createElement("h1")
// firstH1.innerHTML = i + " Hello <br> world!" //textcontent doesn't regonise anything it's only regonise text.
// firstH1.style.color = "navy"

// document.body.appendChild(firstH1,) 
// }


//WHEN U WANT TO USE 'querySelectorAll() YOU DO THIS:'

let allTheFirstWanneBe = document.querySelectorAll("#wanna-first")
allTheFirstWanneBe[0].style.color = "yellow"
allTheFirstWanneBe[0].style.fontSize = "50px"

allTheFirstWanneBe[1].style.color = "blue"
allTheFirstWanneBe[1].style.fontSize = "70px"

for (let i = 0; i <= 500; i++) {
    let firstH1 = document.createElement("h1")
firstH1.innerHTML = i + " Hello <br> world!" //textcontent doesn't regonise anything it's only regonise text.
firstH1.style.color = "navy"

document.body.appendChild(firstH1,) 
}

//When u want to use class u use '.' e.g:  document.querySelectorAll(".wanna-first")
//when u want to use id u use '#' e.g:  document.querySelectorAll("#wanna-first")
