/*
    Démonstration 04 - Opérateurs
*/

// 1. Opérateurs arithmétiques

let a = 10, b = 4;

console.log(`${a} + ${b} = ${a + b}`); // 14
console.log(`${a} - ${b} = ${a - b}`); // 6
console.log(`${a} * ${b} = ${a * b}`); // 40
console.log(`${a} / ${b} = ${a / b}`); // 2.5
console.log(`${a} / ${b} = ${parseInt(a / b)}`); // 2
console.log(`${a} % ${b} = ${a % b}`); // 2

// 2.  Opérateurs de comparaison

// 2.1.  Égalité

// == → Vérification de la valeur uniquement
console.log(`${4} == ${4} → ${4 == 4}`); // true
console.log(`${4} == ${"4"} → ${4 == "4"}`); // true

// === → Vérification de la valeur ET du type
console.log(`${4} === ${"4"} → ${4 === "4"}`); // false

// 2.2.  Différence

// != → Vérification de la valeur uniquement
console.log(`${4} != ${4} → ${4 != 4}`); // false
console.log(`${4} != ${"4"} → ${4 != "4"}`); // false

// !== → Vérification de la valeur ET du type
console.log(`${4} !== ${"4"} → ${4 !== "4"}`); // true


// 3.  Opérateurs de logique

// 3.1. ET (&&)
console.log(`${true} && ${true} → ${true && true}`); // true
console.log(`${false} && ${true} → ${false && true}`); // false
console.log(`${true} && ${false} → ${true && false}`); // false
console.log(`${false} && ${false} → ${false && false}`); // false

// 3.2. OU (||)
console.log(`${true} || ${true} → ${true || true}`); // true
console.log(`${false} || ${true} → ${false || true}`); // true
console.log(`${true} || ${false} → ${true || false}`); // true
console.log(`${false} || ${false} → ${false || false}`); // false

// 3.3. NOT (!)

console.log(`!true: ${!true}`); // false 
console.log(`!false: ${!false}`); // true

// 4.  Opérateurs raccourcis

a = a + 5;
a += 5;

// 5.  Post/pré - incrémentation / décrémentation

let c = 5;

let d = c++; // d: 5 | c: 6
let e = ++c; // c: 7 | e: 7

let f = c--; // f: 7 | c: 6
let g = --c; // c: 5 | g: 5

// 6.  Opérateurs ternaire

let age = 18;

console.log(age >= 18 ? "Adulte" : "Enfant");

// 7. Opérateur nullish-coalescing
// ??
let pseudo = document.getElementById('pseudoInput') ?? "anonyme";

// 8.  Opérateur optionnel (Optional Chaining)
// ?.

document.getElementById('pseudoInput')?.value