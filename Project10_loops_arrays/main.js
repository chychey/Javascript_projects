
function ok_loop() {

    let text = "Hello World!";
    let length = text.length;

    document.getElementById("ok").innerHTML = length;
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
function While_loop() {
  let text = "";
  let i = 0;
  while (i < 5) {
    text += i + "<br>";
    i++;
  }
  document.getElementById("w_loop").innerHTML = text;
} 


