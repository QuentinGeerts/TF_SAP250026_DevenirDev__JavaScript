const lastnameInput = document.getElementById("lastname");
const firstnameInput = document.getElementById("firstname");
const birthdateInput = document.getElementById("birthdate");
const btnEnregistrer = document.getElementById("btn-enregistrer");
const resultat = document.getElementById("resultat");

btnEnregistrer.addEventListener("click", () => {
    let lastname = lastnameInput.value;
    let firstname = firstnameInput.value;
    let birthdate = birthdateInput.value;

    resultat.textContent = `Bonjour ${firstname} ${lastname}, vous êtes né le ${birthdate}`;
});
