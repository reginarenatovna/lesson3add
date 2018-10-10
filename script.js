'use strict';

var str = "урок-3 - был слишком легким" ;

str = str[0].toUpperCase() + str.slice(1);

console.log(str);


str = str.replace(/-/g, ' ');
console.log(str);

var es = "легким"

str = str.replace(/легким/g, ' ');
es = es.replace(/им/g, 'о');
alert(str);
alert(es);
 
var arr = [20, 33, 1, "Человек", 2, 3];
var sum = 0; 
for (var i = 0; i < arr.length; i++) {
	if (typeof (arr[i] ) === "number") {
		var k = Math.pow(arr[i],3);
		 sum += k;
	}
}
console.log(Math.sqrt(sum));

var s = ' Иванов Иван Иванович ';
function workStrong(s) {
 if ((typeof(s)) === "strong" ){
	 alert('Введенный тип данных не является строкой')
 } else if (s.length > 54) {
	 		var pn = s.trim().slice(0,50)+'...';
	console.log(pn);
 } else {
	 s = s.trim(); 
	 console.log(s);
 }
}
workStrong(s);