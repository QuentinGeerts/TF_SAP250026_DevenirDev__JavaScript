const yearInput = document.getElementById("year");
const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {
    const year = yearInput.value;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resultat.textContent = `L'année ${year} est une année bissextile`;
    }
    else {
        resultat.textContent = `L'année ${year} n'est pas une année bissextile`;
    }
});