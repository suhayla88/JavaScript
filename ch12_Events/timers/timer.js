function sayMyName() {
    console.log("Hello" + "Suhayla");
}

// sayMyName("Suhayla"); 

let timer = setInterval(sayMyName, 2000);


setTimeout(function() {
    clearInterval(timer);
}, 10000);