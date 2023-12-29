function slice_Method() {
    var Sentence = "All work and no play makes chy a dull girl.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section; 
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12355499559.1243333;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function uppercase_Method() {
    let text = "Hey Dawg";
    let result = text.toUpperCase();

    document.getElementById("demo").innerHTML = result;
}

function text_search() {
    let tex = "ms. red has a Red house"
    let position = text_search("red");
    document.getElementById("black").innerHTML = position;
}

function fixed_Method() {
    let num = 5.10000;
    let n = num.toFixed();
    document.getElementById("promo").innerHTML = n;
}

function value_Method() {
    let text1 = "Hello ";
    let text2 = "world!";
    let result = text1.concat("",text2);

    document.getElementById("can").innerHTML = result;
}

function text_connection() {
    let text1 = "Dog";
    let text2 = "house";
    let result = text1.concat(" ",text2);
    document.getElementById("connection").innerHTML = result;
}