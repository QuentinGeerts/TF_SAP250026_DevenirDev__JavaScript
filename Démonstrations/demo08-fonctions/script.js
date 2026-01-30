/*
  Démonstration 08 - Les fonctions
*/

// 1.  Fonction nommée (par défaut)

/**
 * Permet de faire l'addition entre deux nombres.
 *
 * @param {number} nb1 Le `premier nombre` à additionner
 * @param {number} nb2 Le deuxième nombre à additionner
 * @return {number} La somme des deux nombres
 */
function addition(nb1, nb2) {
  let n1 = parseFloat(nb1);
  let n2 = Number(nb2);

  if (isNaN(n1) || isNaN(n2))
    throw new Error("Le paramètre nb1 ou nb2 doivent être des nombres");

  return n1 + n2;
}

console.log(addition(12.2, "14.4"));

// 2.  Fonction anonyme (sans nom)
// Peut se stocker dans:
// - variables
// - constantes
// - tableaux
// - paramètre d'un objet
// - paramètre d'un fonction

const isEven = function (nb) {
  return nb % 2 === 0;
};

let isEven12 = isEven(12);

const operationTab = [
  function (nb1, nb2) {
    return nb1 + nb2;
  },
  function (nb1, nb2) {
    return nb1 - nb2;
  },
  function (nb1, nb2) {
    return nb1 * nb2;
  },
  function (nb1, nb2) {
    return nb1 / nb2;
  },
];

console.log(`1 + 2 = ${operationTab[0](1, 2)}`);

// 3.  Fonction lambda

const operation = {
  addition: function (nb1, nb2) {
    return nb1 + nb2;
  },
  soustraction: (nb1, nb2) => nb1 - nb2,
  fnAnonyme: function () {
    console.log("anonyme:", this);
  }, // this objet
  fnLambda: () => {
    console.log("lambda:", this);
  }, // this global
};

console.log(`1 + 2 = ${operation.addition(1, 2)}`);
console.log(`1 - 2 = ${operation.soustraction(1, 2)}`);

operation.fnAnonyme();
operation.fnLambda();

// 4.  Opérateur rest

function sum(initialValue, ...values) {
  return values.reduce((acc, value) => acc + value, initialValue);
}

console.log(sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 5.  Callback

console.clear();

// console.log(sum); // Affichage de l'emplacement sum
// console.log(sum(0, 1)); // Exécutez le code de l'emplacement

/**
 *
 *
 * @param {any[]} array Le tableau à trier
 * @param {(value: any) => bool} callbackFn La fonction de comparaison
 * @return {any[]} Le tableau trié sur base de la fonction de comparaison
 */
function customFilter(array, callbackFn) {
  const filteredArray = [];

  for (const value of array) {
    if (callbackFn(value)) {
      filteredArray.push(value);
    }
  }

  return filteredArray;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(customFilter(values, isEven));
console.log(customFilter(values, (value) => value % 5 === 0));
console.log(customFilter(values, value => value >= 5));

const personnes = [
  { lastname: "Geerts", firstname: "Quentin", gender: "M", age: 29 },
  { lastname: "Geerts", firstname: "Mélanie", gender: "F", age: 37 },
  { lastname: "Morre", firstname: "Thierry", gender: "M", age: 50 },
  { lastname: "Person", firstname: "Michael", gender: "M", age: 44 },
  { lastname: "Herssens", firstname: "Caroline", gender: "F", age: 44 },
];

console.log(customFilter(personnes, p => p.gender === "M"));
console.log(customFilter(personnes, p => p.gender === "F"));
console.log(customFilter(personnes, p => p.age > 40));
console.log(customFilter(personnes, p => p.lastname === "Geerts"));

