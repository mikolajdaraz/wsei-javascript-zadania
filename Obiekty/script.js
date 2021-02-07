//ZADANIE 1

let car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
}
for(let key in car){
    console.log(car[key]);
}

//ZADANIE 2

const car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
    changeName: function myFunc(name) {
        this.name = name;
    }
}
car.changeName("Zniszczony KTO Rosomak");

//ZADANIE 3

tab = [2,4,1,5,5];

let Liczby = {
    getArr: function sumArr(arr) {
        this.sum = arr.reduce((a,b) => (a + b));
        console.log(Liczby.sum);
        },
    sum: 0
}
Liczby.getArr(tab);

//ZADANIE 4

//Jest to mocno niedoskonały sposób ale nie wpadłem na nic lepszego:
let car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
}
var s = "";
let tab = [];
for(let key  in car){
    tab.push(s+= key + ":" + car[key] + " ");
}
tab.splice(0,2);
console.log(tab);


//Można jeszce próbować w ten sposób:
let car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
}
var s = "";
let tab = [];
for(let key  in car){
    console.log(s+= key + ":" + car[key] + " ");
}


//ale output wygląda tak:

//"name:KTO Rosomak "
//"name:KTO Rosomak age:10 "
//"name:KTO Rosomak age:10 mileage:10000 "

//ZADANIE 5

let car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
    pakiet : {
        INF: "Present",
        Caliber: 30,
        Range: 750
    }
}

for(let key in car.pakiet){
    console.log(car.pakiet[key]);
}

//ZADANIE 6

let car = {
    name: 'KTO Rosomak',
    age: 10,
    mileage: 10000,
}

car.capacity = 9;
car.sayHello = function myFunc() {
    let greeting = "Hello!";
    console.log(greeting);
}

car.sayHello();