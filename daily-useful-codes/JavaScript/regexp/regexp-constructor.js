var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');

console.log(regex1);
// expected output: /\w+/

console.log(regex2);
// expected output: /\w+/

console.log(regex1 === regex2);
// expected output: false
