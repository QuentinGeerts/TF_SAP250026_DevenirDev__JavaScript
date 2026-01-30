/*
    Démonstration 07 - Tableaux
*/

// 1.  Déclaration

const monTableau = []; // À la volée
const monTableau2 = new Array(); // constructeur 💩

// 2.  Déclaration + affectation directe
const monTableau3 = ["Luca", "Mathieu", "Eliott"];
const monTableau4 = new Array(42); // Tableau de 42 emplacements vides

console.log("monTableau :>> ", monTableau);
console.log("monTableau2 :>> ", monTableau2);
console.log("monTableau3 :>> ", monTableau3);
console.log("monTableau4 :>> ", monTableau4);

// 3.  Récuparation de la taille d'un tableau
// > Propriété: .length

console.log("monTableau3.length :>> ", monTableau3.length);

// 4.  Accéder à un élément dans le tableau
// Opérateur d'indexation: [ index ]

console.log("monTableau3[0] :>> ", monTableau3[0]);
console.log("monTableau3[1] :>> ", monTableau3[1]);
console.log("monTableau3[2] :>> ", monTableau3[2]);

monTableau3[9999] = "Quentin";

console.log("monTableau3[-1] :>> ", monTableau3[-1]);
console.log("monTableau3[999] :>> ", monTableau3[999]);
console.log("monTableau3[9999] :>> ", monTableau3[9999]);

// 5.  Tableau associatif
const platsSemaine = [];
platsSemaine["lundi"] = "Sandwich";
platsSemaine["mardi"] = "Cassoulet";
platsSemaine["mercredi"] = "Sandwich";
platsSemaine["jeudi"] = "Burger frites";
platsSemaine["vendredi"] = "Sandwich";

console.log("platsSemaine :>> ", platsSemaine);

console.log(
  "Taille d'un tableau associatif :>> ",
  Object.keys(platsSemaine).length,
);

for (const jour in platsSemaine) {
  console.log(` - ${jour}: ${platsSemaine[jour]}`);
}

const personne = {
  lastname: "Geerts",
  firstname: "Quentin",
  birthdate: new Date("1996-04-03"),
};

for (const prop in personne) {
  console.log(prop, personne[prop]);
  console.log("personne.prop :>> ", personne.prop); // undefined
}

console.clear();

// 6.  Méthodes de gestion

const tab = ["Kevin"];

// 6.1.  Ajouter un élément dans le tableau

// 6.1.1.  À la fin
// > .push(valeur)

tab.push("Serge", "Steve"); // ['Kevin', 'Serge', 'Steve']
console.log("tab :>> ", tab);

// 6.1.2.  Au début
// > .unshift(valeur)
tab.unshift("Eddy", "Eliott");
console.log("tab :>> ", tab);

// 6.2.  Supprimer un élément du tableau

// 6.2.1.  Au début
// > .pop(): valeur

// const stagiaire = tab.pop();
// console.log('tab :>> ', tab);
// console.log('stagiaire :>> ', stagiaire);

// 6.2.2.  À la fin
// > .shift(): valeur0
// const stagiaire2 = tab.shift();
// console.log('tab :>> ', tab);
// console.log('stagiaire2 :>> ', stagiaire2);

// 6.3.  Insérer / Supprimer du tableau (où on veut)

// const stagiaires = tab.splice(1, 2);
// console.log('tab :>> ', tab);
// console.log('stagiaires :>> ', stagiaires);

tab.splice(2, 0, "Ibrahima", "Mathieu");
console.log("tab :>> ", tab);

// 6.4.  Reduce
// > Permet de réduire un tableau à une valeur

const tab2 = [7, 8, 1, 12, 45, 9, 32, 12, 51];

const sommeTab2 = tab2.reduce((acc, value) => acc + value);
console.log("sommeTab2 :>> ", sommeTab2);

// 6.5.  Reverse
// Permet de retourner un tableau

// tab.reverse();
const reversedTab = tab.toReversed();

console.log("tab :>> ", tab);
console.log("reversedTab :>> ", reversedTab);

// 6.6. Sort
// Permet de faire un tri ALPHABETIQUE

// tab2.sort((a, b) => a - b);
// const sortedTab2 = tab2.toSorted((a, b) => a - b); // Tri croissant
const sortedTab2 = tab2.toSorted((a, b) => b - a); // Tri décroissant

console.log("tab2 :>> ", tab2);
console.log("sortedTab2 :>> ", sortedTab2);
