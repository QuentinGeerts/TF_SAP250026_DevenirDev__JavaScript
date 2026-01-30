/*
  Démonstration 09 - Dates
*/

// 1.  Création d'une date

// 1.1.  Constructeur vide
const today = new Date();
console.log('today :>> ', today);

// 1.2.  Constructeur avec timestamp
console.log("Timestamp: ", today.getTime());
const date2 = new Date(today.getTime() + 1000);
console.log('date2 :>> ', date2);

// 1.3.  Constructeur avec une chaine de caractères
// <!> format américain
const date3 = new Date("1996-04-03 19:32:12.369");
console.log('date3 :>> ', date3);

// 1.4.  Constructeur avec chaque partie de date
const date4 = new Date(1996, 3, 3, 19, 32, 12, 369);
console.log('date4 :>> ', date4);

// 2.  Méthodes pour extraire une date
const annee = today.getFullYear();
const mois = today.getMonth();

const dayOfWeek = today.getDay();

// 3.  Méthodes pour modifier une date

// 4.  Méthodes de formatage de date

const dateFormatee = new Date().toLocaleDateString(navigator.language, { 
  day: "2-digit", 
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  weekday: "long"
});

console.log(dateFormatee);