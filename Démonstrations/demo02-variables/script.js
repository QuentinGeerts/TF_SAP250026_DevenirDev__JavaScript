/*
    Démonstration 02 - Variables
*/

// 1.  Variables
// > let, const <> var

// Variables ont un typage dynamique

// 1.1.  Déclaration d'une variable
let nomVariable;


// altgr + µ
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // undefined

// 1.2.  Affectation

nomVariable = "Quentin";
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // string

nomVariable = 12;
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // number

nomVariable = 12.2;
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // number

nomVariable = true;
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // boolean

nomVariable = [];
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // object
console.log(nomVariable.constructor.name) // Array

nomVariable = new Date();
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // object
console.log(nomVariable.constructor.name) // Date

nomVariable = { lastname: "Geerts", firstname: "Quentin" };
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // object
console.log(nomVariable.constructor.name) // Object

nomVariable = function () { };
nomVariable = () => { };
console.log(`nomVariable ${nomVariable}: `, typeof nomVariable); // function
console.log(nomVariable.constructor.name) // Function

// 2.  Constantes

const BASE_URL_API = `https://localhost:7028/api/`;
// BASE_URL_API = `coucou`; // Interdiction de modifier une constante
const btn1 = document.getElementById("btn1");

// 3.  Différence entre let/const (scoped) vs var (global)
// let/const: arrivé en 2015 (ES6)

let maVariable = 42;
// let maVariable = "hello"; // Impossible avec let

var maVariable2 = 42;
// var maVariable2 = "Hello"; // Possible <!>

if (true) {
    let maVariable = "Hello";
    var maVariable2 = "Hello";

    console.log("maVariable: ", maVariable); // Hello
    console.log("maVariable2: ", maVariable2); // Hello
}

console.log("maVariable: ", maVariable); // 42
console.log("maVariable2: ", maVariable2); // Hello

// 4.  Récupération d'une valeur de l'utilisateur

// 4.1.  Méthode prompt(message: string,  reponse?: string): string | null

let age = prompt("Quel âge as-tu ?", "18");
// let age = prompt("Quel âge as-tu ?");

console.log(`${age}: ${typeof age}`);