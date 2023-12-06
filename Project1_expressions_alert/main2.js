var X = "Hello, World!"
document.write(X);
document.write("Lisa told Bart,\"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded."); //string+ apostrophe
document.write("\"Be who you are and say what you feel,"  //concatenating a string
+ "because those who mind don\'t matter and those who matter don\'t mind.\""
+ "-Dr. Seuss");
var B = "Concatenated" + "String"    //assigning a concatenated string value to a variable
document.write(B)
var Family = "The Italians", Mom = "Josh", Dad = "Kyle"  //assigning multiple variables
document.write(Dad)
document.write(7 + 7);              //assigning an expression
function My_Fist_Function() {       //Defining a function and naming it
                                    
    var str = "This is the button text!";   //Defining a variable and giving it a string value
    document.getElementById("Button_Text") .innerHTML = str; //Putting the value of the variable
}           //into the HTML elementFromPoint with the "Button_Text" id
alert("Hey everyone!");