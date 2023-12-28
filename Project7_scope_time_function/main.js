function Age_Function() {
    Age = document.getElementById("Age").value; 
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }

    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;

}
var Reply;
function Time_Function() {
    var Time = new Date().getHours();
    if (Time < 12 == Time > 0) {
        Reply = "It is moring time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//function error_function() {
    //var num = "string";
   // var result = really * 12;
   // console.log(result);
//}
//window.onload = error_function();