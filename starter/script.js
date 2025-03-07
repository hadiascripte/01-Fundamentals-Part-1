/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);

let jonas_matilda = "JM";
// Il y a des mots clés réservés à JavaScript qui ne peuvent pas être utilisés comme nom de variable (name, new, function, delete, if, else, etc.)
let $function = 27;

// Cette écriture n'est pas "illégale" mais par convention, on utilise la notation camelCase et on ne commence pas une variable par une majuscule

let Person = "Jonas";
// En revanche, cette écriture est correcte pour PI
let PI = 3.1415;

// On doit faire attention à écrire des noms de variables qui ont du sens
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// Car ici, par exemple, les noms des varianles ne sont pas explicites ni pertinents
let job1 = "programmer";
let job2 = "teacher";
*/

/*

// 2. Data Types


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined
let year;   // On ne définit pas de valeur à la variable
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
 
console.log(typeof null); // C'est un bug de JavaScript, null est considéré comme un objet alors que c'est une valeur primitive (c'est un bug qui ne sera jamais corrigé pour ne pas casser les sites web existants)

*/

/*
// 3. Let, const and var
// on utilise let pour les variables qui peuvent être modifiées plus tard, ou qui sont réassignées en les "mutants" (mutating)
let age = 30;
age = 31;

// On utilise const pour les variables qui ne seront pas modifiées plus tard

const birthYear = 1991;
// birthYear = 1990;
// // On ne peut pas réassigner une valeur à une constante ce qui signifie que nous ne les laissons pas vides

// const job;

// var est l'ancienne manière de déclarer des variables, on ne l'utilise plus en ES6
var job = "programmer";
job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);
*/

// 4. Basic Operators

/*

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
// x--;
console.log(x);

// Comparison operators

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// 5. Operator Precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// Challenge 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

/*
// 6. Strings and Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991; 
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`) ;

*/

// 7. Taking Decisions: if / else Statements

/*
const age = 15;
// const isOldEnough = age >= 18;

if(age>=18) {
    console.log("Sarah can start driving license 🚗");
}
else{
      const yearsleft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsleft} years :)`); 
    } 

const birthYear =2012;
let century;
if(birthYear <= 2000){
century = 20;
    console.log("You are a millenial");
} else {
      century = 21;
    console.log("You are not a millenial");
}
console.log(century);
*/