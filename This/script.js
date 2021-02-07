//ZADANIE 1

let person = {
    name: "Mikołaj",
    surname:  'Daraż',
    age: 24,
    country: 'Poland',
    city: 'Cracow',

    changeAge: function() {
        this.age++;
        return this.age;
    }
}

let person2 = {
    name: "Alicja",
    surname: 'Brondziewska',
    age: 30,
    country: 'Poland',
    city: 'Wrocław',
    changeAge: function() {
        this.age++;
        return this.age;
    }
}

Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person.changeAge());
console.log(person.changeAge());
console.log(person.changeAge());
Object.keys(person).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person2.changeAge());
console.log(person2.changeAge());
console.log(person2.changeAge());
console.log(person2.changeAge());
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

//ZADANIE 2

person.dishes = ['Tortilla','Pizza','pierogi','placki ziemniaczane'];
person2.dishes = ['spaghetti','pizza','lody'];


person.favouriteDishes= function(dish){
    this.dishes.push(dish);}
person2.favouriteDishes= function(dish){
    this.dishes.push(dish);}
console.log(person);
console.log(person2);
person.favouriteDishes('frytki');
console.log(person);
person2.favouriteDishes('chicken');
console.log(person2);

//ZADANIE 3

let calculator = {
    a: 0,
    b: 0,
      add: function(c, d){
          this.a = c;
          this.b = d;
      },
      sum: function(){
          return this.a + this.b;
      },
      difference: function(){
          return this.a - this.b;
      },
      product: function(){
          return this.a * this.b;
      },
      quotient: function(){
          if(this.b != 0){
              return this.a / this.b;
          }
        else
          {
              return "Can't divide by 0";
          }
      }
  }
  
  calculator.add(15,13);
  console.log(calculator.sum());
  console.log(calculator.difference());
  console.log(calculator.product());
  console.log(calculator.quotient());

  //ZADANIE 4

  let stairs = {
    yourStair: 0,
    goUp: function() {
        this.yourStair++;
    },
    
    goDown: function() {
        if (this.yourStair <= 0) {
            this.yourStair = 0;
            console.log("You reached the lowest stair!");
            
            return;
        }
        this.yourStair--;
    },

    tellMeMyStair: function() {
        return `Your Stair: ${this.yourStair}`;
    }
};

console.log(stairs.tellMeMyStair());
stairs.goUp();
console.log(stairs.tellMeMyStair());
stairs.goDown();
stairs.goDown();