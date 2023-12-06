function addition_function() {  //adding 2 + 2 assigning a varible
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition; 
}
function subtraction_Function() {   //subtracting a function and assigning varibles
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 =" + subtraction;
}
function multiplication() {  //multiplying 6 and 8
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 * 8 =" + simple_Math;
}

function divison() {       //dividing 48 and 6
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}
function more_Math() {  //adding 1 and 2 times 10 and divided by 2 -5;
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}
function modulus_Operator() {
    var simple_Math = 25 % 6; //diving 25 by 6 gives a remainder
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Math;
}
function negation_Operator() {  // getting a negative number
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}
var X = 5;  //assiging to a varible 
X++;
document.write(X);

var C = 5.25;
X--;
document.write(C)

window.alert(Math.random()); //random number

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"pug",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById ("Dictionary").innerHTML = Animal.Sound;
}

