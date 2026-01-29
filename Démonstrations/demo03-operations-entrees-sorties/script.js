/*
    Démonstration 03 - Opérations d'entrées et sorties
*/

// 1.  Sorties

// 1.1.  Console
// cfr. démonstration 01

// 1.2.  Boite de dialogue (💩)
// alert("Coucou");

// 1.3.  DOM (Document Object Model)

// Récupérer le paragraphe
const p1 = document.getElementById("p1");
p1.textContent = "Texte modifié depuis le Javascript";


// 2.  Entrées
// 2.1.  Boite de dialogue
// let prenom = prompt("Comment t'appelles-tu ?");
// p1.textContent = "Tu t'appelles: " + prenom;

// 2.2.  DOM
const userInput = document.getElementById("userInput");
p1.textContent = "Tu t'appelles " + userInput.value;

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    p1.textContent = "Tu t'appelles " + userInput.value;
});

// userInput.addEventListener("input", () => {
//     p1.textContent = "Tu t'appelles " + userInput.value;
// });