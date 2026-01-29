/*
    Exercice 01 - Informations utilisateur

    Écrire un programme qui permet de demander à l'utilisateur d'encoder son nom, son prénom et sa date de naissance.
    Ensuite, afficher dans la console: "Bonjour [prenom] [nom], vous êtes né le [date de naissance]."

    Exemple:

    Bonjour Quentin Geerts, vous êtes le 1996-04-03
*/

let nom = prompt("Entrez votre nom: ");
let prenom = prompt("Entrez votre prénom: ");
let dateNaissance = prompt("Entrez votre date de naissance (AAAA-MM-JJ): ");

console.log(`Bonjour ${prenom} ${nom}, vous êtes né le ${dateNaissance}.`);
