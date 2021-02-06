//ZADANIE 1

function myFunc(){
    console.log("Udało się!");
}
myFunc();

//ZADANIE 2

function myFunc(x){
    console.log(x);
}
let x = 5;
myFunc(x);

//ZADANIE 3

function myFunc(arr){
    console.log(arr);
}
myFunc([1,2,3])

arr = [420,666,321];
myFunc(arr);

//ZADANIE 4

function myFunc(str){
    let i = 0;
    let myInt = setInterval(() => {
        console.log(str);
        i++;
        if(i == 5){
            clearInterval(myInt);
            console.log("Koniec odliczańska");
        }
    },2000)
    
}

myFunc("Odliczańsko");