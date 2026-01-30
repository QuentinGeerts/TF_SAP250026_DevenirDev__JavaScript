/*
    Exercice 05 - 10 valeurs

    Créer un programme qui à l'utilisateur d'entrer dans un seul champ texte 10 valeurs séparées par une virgule.
    Stocker les valeurs dans un tableau, ensuite calculer la moyenne des valeurs.

    Finalement, afficher le tableau sur la page avec la moyenne en-dessous.

    BONUS: Format demandé: "[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] - Moyenne: 5"
*/

const valuesInput = document.getElementById("values");
const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {
  // Récupération de la chaîne de caractères
  const valuesString = valuesInput.value;
  const values = valuesString.split(",").map((v) => parseInt(v));

  const somme = values.reduce((acc, value) => acc + value);
  const moyenne = somme / values.length;
  const format = `[ ${values.join(", ")} ]`;

  resultat.textContent = `${format} - Moyenne: ${moyenne}`;
});
