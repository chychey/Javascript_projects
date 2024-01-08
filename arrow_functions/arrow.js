function arrow_function() {
    let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myfunction(4, 5);
}

function script_function() {
    document.getElementById("script").innerHTML = "Hello Java!"
}

var ages = [2, 10, 18, 20, 13, 15, 30];

//using the arrow function to pass in a paramenter of age
checkAge = (age) => age >= 18;

function myFunction() {
    //use the .some() to iterate through the array of ages 
    document.getElementById("sum").innerHTML = ages.some(checkAge);
}