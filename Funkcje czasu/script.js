//ZADANIE 1
let i = 1;
let myInterval = setInterval(() =>{
    console.log("Cześć po raz: " + i++);
    if(i == 16){
clearInterval(myInterval);
}
},3000)

//ZADANIE 2

var myarr=[1,2,3,4,5,6,7,8,9,10]

setTimeout(()=>{
    for(let i=0;i<myarr.length;i++)    {
        console.log(myarr[i]);
    }
    }, 2000);
let i=0;
var interval = setInterval(()=>{
  console.log(myarr[i]);
  i++
  if (i >= myarr.length) {
    clearInterval(interval);
  }
},3000)
