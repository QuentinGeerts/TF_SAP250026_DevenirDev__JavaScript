/*

  Exercice 06 - Convertisseur d'unités

  Créer un programme qui permet à l'utilisateur d'encoder une donnée dans un champ texte.
  Proposer 4 boutons qui permettent de convertir l'unité entré dans une unité proposé:
  - Celsius → Fahrenheit ((0 °C × 9/5) + 32)
  - Fahrenheit → Celsius ((0 °F − 32) × 5/9)
  - Kilomètres → Miles (km * 0,621371)
  - Miles → Kilomètres (miles * 1,60934)

  Afficher le résultat sur la page.

  ⚠️ Pour chaque bouton, vous créez une méthode de conversion qui prend en paramètre l'unité récupérée.

*/

const btnCF = document.getElementById("btnCF");
const btnFC = document.getElementById("btnFC");
const btnKMMi = document.getElementById("btnKMMi");
const btnMiKM = document.getElementById("btnMiKM");
const valueInput = document.getElementById("value");
const resultat = document.getElementById("resultat");

function celsiusToFahrenheit(value) {
  return value * (9 / 5) + 32;
}

function fahrenheitToCelsius(value) {
  return (value - 32) * (5 / 9);
}

function kilometersToMiles(value) {
  return value * 0.621371;
}

function milesToKilometers(value) {
  return value * 1.60934;
}

// DRY : Don't Repeat Yourself

function convertir(fonctionConversion, unite1, unite2) {
  const value = parseFloat(valueInput.value);
  const resultatConversion = fonctionConversion(value);
  const resultatArrondi = resultatConversion.toFixed(2); // Pour arrondir à 2 décimales

  resultat.textContent = `${value} ${unite1} → ${resultatArrondi} ${unite2}`;
}

btnCF.addEventListener("click", () => {
  convertir(celsiusToFahrenheit, "C°", "F°");
});

btnFC.addEventListener("click", () => {
  convertir(fahrenheitToCelsius, "F°", "C°");
});

btnKMMi.addEventListener("click", () => {
  convertir(kilometersToMiles, "KM", "Mi");
});

btnMiKM.addEventListener("click", () => {
  convertir(milesToKilometers, "Mi", "KM");
});