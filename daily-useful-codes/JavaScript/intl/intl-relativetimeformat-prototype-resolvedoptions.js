var rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
var options1 = rtf1.resolvedOptions();

var rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
var options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// expected output: "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// expected output: "es, long, auto"
