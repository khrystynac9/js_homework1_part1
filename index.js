function mydate() {
    var event = prompt("Please enter the name of the event", "disco party");
    var name = "Emma", place = "Lviv";
    var time = new Date();
    var myDate = time.getHours() + 2;
    var myMinutes = time.getMinutes();
    var a = parseInt(event);
    if (event == "") {
        alert("you forgot to enter data");
        mydate();
    } else  if (isNaN(a)) {
        console.log((name + " has a " + event + " at " + myDate + ":" + myMinutes + " in " + place + " today!!!"));
    }else{
        alert("please enter a string not a number");
        mydate();
    }
}
mydate();