const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const max = ages.reduce((a, b) => Math.max(a, b))
console.log('MAX: ' + max);

const min = ages.reduce((a, b) => Math.min(a, b));
console.log('MIN: ' + min); 

const avg = ages.reduce((a,b) => a + b, 0) / ages.length
console.log('AVG: ' + avg); 

// slice the first ten countries from the countries array
import countries from "./countries.js";
console.log(countries.slice(0, 9));

let midItem = countries[Math.floor(countries.length/2)];
console.log('Mid-Item: ' + midItem);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countryArrEven = (countries.length / 2) % 2 === 0
if(countryArrEven === false) countries.unshift("OneMore");

let frist = [...countries];
frist = frist.slice(0, countries.length/2)
let second = [...countries];
second = second.slice(countries.length/2, countries.length);
console.log(frist,second);


// https://github.com/Asabeneh/30-Days-Of-React/blob/master/01_Day_JavaScript_Refresher/01_javascript_refresher.md#4-conditionals

//let age = prompt("Enter your age:");
//if(age >= 18) console.log("You are old enough to drive"); else console.log("You are left with " +  (18 - parseInt(age)) + " years to drive.");

/*let score = parseInt(prompt("Enter your score:"));

switch(true)
{
    case (score >= 80): console.log("A"); break;
    case (score >= 70 && score <= 89): console.log("B"); break;
    default: console.log("Thats stupid...");
}*/

let dog = {};
console.log(dog);
dog.name = "Jack";
dog.legs = 5;
dog.color = "black";
dog.bark = () => {console.log("woof woof");}

console.log(dog.name);
dog.bark();

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


  const acceptedValues = ["value1", "value3"]
  const myObject = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
  }
  
  var filteredObject = Object.keys(myObject).reduce(function(r, e) {
    if (acceptedValues.includes(myObject[e])) r[e] = myObject[e]
    return r;
  }, {})

  console.log(filteredObject)

var marvelHeroes =  users.filter(function(hero) {
	return hero.franchise == "a";
});


let xxx = users.filter((user) => {return user.skills.Count() > 1});