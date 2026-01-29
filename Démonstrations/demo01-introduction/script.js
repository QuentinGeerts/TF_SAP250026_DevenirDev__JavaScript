// window.addEventListener("click", () => {
//     console.log("T'as cliqué !");
// });

const btn1 = document.getElementById("btn1");

console.log('btn1 :>> ', btn1);

// Pour afficher en console:

console.log("Affichage simple en console.");
console.warn("Affichage d'un avertissement.");
console.error("Affichage d'une erreur.");
// console.clear(); // permet de nettoyer la console
console.dir(btn1);

const personne = {
    lastname: "Geerts",
    firstname: "Quentin"
};

console.log(personne);

console.table(personne);

console.time("counter1");
setTimeout(() => {
    console.timeEnd("counter1")
}, 4000);