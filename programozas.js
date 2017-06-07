'use strict'

/*jshint esnext: true*/
/*jslint devel: true*/
/*jslint node: true*/
/*jslint browser: true*/
/*jslint jquery: true*/

//-----------------------------------------------------------

let a = 3;
let b = 2;
let c;

console.log("csere elott> a = "+a+" b = "+b);

c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+" b = "+b);

//----------------------------------------------------------------

let tomb =  [5, 7, 2, 9, 5, 4];
let osszeg = 0;

for (let i = 0; i < tomb.length; i++ ) {
osszeg = osszeg+tomb[i];

}
console.log ("tomb osszege:"+osszeg);

//--------------------------------------------------------------------

let van = false;
let i = 0;
while ( i < tomb.length && tomb[i] !==3) {
	i = i + 1;
}
if (i <= tomb.length) {
	van = true;
}
console.log ("yes: "+van);

//----------------------------------------------------------------------

//Eldöntés

let sorsz = 0;
while ( i < tomb.length && tomb[i] !==3) {
	i = i + 1;
}
if (i <= tomb.length) {
	van = true;
}
console.log ("yes: "+van);

if (van) {
sorsz = i;
}
console.log("a sorszám "+sorsz+"-ik elem a 2-es");

//--------------------------------------------------------------------------

//Megszámlálás


//tomb =  [5, 7, 2, 9, 5, 4];
let db = 0;
for (i = 0; i < tomb.length; i++) {
	if (tomb[i]===2) {
		db = db + 1;
		//console.log ("db: "+db);
		//console.log ("i: "+i);
	}
}
console.log ("db: "+db);

//----------------------------------------------------------------------------------

//Maximum kiválasztás: válasszuk ki a tömb legnagyobb elemét

let max = 1;
for (i = 0; i < tomb.length; i++ ) {
	if (tomb[i] > tomb[max]) {
		max=i;
	}

}
console.log ("max:"+max);

//-----------------------------------------------------------------------------------

//Buborékrendezés: rendezzük a tömb elemeit sorba



 
for ( i = tomb.length; i > 1; i--) {
	for ( let j = 0; j < i-1; j++) {
		if ( tomb[j] > tomb [j + 1]) {
			c = tomb[j];
			tomb[j] = tomb [j + 1];
			tomb[ j + 1] = c;
		}
	}
}
console.log(tomb);

//-------------------------------------------------------------------------------------

//Minimum kiválasztásos rendezés


tomb =  [5, 7, 2, 9, 5, 4];

console.log("a tömb rendezetlenül: "+tomb);
for ( i = 0; i < (tomb.length -1); i++) {
	let min = i;
	for (let j = (i+1); j<tomb.length; j++) {
		if (tomb[min] > tomb[j]) {
			min = j;
		}
	}
	c = tomb[i];
	tomb[i] = tomb[min];
	tomb[min] = c;
}
console.log("a tömb rendezetten: "+tomb);

//----------------------------------------------------------------------------------

//Faktoriális
// 4!=4*3*2*1

function fakt(N) {
	if (N === 0) {
		return 1;
		}else {
			return (N* fakt(N-1));
	}
}
console.log("4! ="+fakt(4));
































