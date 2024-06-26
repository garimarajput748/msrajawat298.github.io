// Note: this snippet only works in the browser

var options1 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var date1 = new Date(2012, 05);

var dateTimeFormat1 = new Intl.DateTimeFormat('sr-RS', options1);
console.log(dateTimeFormat1.format(date1));
// expected output: "петак, 1. јун 2012."

var dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', options1);
console.log(dateTimeFormat2.format(date1));

var dateTimeFormat3 = new Intl.DateTimeFormat('en-US', options1);
console.log(dateTimeFormat3.format(date1));
