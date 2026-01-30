/*
    Démonstration 06 - Structures itératives
*/

// 1.  Structure "while"

/* -- Syntaxe

    while (expression_booléenne) {
        // bloc d'instructions
    }

/*

// 2.  Structure "do...while"

/* -- Syntaxe

    do {
        // bloc d'instructions
    } while (expression_booléenne);
        
*/

// 3.  Structure "for"

/* -- Syntaxe

    for (let i = 0; i < 10; i++) {
        // bloc d'instructions
    }

*/

// 4.  Méthode "forEach" sur les tableaux

const fruits = [ "Clémentine", "Pomme", "Poire", "Banane", "Cerise", "Ananas" ];

fruits.forEach((fruit, index, tableau) => {
    if (index % 2 === 0)
        console.log(` - ${fruit}`);
    else 
        console.warn(` - ${fruit}`);
});

// 5.  Structure "for..in"

for (const index in fruits) {
    console.log(` - ${fruits[index]}`);
}

// 6.  Structure "for..of"

for (const fruit of fruits) {
    console.log(` - ${fruit}`);
}

// 7.  Mot-clefs "break" & "continue"

console.warn("BREAK");

for (let i = 0; i < 10; i++) {
    if (i == 4) break; // Permet de sortir de la structure
    console.log(`i: ${i}`);
}

console.warn("CONTINUE");

for (let i = 0; i < 10; i++) {
    if (i == 4) continue; // Permet de sortir de l'itération en cours
    console.log(`i: ${i}`);
}