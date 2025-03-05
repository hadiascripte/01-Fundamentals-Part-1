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

lastName = "Schmedtmann";
console.log(lastName);