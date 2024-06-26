var amount = 654321.987;

var options1 = { style: 'currency', currency: 'RUB' };
var numberFormat1 = new Intl.NumberFormat('ru-RU', options1);

console.log(numberFormat1.format(amount));
// expected output: "654 321,99 ₽"

var options2 = { style: 'currency', currency: 'USD' };
var numberFormat2 = new Intl.NumberFormat('en-US', options2);

console.log(numberFormat2.format(amount));
// expected output: "$654,321.99"
