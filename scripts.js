// User's birthday
var bdMonth;
var bDay;
bdMonth = prompt("Enter the month you were born as a number: ");
bDay = prompt("Enter your day of birth?");

//conversion
bdMonth = parseInt(bdMonth);
bDay = parseInt(bDay);

// Current Date: retrieves the current date
var currentDate = new Date();
// a list of variables
var day;
var month;
var year;

// populating the veriables with currentDate
month = currentDate.getMonth() + 1;
day = currentDate.getDate();
year = currentDate.getFullYear();

// Date markers: last day of the year, first day of the year
var lYear = new Date(year, 12, 31);
var nYear = new Date(year + 1, 1, 1);
var show = lYear.getDate();
console.log(show);

// conversionDay(conDay) will convert milliseconds to days
function convDay() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var d = new Date();
    var t = d.getTime();

    var y = Math.round(t / days);
}



//<button></button>

/*
if the user input is this year getCurrentYear
else next year
*/

//whrite test dates down

//if leapYear add one to the fourth year and adds the other

//console.log(bdMonth + bDay);

//calculate