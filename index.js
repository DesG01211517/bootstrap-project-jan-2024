console.log ("it works")

mybutton.onclick = function () {
 alert ("HOOT HOOT HOOT")
}
mybutton2.onclick = function () {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = "Good evening";
    } else if (hourNow > 12) {
        greeting = "Good afternoon";
    } else if (hourNow > 4) {
        greeting = "Good morning";
    } else {
        greeting = "Good Night";
    }
    alert(greeting)
}