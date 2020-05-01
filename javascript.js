console.log(moment().format('L'));
var currentDate = moment().format('L');
$("#currentDay").text(currentDate);




//Past events
moment().subtract(60, "m"); // Last Friday at 5:25 PM
var pastEvent = moment().subtract(60, "m");
console.log(pastEvent);

//Current time events
moment(); //Today at 5:25 PM
var currentEvent = moment().startOf("hour");
console.log(currentEvent);

//Future time events 
moment().add(60, "m"); //Sunday at 5:25 PM using m for moment
var futureEvent = moment().add(60, "m");
console.log(futureEvent);


//Need to save event in local storage
$("#firstButton").click(function () {
    $("#firstFormGroup").val();
    var firstLocalStorageButton = $("#firstFormGroup").val();
    console.log(firstLocalStorageButton);
    localStorage.setItem("first", firstLocalStorageButton);
})

$("#2ndButton").click(function () {
    $("#2ndFormGroup").val();
    var secondLocalStorageButton = $("#2ndFormGroup").val();
    console.log(secondLocalStorageButton);
    localStorage.setItem("second", secondLocalStorageButton);
})

$("#3rdButton").click(function () {
    $("#3rdFormGroup").val();
    var thirdLocalStorageButton = $("#3rdFormGroup").val();
    console.log(thirdLocalStorageButton);
    localStorage.setItem("third", thirdLocalStorageButton);
})


//Set every single event of every hour with each id and change that id










//Add classes for past, present, and future so just use one for loop
for (var i = 1; i < 4; i++) {
    var colorEvent = $("#" + i).data().time
    var indexEvent = $("#" + i)
    console.log(colorEvent);
    var timeToCompare = moment(colorEvent, 'h:mma');
    if (timeToCompare < currentEvent) {
        indexEvent.css({ "background-color": "#d3d3d3" })
    }
    else if (timeToCompare > currentEvent) {
        indexEvent.css({ "background-color": "#77dd77" })
    }
    else if (timeToCompare === currentEvent) {
        indexEvent.css({ "background-color": "#ff6961" })
    }


}

//.data will access those objects for us
