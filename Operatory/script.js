//ZADANIE 1

var bool1 = true;
var bool2 = false;

console.log(bool1 === bool2)

//ZADANIE 2

var num1 = 6;
var num2 = 5;
var moduloResult = 0;
moduloResult = num1 % num2;
console.log(moduloResult);

//ZADANIE 3 

let txt1 = "JavajestfajnyScript";
let txt2 = "JavafajnyjestScript";
let stringResult = ""
stringResult = txt1 + txt2;
console.log(stringResult);

//ZADANIE 4

var someNumber = 425;
var someString = "425";

console.log(someNumber == someString);
console.log(someNumber === someString);

//operator "==" porównuje tylko wartość a nie typ dlatego, też wyświetliła się wartość logiczna true.
//Natomiast operator "===" porównuje wartość ale też typy dlatego wynik to false, bo mamy do czynienia z typem numercznym i tekstowym

//ZADANIE 5

var counter = 30;
counter++;
counter--;
console.log(counter);

//ZADANIE 6

var num1 = 420;
var num2 = 666;
var result = null;
result = num1 > num2;
console.log(result);