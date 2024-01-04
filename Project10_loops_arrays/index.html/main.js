
function ok_loop() {

    let text = "Hello World!";
    let length = text.length;

    document.getElementById("ok").innerHTML = length;
}
function for_loop() {
 var Instruments = ["guitar", "drums", "piano", "Flute", "Violin", "Trumpet",];
 var Content = "";
 var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
 }

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is" +
     Cat_Pictue[1] + ".";
 }


function car_function() { //--calling car function in order from color, make, model,


let car = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }

};
document.getElementById("Car_Object").innerHTML = car.description();
}

function Text_function() {
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
}

function Fruit_function() { ///---calling fruit string function to order the list of fruits--//

const fruits = ["banana", "orange", "Apple",];
let size = fruits.length;
document.getElementById("foods").innerHTML = fruits.toString();
}
