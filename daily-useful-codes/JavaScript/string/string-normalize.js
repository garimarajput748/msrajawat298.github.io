var first = '\u212B'; // "Å"
var second = '\u0041\u030A'; // "Å"

console.log(first + ' and ' + second + ' are' + (first === second ? '' : ' not') + ' the same.');
// expected output: "Å and Å are not the same."

console.log(
  first +
    ' and ' +
    second +
    ' can' +
    (first.normalize('NFC') === second.normalize('NFC') ? '' : ' not') +
    ' be normalized',
);
// expected output: "Å and Å can be normalized"

var oldWord = 'mañana';
var newWord = oldWord.normalize('NFD');
console.log('The word did ' + (oldWord != newWord ? '' : 'not ') + 'change.');
// expected output: "The word did change."
