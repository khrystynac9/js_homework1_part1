function mydate() {
    var event = prompt("Please enter the name of the event");
    var name = "Emma", place = "Lviv";
    var time = new Date();
    var myDate = time.getHours() + 2;
    var myMinutes = time.getMinutes();
    console.log((name + " has a " + event + " at " + myDate + ":" + myMinutes + " in " + place + " today!!!"));
}
mydate();