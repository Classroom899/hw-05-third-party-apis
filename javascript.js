console.log(moment().format('L'));
var currentDate = moment().format('L');
$("#currentDay").text(currentDate);

var currentEvent = moment().format('LTS');
$("currentEvent")


//Past events
moment().subtract(6, 'days').calendar(); // Last Friday at 5:25 PM

//Current time events
moment().calendar(); //Today at 5:25 PM

//Future time events 
moment().add(3, 'days').calendar(); //Sunday at 5:25 PM


