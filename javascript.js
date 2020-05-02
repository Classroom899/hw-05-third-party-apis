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

$("#8thButton").click(function () {
    $("#8thFormGroup").val();
    var eighthLocalStorageButton = $("#8thFormGroup").val();
    console.log(eighthLocalStorageButton);
    localStorage.setItem("eighth", eighthLocalStorageButton);
})

$("#9thButton").click(function () {
    $("#9thFormGroup").val();
    var ninthLocalStorageButton = $("#9thFormGroup").val();
    console.log(ninthLocalStorageButton);
    localStorage.setItem("ninth", ninthLocalStorageButton);
})

$("#10thButton").click(function () {
    $("#10thFormGroup").val();
    var tenthLocalStorageButton = $("#10thFormGroup").val();
    console.log(tenthLocalStorageButton);
    localStorage.setItem("tenth", tenthLocalStorageButton);
})

$("#11thButton").click(function () {
    $("#11thFormGroup").val();
    var eleventhLocalStorageButton = $("#11thFormGroup").val();
    console.log(eleventhLocalStorageButton);
    localStorage.setItem("eleventh", eleventhLocalStorageButton);
})

$("#12thButton").click(function () {
    $("#12thFormGroup").val();
    var twelfthLocalStorageButton = $("#12thFormGroup").val();
    console.log(twelfthLocalStorageButton);
    localStorage.setItem("twelfth", twelfthLocalStorageButton);
})

$("#13thButton").click(function () {
    $("#13thFormGroup").val();
    var thirteenthLocalStorageButton = $("#13thFormGroup").val();
    console.log(thirteenthLocalStorageButton);
    localStorage.setItem("thirteenth", thirteenthLocalStorageButton);
})

$("#14thButton").click(function () {
    $("#14thFormGroup").val();
    var fourteenthLocalStorageButton = $("#14thFormGroup").val();
    console.log(fourteenthLocalStorageButton);
    localStorage.setItem("fourteenth", fourteenthLocalStorageButton);
})

$("#15thButton").click(function () {
    $("#15thFormGroup").val();
    var fifteenthLocalStorageButton = $("#15thFormGroup").val();
    console.log(fifteenthLocalStorageButton);
    localStorage.setItem("fifteenth", fifteenthLocalStorageButton);
})

$("#16thButton").click(function () {
    $("#16thFormGroup").val();
    var sixteenthLocalStorageButton = $("#16thFormGroup").val();
    console.log(sixteenthLocalStorageButton);
    localStorage.setItem("sixteenth", sixteenthLocalStorageButton);
})

$("#17thButton").click(function () {
    $("#17thFormGroup").val();
    var seventeenthLocalStorageButton = $("#17thFormGroup").val();
    console.log(seventeenthLocalStorageButton);
    localStorage.setItem("seventeenth", seventeenthLocalStorageButton);
})

$("#18thButton").click(function () {
    $("#18thFormGroup").val();
    var eighteenthLocalStorageButton = $("#18thFormGroup").val();
    console.log(eighteenthLocalStorageButton);
    localStorage.setItem("eighteenth", eighteenthLocalStorageButton);
})

$("#19thButton").click(function () {
    $("#19thFormGroup").val();
    var nineteenthLocalStorageButton = $("#19thFormGroup").val();
    console.log(nineteenthLocalStorageButton);
    localStorage.setItem("nineteenth", nineteenthLocalStorageButton);
})

$("#20thButton").click(function () {
    $("#20thFormGroup").val();
    var twentiethLocalStorageButton = $("#20thFormGroup").val();
    console.log(twentiethLocalStorageButton);
    localStorage.setItem("twentieth", twentiethLocalStorageButton);
})

$("#21stButton").click(function () {
    $("#21stFormGroup").val();
    var twentyFirstLocalStorageButton = $("#21stFormGroup").val();
    console.log(twentyFirstLocalStorageButton);
    localStorage.setItem("twentyFirst", twentyFirstLocalStorageButton);
})

$("#22ndButton").click(function () {
    $("#22ndFormGroup").val();
    var twentySecondLocalStorageButton = $("#22ndFormGroup").val();
    console.log(twentySecondLocalStorageButton);
    localStorage.setItem("twentySecond", twentySecondLocalStorageButton);
})

$("#23rdButton").click(function () {
    $("#23rdFormGroup").val();
    var twentyThirdLocalStorageButton = $("#23rdFormGroup").val();
    console.log(twentyThirdLocalStorageButton);
    localStorage.setItem("twentyThird", twentyThirdLocalStorageButton);
})

$("#24thButton").click(function () {
    $("#24thFormGroup").val();
    var twentyFourthLocalStorageButton = $("#24thFormGroup").val();
    console.log(twentyFourthLocalStorageButton);
    localStorage.setItem("twentyFourth", twentyFourthLocalStorageButton);
})

$("#firstButtonAgain").click(function () {
    $("#firstFormGroupAgain").val();
    var firstLocalStorageButton = $("#firstFormGroupAgain").val();
    console.log(firstLocalStorageButton);
    localStorage.setItem("first", firstLocalStorageButton); //setting our local storage item with the "key", setting the variable value for our text form
})







//Set every single event of every hour with each id and change that id










//Add classes for past, present, and future so just use one for loop
for (var i = 1; i < 24; i++) {
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
