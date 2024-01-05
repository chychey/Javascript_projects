function Color_function() {
    var Color_Output;
    var Colors = document.getElementById("Color_input").ariaValueMax;
    var Color_string = "is a great color";
    switch(Colors) {
        case "Purple":
            Color_Output = "Purple" + Color_string;
            break;
            case "Blue":
                Color_output = "Blue" + Color_string;
                break; 
                case "Red":
                    Color_output = "Red" + Color_string;
                    break;
                    default:
                        Color_output = "enter a color in the list";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
var c = document.getElementById("Border_canv");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

const c = document.getElementById("Border_canv");
const ctx = c.getContext("2d");

//Create a gradient
const grd = ctx.creatLinearGradient(0,0,17,5);
grd.addColorStop(0, "black");
grd.addColorsStop(1, "white");

//Draw a filled Retangle
ctx.fillStyle = grd;
ctx.fillrect(20, 20, 150,100);

