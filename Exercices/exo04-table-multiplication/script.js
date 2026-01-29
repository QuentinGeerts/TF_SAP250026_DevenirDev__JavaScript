/*
    Exercice 04 - Table de multiplication

    Créer un programme qui permet à l'utilisateur d'encoder la table de multiplication qu'il souhaite.
    Le programme affiche ensuite toute la table de multiplication (20 calculs).
*/

const tableInput = document.getElementById("table");
const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {
    const table = tableInput.value;

    for (let i = 1; i <= 20; i++) {
        console.log(`${i} * ${table} = ${i * table}`);
        // resultat.textContent += `${i} * ${table} = ${i * table}<br>`;
        // resultat.innerHTML = `<button onclick='alert("JE T AI HACKÉ")'>HACK</button>`;
        resultat.innerHTML += `${i} * ${table} = ${i * table}<br>`; // ⚠️⚠️
    }
});
