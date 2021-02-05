//ZADANIE 1

num1 = 420;
num2 = 666;
if (num1 > num2){
    console.log(num1)
}else{
    console.log(num2)}

//ZADANIE 2

num1 = 420;
num2 = 666;
num3 = 1410;
if(num1 >num2 && num1 > num3){
    console.log(num1)
}
else if(num2 > num1 && num2 > num3){
    console.log(num2)
}else{
    console.log(num3)
}

//ZADANIE 3

for(var i = 0; i < 10; i++){
    console.log("Lubię JavaScript")
}

//ZADANIE 4

var result = 0;
for(var i = 0; i < 11; i++){
    result += i;
}
console.log(result);

//ZADANIE 5

var n = 5;
for(var i = 0; i <= 5; i++){
    if(i%2 == 0){
        console.log(i + " - " + "Liczba jest parzysta")
    }else{
        console.log(i + " - " + "Liczba jest nieparzysta")
    }
}

//ZADANIE 6

for(var i = 0; i < 11; i++){
    for(var j = 0; j < 11; j++){
        console.log("i= " + i + ", j= " + j)
    }
}

//ZADANIE 7

for(var i = 1; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
    else if(i % 5 === 0){
        console.log("Buzz")
    }
    else if(i % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

//ZADANIE 8
//a)

let star = 5;

for(let i = 1; i <= star; i++){
    console.log("*".repeat(i));
}

//b)

const star = '*';

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        result += ' ' + star;
    }

    console.log(result);
}

//c

star = "*"

for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < (2 * i + 1); y++) {
        result += star;
    }

    console.log(result);
}

//d

star = "*"
for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < i + 1; x++) {
        result += star;
    }

    for (let y = 0; y < 5 - (i + 1); y++) {
        result += (y + 1);
    }

    console.log(result);
}

//e

star = "*"
for (let i = 0; i < 5; i++) {
    let result = '';

    for (let x = 0; x < 5 - i; x++) {
        result += ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        result += ' ' + star;
    }

    console.log(result);
}

for (let i = 0; i < 3; i++) {
    let result = '';

    for (let x = 0; x < 5; x++) {
        result += ' ';
    }

    console.log(result + ' ' + star);
}