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