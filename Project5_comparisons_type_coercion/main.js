document.write(typeof "cat");
function my_Function1() {
    document.getElementById("Test").innerHTML = 0/0;
}
function my_Function2() {
    document.getElementById("Test1").innerHTML = isNaN('cats');
}
function my_Function3() {
    document.getElementById("Test2").innerHTML = isNaN('18');
}
document.write(4E412);

document.write(-3E12);

document.write(12 > 2);

document.write(12 < 2);

console.log(6 + 6);

document.write(12 == 12);

document.write(4 == 12);

S = 15;
N = 15;
document.write(S === N);

B = 8;
G = 9;
document.write(B === G);

A = "cat";
B = "cat";
document.write(A === B);

K = 9;
M = "9";
document.write(K === M);

J = 1;
F = 3;
document.write(J + F);

document.write(8 > 2 && 14 > 8);

document.write(8 < 2 && 14 < 8);

document.write(9 > 10 || 9 > 3);

document.write(9 > 20 || 15 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(25 > 5);
}
function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}