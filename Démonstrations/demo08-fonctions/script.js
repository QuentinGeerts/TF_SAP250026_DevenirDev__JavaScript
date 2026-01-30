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

const isEven = function (nb) {
  return nb % 2 === 0;
}

let isEven12 = isEven(12);

const operationTab = [
  function (nb1, nb2) { return nb1 + nb2; },
  function (nb1, nb2) { return nb1 - nb2; },
  function (nb1, nb2) { return nb1 * nb2; },
  function (nb1, nb2) { return nb1 / nb2; },
]

console.log(`1 + 2 = ${operationTab[0](1, 2)}`);

// 3.  Fonction lambda

const operation = {
  addition: function (nb1, nb2) { return nb1 + nb2; },
  soustraction: (nb1, nb2) => nb1 - nb2
}

console.log(`1 + 2 = ${operation.addition(1, 2)}`);
console.log(`1 - 2 = ${operation.soustraction(1, 2)}`);
