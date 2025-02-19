/* Script to give the user live open & close times */

/* Start by getting the date and time */

const day = new Date().getDay(); // gets the day of the week
const hour = new Date().getHours(); // gets the hour of the day
const openingTime = 10;
const closingTime = 18;
const fridayClosingTime = 19;

let greeting;
let nextOpenHour;
let nextOpenDay;
let nextClosedHour;
let nextClosedDay;


/* the days of the week are 0 to 6, Sunday to Saturdays respectively */

/* use the hour from the time to decide if the shop is open or closed */
if (day > 1 && day <= 6 && hour >= 10 && hour < 18) {
    greeting = "open"; // this sets tuesday to saturday as open between 10am and 7pm
    nextClosedHour = closingTime;
} else if (day === 5 && hour >= 10 && hour < 19) {
    greeting = "open"; // this sets Friday (day 5) as open between 10am and 7pm. The order of this matters here as friday 10 to 6pm is included in the above statement. 
    nextClosedHour = fridayClosingTime
} else {
    greeting = "closed"; // this sets all other times as closed
}

/* calculate when the next opening time is if the shop is closed */
if (day >= 1 || day === 6 && hour > 18) {
    nextOpenDay =  2;
    nextOpenHour = openingTime;
} else if (day ===5 && hour >= fridayClosingTime) {
    nextOpenDay = 6;
    nextOpenHour = openingTime;
} else if (hour > 18){
    nextOpenDay = day + 1;
    nextOpenHour = openingTime;
}


/* create the element to display the greeting */

const visitSection = document.querySelector('main>address'); // selects the main in the body and labels it mainSection. This will be used to place the h3 where we want it
const h3 = document.createElement('h3');

/* give the days of the week names, as they are only number 0 - 6 at the moment */

function getDayName(dayNumber) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNumber]; //sets the days (the names) and aligns them with the dayNumbers (0 - 6)
}

/* display text for when the shop is open */

if (greeting === "open") {
    const nextClosingDayName = getDayName(nextClosedDay);
    h3.textContent = "Hi, we are open! We will close at " + nextClosedHour +":00 today"; // this text will be displayed on the page on load
} else {
    /* if the shop is closed */
    const nextOpenDayName = getDayName(nextOpenDay);
    h3.textContent = "Sorry, we are closed. We'll be open again on " + nextOpenDayName + " at " + nextOpenHour + ":00";
}


/* position the text on the page */  
visitSection.appendChild(h3);