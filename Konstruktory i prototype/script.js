//ZADANIE 1

class Person{
    constructor(name,surname,age,country,city,language){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    newAge(age){
        this.age = age;
    }
    newCity(city){
        this.city = city;
    }
}
user1 = new Person('Mikołaj','Daraż',24,'Poland','Cracow','polish');
user2 = new Person('Danny','Carey',50,'USA','Seattle','english');
user2 = new Person('Jan','Kovalski',100,'Poland','Ropczyce','polish');
user3 = new Person('Gregory','House',50,'USA','New York','english');
user4 = new Person('Lars','Reiner',51,'Germany','Warsaw','german');
user5 = new Person('Marselus','Walles',45,'USA','Los Angeles','english');

user1.newAge(22);
user3.newCity('Kair');
console.log(user1);
console.log(user3);

//ZADANIE 2

class Calculator{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("Błąd - dzielenie przez 0");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}


//ZADANIE 3

class Game{
    random() {
        Game.prototype.x = setInterval(function(){Game.prototype.number = Math.round(Math.random() * (10 - 1) + 1);}, 1000);
    }
    win() {
      Game.prototype.winInterval= setInterval(function(){
          if (Game.prototype.number > 5) {
          console.log('End game')
          clearInterval(Game.prototype.x);
          clearInterval(Game.prototype.winInterval);       
          } else {
          console.log('Odliczamy')
        }}, 1000);
    }
  }
  const game = new Game();
  const gameA = new Game();
  
  game.random();
  gameA.win();
