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
    localStorage.setItem("first", firstLocalStorageButton); //setting our local storage item with the "key", setting the variable value for our text form
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

$("#4thButton").click(function () {
    $("#4thFormGroup").val();
    var fourthLocalStorageButton = $("#4thFormGroup").val();
    console.log(fourthLocalStorageButton);
    localStorage.setItem("fourth", fourthLocalStorageButton);
})

$("#5thButton").click(function () {
    $("#5thFormGroup").val();
    var fifthLocalStorageButton = $("#5thFormGroup").val();
    console.log(fifthLocalStorageButton);
    localStorage.setItem("fifth", fifthLocalStorageButton);
})

$("#6thButton").click(function () {
    $("#6thFormGroup").val();
    var sixthLocalStorageButton = $("#6thFormGroup").val();
    console.log(sixthLocalStorageButton);
    localStorage.setItem("sixth", sixthLocalStorageButton);
})

$("#7thButton").click(function () {
    $("#7thFormGroup").val();
    var seventhLocalStorageButton = $("#7thFormGroup").val();
    console.log(seventhLocalStorageButton);
    localStorage.setItem("seventh", seventhLocalStorageButton);
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
