//ZADANIE 1

myArr = [1,2,3,5,5,'hello'];
console.log(myArr);

//ZADANIE 2
//1)

myArr = [1,2,3,5,5];
console.log(myArr[0]);
console.log(myArr[1]);

//2)

console.log(myArr[myArr.length - 1]);

//3)

console.log(myArr);

//4)

for(let i =0; i < myArr.length; i+=2){
    console.log(myArr[i]);
}

//5)

myArr.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
        }
        });

//6
myArr.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
        }
        });

//ZADANIE 3

//1)
 
tab = [6,343,4,3,24];
const sum = tab.reduce((acc, number) => (acc + number));
console.log(sum);

//2)

const sub = tab.reduce((acc, number) => (acc - number));
console.log(sub);

//3)

const avg = sum / tab.length;
console.log(avg);

//4)
for(let i = 0; i < tab.length; i++){
    if(i%2 !== 0){
        console.log(tab[i]);
    }
}

//5)

for(let i = 0; i < tab.length; i++){
    if(i%2 == 0){
        console.log(tab[i]);
    }
}

//6)
console.log(Math.min.apply(Math, tab))

//7)
console.log(Math.max.apply(Math, tab))

//8)

tabrev = tab.reverse();
console.log(tabrev);

//Można też:
for (const value of tab.reverse()) {
    console.log(value);
}


//ZADANIE 4

function myFunc(arr){
    const sum  = arr.reduce((a,b) => (a + b));
    console.log(sum);
}

myFunc(myArr);

//ZADANIE 5

function myFunc(arr){
    const sum  = arr.reduce((a,b) => (a + b));
    const avg = sum / arr.length;
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] * avg);
    }
}

myFunc(tab);

//ZADANIE 6
function myFunc(arr){
    sumArr = []
    for(let i = 0; i < arr.length; i++){
    if(tab[i]%2 == 0){
        sumArr.push(arr[i]);
    }
}
    const sum = sumArr.reduce((a,b) => (a + b));
    const avg = sum / sumArr.length;
    console.log(avg);
}

myFunc(tab);

//ZADANIE 7

function myFunc(arr){
    arr.sort(function(a,b){
        return(a - b);
    })
    console.log(arr);
}
myFunc(tab);

//ZADANIE 8

const toSumArrayA = [2, 3, 2]
const toSumArrayB = [1, 4, 3]

function sumArraysValue(arrayA, arrayB) {
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);
    });

    return newArray;
}

console.log(sumArraysValue(toSumArrayA, toSumArrayB));

//ZADANIE 9

function myFunc(arr,x){
    let newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === x){
            arr.splice(i,1);
            newArr.push(arr);
            
        }
        console.log(newArr);
    }
}

myFunc(tab,3);

//ZADANIE 10

function changeSign(arr) {
    return arr.map(number => (number * (-1)));
}

const newArrayChanges = changeSign(tab);

console.log(changeSign(tab));