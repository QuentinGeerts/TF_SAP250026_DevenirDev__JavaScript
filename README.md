# Formation JavaScript - Devenir Développeur

> 📚 Support de cours - Démonstrations et exercices JavaScript (Base | DOM | Consommation)

## 📋 Table des matières

1. [Introduction au JavaScript](#demo-01---introduction-au-javascript)
2. [Les variables](#demo-02---les-variables)
3. [Opérations d'entrées et sorties](#demo-03---opérations-dentrées-et-sorties)
4. [Les opérateurs](#demo-04---les-opérateurs)
5. [Structures conditionnelles](#demo-05---structures-conditionnelles)
6. [Structures itératives](#demo-06---structures-itératives)
7. [Les tableaux](#demo-07---les-tableaux)
8. [Les fonctions](#demo-08---les-fonctions)
9. [Les dates](#demo-09---les-dates)
10. [Les timers](#demo-10---les-timers)

---

## Demo 01 - Introduction au JavaScript

### 🎯 Objectifs
- Comprendre l'intégration du JavaScript dans une page HTML
- Découvrir la console du navigateur
- Apprendre les différentes méthodes d'affichage

### 📝 Notions abordées

#### 1. Intégration du JavaScript

Il existe **3 façons** d'intégrer du JavaScript dans une page HTML :

**a) JavaScript en ligne (💩 À éviter)**
```html
<h1 onclick="console.log('Hello')">Titre</h1>
```
❌ Mélange le HTML et le JavaScript, difficile à maintenir

**b) Balise `<script>` interne (✅ Acceptable)**
```html
<script>
    window.addEventListener("DOMContentLoaded", () => {
        console.log("Hello depuis la balise script");
    });
</script>
```
✅ Utile pour de petits scripts spécifiques à une page

**c) Fichier externe (💘 Recommandé)**
```html
<script src="./script.js" defer></script>
```
✅ Meilleure pratique : séparation des responsabilités
> **Astuce** : L'attribut `defer` permet de charger le script de manière asynchrone

#### 2. La console du navigateur

La console est l'outil principal du développeur JavaScript.

**Ouvrir la console :**
- Clic droit > Inspecter
- Touche `F12`
- `CTRL + SHIFT + J` (Windows/Linux)
- `CMD + OPTION + J` (Mac)

**Méthodes d'affichage :**

```javascript
// Affichage simple
console.log("Message normal");

// Affichage d'un avertissement (jaune)
console.warn("Attention !");

// Affichage d'une erreur (rouge)
console.error("Erreur détectée");

// Affichage détaillé d'un objet
console.dir(element);

// Affichage sous forme de tableau
console.table(objet);

// Nettoyer la console
console.clear();

// Mesurer le temps d'exécution
console.time("counter1");
// ... code ...
console.timeEnd("counter1");
```

---

## Demo 02 - Les variables

### 🎯 Objectifs
- Comprendre la déclaration et l'affectation de variables
- Distinguer `let`, `const` et `var`
- Découvrir le typage dynamique

### 📝 Notions abordées

#### 1. Déclaration et affectation

```javascript
// 1. Déclaration
let nomVariable;
console.log(nomVariable); // undefined

// 2. Affectation
nomVariable = "Quentin";
console.log(nomVariable); // "Quentin"
```

#### 2. Typage dynamique

JavaScript possède un **typage dynamique** : une variable peut changer de type.

```javascript
let variable = "texte";     // string
variable = 12;              // number
variable = true;            // boolean
variable = [];              // object (Array)
variable = new Date();      // object (Date)
variable = {};              // object
variable = () => {};        // function
```

**Vérifier le type :**
```javascript
typeof variable;                  // Type primitif
variable.constructor.name;        // Type constructeur (pour les objets)
```

#### 3. Let vs Const vs Var

| Mot-clé | Réaffectation | Portée | Recommandation |
|---------|---------------|--------|----------------|
| `let` | ✅ Oui | Bloc | ✅ Recommandé |
| `const` | ❌ Non | Bloc | 💘 Préféré |
| `var` | ✅ Oui | Globale | 💩 À éviter |

**Exemple de portée :**
```javascript
let maVariable = 42;
var maVariable2 = 42;

if (true) {
    let maVariable = "Hello";
    var maVariable2 = "Hello";
    
    console.log(maVariable);  // "Hello"
    console.log(maVariable2); // "Hello"
}

console.log(maVariable);  // 42 (let est scopé au bloc)
console.log(maVariable2); // "Hello" (var est global !)
```

#### 4. Récupération de données utilisateur

```javascript
// Méthode prompt (boîte de dialogue)
let age = prompt("Quel âge as-tu ?", "18");
console.log(age); // Retourne toujours une string
```

> ⚠️ **Important** : `prompt()` retourne **toujours une chaîne de caractères** (`string`)

---

## Demo 03 - Opérations d'entrées et sorties

### 🎯 Objectifs
- Maîtriser les différentes sorties (console, DOM)
- Gérer les entrées utilisateur (DOM)
- Manipuler le DOM avec JavaScript

### 📝 Notions abordées

#### 1. Les sorties

**a) Console** (pour le développement)
```javascript
console.log("Message");
```

**b) Boîte de dialogue** (💩 À éviter)
```javascript
alert("Message"); // Bloque l'exécution du code
```

**c) DOM** (💘 Recommandé)
```javascript
const p1 = document.getElementById("p1");
p1.textContent = "Texte modifié";
```

#### 2. Les entrées

**a) Boîte de dialogue** (💩 À éviter)
```javascript
let prenom = prompt("Comment t'appelles-tu ?");
```

**b) DOM** (💘 Recommandé)
```javascript
// Récupération de l'input
const userInput = document.getElementById("userInput");

// Lecture de la valeur
console.log(userInput.value);

// Écouter les changements
userInput.addEventListener("input", () => {
    console.log(userInput.value);
});
```

#### 3. Manipulation du DOM

```javascript
// Sélectionner un élément
const element = document.getElementById("monId");

// Modifier le contenu
element.textContent = "Nouveau texte";

// Écouter un événement
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    console.log("Bouton cliqué !");
});
```

---

## Demo 04 - Les opérateurs

### 🎯 Objectifs
- Maîtriser les opérateurs arithmétiques
- Comprendre les différents types de comparaison
- Utiliser les opérateurs logiques
- Découvrir les opérateurs modernes

### 📝 Notions abordées

#### 1. Opérateurs arithmétiques

```javascript
let a = 10, b = 4;

console.log(a + b);  // 14 (Addition)
console.log(a - b);  // 6  (Soustraction)
console.log(a * b);  // 40 (Multiplication)
console.log(a / b);  // 2.5 (Division)
console.log(a % b);  // 2  (Modulo - reste)

// Division entière
console.log(parseInt(a / b)); // 2
```

#### 2. Opérateurs de comparaison

**a) Égalité**

```javascript
// == : Comparaison de VALEUR uniquement
console.log(4 == 4);   // true
console.log(4 == "4"); // true ⚠️

// === : Comparaison de VALEUR ET TYPE (recommandé)
console.log(4 === 4);   // true
console.log(4 === "4"); // false ✅
```

**b) Différence**

```javascript
// != : Différence de valeur
console.log(4 != "4"); // false

// !== : Différence de valeur ET type (recommandé)
console.log(4 !== "4"); // true ✅
```

**c) Comparaisons**

```javascript
a < b   // Inférieur
a <= b  // Inférieur ou égal
a > b   // Supérieur
a >= b  // Supérieur ou égal
```

#### 3. Opérateurs logiques

```javascript
// ET logique (&&) - Toutes les conditions doivent être vraies
true && true   // true
false && true  // false

// OU logique (||) - Au moins une condition doit être vraie
true || false  // true
false || false // false

// NON logique (!) - Inverse la valeur
!true  // false
!false // true
```

#### 4. Opérateurs raccourcis

```javascript
let a = 10;

a = a + 5;  // Forme longue
a += 5;     // Forme raccourcie

// Autres opérateurs raccourcis
a -= 5;  // a = a - 5
a *= 2;  // a = a * 2
a /= 2;  // a = a / 2
```

#### 5. Incrémentation / Décrémentation

```javascript
let c = 5;

// Post-incrémentation (retourne puis incrémente)
let d = c++;  // d: 5, c: 6

// Pré-incrémentation (incrémente puis retourne)
let e = ++c;  // c: 7, e: 7

// Post-décrémentation
let f = c--;  // f: 7, c: 6

// Pré-décrémentation
let g = --c;  // c: 5, g: 5
```

#### 6. Opérateur ternaire

```javascript
// Syntaxe : condition ? valeurSiVrai : valeurSiFaux
let age = 18;
console.log(age >= 18 ? "Adulte" : "Enfant");
```

#### 7. Opérateurs modernes (ES6+)

**a) Nullish Coalescing (`??`)**
```javascript
// Retourne la valeur de droite si la gauche est null ou undefined
let pseudo = document.getElementById('pseudo') ?? "anonyme";
```

**b) Optional Chaining (`?.`)**
```javascript
// Évite les erreurs si l'élément n'existe pas
document.getElementById('pseudo')?.value;
```

---

## Demo 05 - Structures conditionnelles

### 🎯 Objectifs
- Maîtriser la structure `if...else if...else`
- Utiliser la structure `switch`
- Choisir la bonne structure selon le contexte

### 📝 Notions abordées

#### 1. Structure `if`

```javascript
// Syntaxe de base
if (condition) {
    // Bloc exécuté si la condition est vraie
}

// Avec else
if (condition) {
    // Si vrai
} else {
    // Si faux
}

// Avec else if
if (condition1) {
    // Si condition1 vraie
} else if (condition2) {
    // Si condition2 vraie
} else {
    // Sinon
}
```

**Exemple pratique :**
```javascript
let age = 18;

if (age < 18) {
    console.log("Mineur");
} else if (age >= 18 && age < 65) {
    console.log("Adulte");
} else {
    console.log("Senior");
}
```

#### 2. Structure `switch`

```javascript
switch (expression) {
    case valeur1:
    case valeur2:
        // Instructions pour valeur1 ou valeur2
        break;
    case valeur3:
        // Instructions pour valeur3
        break;
    default:
        // Instructions par défaut
        break;
}
```

**Exemple pratique :**
```javascript
let jour = 3;

switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    default:
        console.log("Jour inconnu");
        break;
}
```

> ⚠️ **Important** : Ne pas oublier le `break` pour éviter l'exécution en cascade !

---

## Demo 06 - Structures itératives

### 🎯 Objectifs
- Maîtriser les différentes boucles
- Comprendre les différences entre `for`, `for...in`, `for...of`
- Utiliser `break` et `continue`

### 📝 Notions abordées

#### 1. Boucle `while`

```javascript
// Syntaxe
while (condition) {
    // Bloc d'instructions
}

// Exemple
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

#### 2. Boucle `do...while`

```javascript
// Syntaxe
do {
    // Bloc d'instructions (exécuté au moins une fois)
} while (condition);

// Exemple
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
```

> 💡 **Différence** : `do...while` exécute le code **au moins une fois**, même si la condition est fausse.

#### 3. Boucle `for`

```javascript
// Syntaxe
for (initialisation; condition; incrémentation) {
    // Bloc d'instructions
}

// Exemple
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

#### 4. Méthode `forEach` (tableaux)

```javascript
const fruits = ["Pomme", "Poire", "Banane"];

// Avec tous les paramètres
fruits.forEach((fruit, index, tableau) => {
    console.log(`${index}: ${fruit}`);
});

// Version simplifiée
fruits.forEach(fruit => {
    console.log(fruit);
});
```

#### 5. Boucle `for...in` (indices/clés)

```javascript
const fruits = ["Pomme", "Poire", "Banane"];

// Itère sur les INDICES
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

// Utile pour les objets
const personne = { nom: "Geerts", prenom: "Quentin" };
for (const prop in personne) {
    console.log(`${prop}: ${personne[prop]}`);
}
```

#### 6. Boucle `for...of` (valeurs)

```javascript
const fruits = ["Pomme", "Poire", "Banane"];

// Itère sur les VALEURS directement
for (const fruit of fruits) {
    console.log(fruit);
}
```

| Boucle | Utilisation | Retour |
|--------|-------------|--------|
| `for...in` | Objets et tableaux | **Indices/clés** |
| `for...of` | Tableaux itérables | **Valeurs** |

#### 7. Mots-clés `break` et `continue`

**a) `break` - Sortir de la boucle**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 4) break; // Sort de la boucle
    console.log(i); // 0, 1, 2, 3
}
```

**b) `continue` - Passer à l'itération suivante**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 4) continue; // Saute l'itération 4
    console.log(i); // 0, 1, 2, 3, 5, 6, 7, 8, 9
}
```

---

## Demo 07 - Les tableaux

### 🎯 Objectifs
- Créer et manipuler des tableaux
- Maîtriser les méthodes essentielles
- Comprendre les tableaux associatifs

### 📝 Notions abordées

#### 1. Déclaration

```javascript
// À la volée (recommandé)
const monTableau = [];

// Avec le constructeur (💩 moins utilisé)
const monTableau2 = new Array();

// Déclaration avec valeurs
const fruits = ["Pomme", "Poire", "Banane"];

// Tableau de taille fixe (vide)
const tableau = new Array(42);
```

#### 2. Propriétés et accès

```javascript
const fruits = ["Pomme", "Poire", "Banane"];

// Taille du tableau
console.log(fruits.length); // 3

// Accès par index (commence à 0)
console.log(fruits[0]); // "Pomme"
console.log(fruits[1]); // "Poire"
console.log(fruits[2]); // "Banane"

// Index inexistant
console.log(fruits[999]); // undefined
```

#### 3. Tableaux associatifs (objets)

```javascript
const platsSemaine = [];
platsSemaine["lundi"] = "Sandwich";
platsSemaine["mardi"] = "Cassoulet";

console.log(platsSemaine["lundi"]); // "Sandwich"

// Taille d'un tableau associatif
console.log(Object.keys(platsSemaine).length);

// Itération
for (const jour in platsSemaine) {
    console.log(`${jour}: ${platsSemaine[jour]}`);
}
```

> 💡 **Préférer les objets** pour les tableaux associatifs :
```javascript
const platsSemaine = {
    lundi: "Sandwich",
    mardi: "Cassoulet"
};
```

#### 4. Méthodes de manipulation

**a) Ajouter des éléments**

```javascript
const tab = ["Kevin"];

// Ajouter à la fin
tab.push("Serge", "Steve");
// ["Kevin", "Serge", "Steve"]

// Ajouter au début
tab.unshift("Eddy", "Eliott");
// ["Eddy", "Eliott", "Kevin", "Serge", "Steve"]
```

**b) Supprimer des éléments**

```javascript
// Supprimer le dernier élément
const dernier = tab.pop();

// Supprimer le premier élément
const premier = tab.shift();
```

**c) Insérer/Supprimer avec `splice`**

```javascript
// Supprimer 2 éléments à partir de l'index 1
const supprimes = tab.splice(1, 2);

// Insérer sans supprimer (0 suppression)
tab.splice(2, 0, "Nouveau1", "Nouveau2");
```

#### 5. Méthodes de transformation

**a) `reduce` - Réduire à une valeur**

```javascript
const nombres = [7, 8, 1, 12, 45];

const somme = nombres.reduce((acc, value) => acc + value);
console.log(somme); // 73

// Avec valeur initiale
const somme2 = nombres.reduce((acc, value) => acc + value, 100);
console.log(somme2); // 173
```

**b) `reverse` - Inverser l'ordre**

```javascript
// Modifie le tableau original (ancien)
tab.reverse();

// Version immutable (ES2023)
const reversed = tab.toReversed();
```

**c) `sort` - Trier**

```javascript
const nombres = [7, 8, 1, 12, 45, 9];

// ⚠️ Tri alphabétique par défaut !
nombres.sort(); // [1, 12, 45, 7, 8, 9]

// Tri numérique croissant
nombres.sort((a, b) => a - b); // [1, 7, 8, 9, 12, 45]

// Tri numérique décroissant
nombres.sort((a, b) => b - a); // [45, 12, 9, 8, 7, 1]

// Version immutable (ES2023)
const sorted = nombres.toSorted((a, b) => a - b);
```

---

## Demo 08 - Les fonctions

### 🎯 Objectifs
- Maîtriser les différents types de fonctions
- Comprendre les fonctions de rappel (callbacks)
- Utiliser l'opérateur rest

### 📝 Notions abordées

#### 1. Fonction nommée

```javascript
/**
 * Additionne deux nombres
 * @param {number} nb1 - Premier nombre
 * @param {number} nb2 - Deuxième nombre
 * @return {number} La somme
 */
function addition(nb1, nb2) {
    let n1 = parseFloat(nb1);
    let n2 = Number(nb2);
    
    if (isNaN(n1) || isNaN(n2)) {
        throw new Error("Les paramètres doivent être des nombres");
    }
    
    return n1 + n2;
}

console.log(addition(12, 14)); // 26
```

#### 2. Fonction anonyme

```javascript
// Stockée dans une variable
const isEven = function(nb) {
    return nb % 2 === 0;
};

console.log(isEven(12)); // true

// Dans un tableau
const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; },
    function(a, b) { return a * b; },
    function(a, b) { return a / b; }
];

console.log(operations[0](5, 3)); // 8
```

#### 3. Fonction lambda (arrow function)

```javascript
// Syntaxe courte
const soustraction = (nb1, nb2) => nb1 - nb2;

// Avec un corps de fonction
const multiplication = (nb1, nb2) => {
    console.log("Multiplication");
    return nb1 * nb2;
};

// Dans un objet
const operation = {
    addition: function(a, b) { return a + b; },
    soustraction: (a, b) => a - b
};
```

**Différence importante : `this`**

```javascript
const obj = {
    fnAnonyme: function() {
        console.log(this); // Réfère à l'objet
    },
    fnLambda: () => {
        console.log(this); // Réfère au contexte global
    }
};
```

> 💡 Utilisez les fonctions anonymes classiques quand vous avez besoin de `this`

#### 4. Opérateur rest (`...`)

```javascript
function sum(initialValue, ...values) {
    return values.reduce((acc, value) => acc + value, initialValue);
}

console.log(sum(0, 1, 2, 3, 4, 5)); // 15
console.log(sum(10, 5, 3));         // 18
```

#### 5. Fonctions de rappel (Callbacks)

```javascript
/**
 * Filtre personnalisé
 * @param {any[]} array - Tableau à filtrer
 * @param {Function} callbackFn - Fonction de test
 * @return {any[]} Tableau filtré
 */
function customFilter(array, callbackFn) {
    const filteredArray = [];
    
    for (const value of array) {
        if (callbackFn(value)) {
            filteredArray.push(value);
        }
    }
    
    return filteredArray;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Avec une fonction nommée
const isEven = (nb) => nb % 2 === 0;
console.log(customFilter(values, isEven));
// [2, 4, 6, 8, 10]

// Avec une fonction anonyme
console.log(customFilter(values, (v) => v % 5 === 0));
// [5, 10]

// Avec des objets
const personnes = [
    { nom: "Geerts", prenom: "Quentin", genre: "M", age: 29 },
    { nom: "Geerts", prenom: "Mélanie", genre: "F", age: 37 }
];

console.log(customFilter(personnes, p => p.genre === "M"));
console.log(customFilter(personnes, p => p.age > 30));
```

---

## Demo 09 - Les dates

### 🎯 Objectifs
- Créer et manipuler des dates
- Extraire des informations d'une date
- Formater l'affichage des dates

### 📝 Notions abordées

#### 1. Création d'une date

**a) Date actuelle**
```javascript
const today = new Date();
console.log(today);
```

**b) Avec un timestamp**
```javascript
const timestamp = today.getTime(); // Millisecondes depuis 1970
const date2 = new Date(timestamp + 1000); // +1 seconde
```

**c) Avec une chaîne de caractères**
```javascript
// ⚠️ Format américain (AAAA-MM-JJ)
const date3 = new Date("1996-04-03 19:32:12.369");
```

**d) Avec des paramètres**
```javascript
// new Date(année, mois, jour, heure, minute, seconde, ms)
// ⚠️ Les mois commencent à 0 (janvier = 0)
const date4 = new Date(1996, 3, 3, 19, 32, 12, 369);
// = 3 avril 1996
```

#### 2. Extraction d'informations

```javascript
const date = new Date();

const annee = date.getFullYear();      // 2025
const mois = date.getMonth();          // 0-11 (0 = janvier)
const jour = date.getDate();           // 1-31
const jourSemaine = date.getDay();     // 0-6 (0 = dimanche)

const heures = date.getHours();        // 0-23
const minutes = date.getMinutes();     // 0-59
const secondes = date.getSeconds();    // 0-59
const ms = date.getMilliseconds();     // 0-999
```

#### 3. Modification d'une date

```javascript
const date = new Date();

date.setFullYear(2025);
date.setMonth(11);        // Décembre
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
```

#### 4. Formatage

```javascript
const dateFormatee = new Date().toLocaleDateString(
    navigator.language, // Langue du navigateur
    {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        weekday: "long"
    }
);

console.log(dateFormatee);
// "vendredi 30 janvier 2026 à 14:30"
```

**Options de formatage disponibles :**
- `day`: "numeric", "2-digit"
- `month`: "numeric", "2-digit", "long", "short", "narrow"
- `year`: "numeric", "2-digit"
- `weekday`: "long", "short", "narrow"
- `hour`, `minute`, `second`: "numeric", "2-digit"

---

## Demo 10 - Les timers

### 🎯 Objectifs
- Différencier `setTimeout` et `setInterval`
- Gérer l'arrêt des timers
- Implémenter des compteurs

### 📝 Notions abordées

#### 1. `setTimeout` - Exécution différée

**Exécute une fonction UNE SEULE FOIS après un délai.**

```javascript
// Syntaxe
const timerId = setTimeout(callback, delai);

// Exemple
let timerTimeout;

// Démarrer
timerTimeout = setTimeout(() => {
    console.log("Exécuté après 1 seconde");
    timerTimeout = null;
}, 1000);

// Annuler avant l'exécution
clearTimeout(timerTimeout);
timerTimeout = null;
```

**Exemple pratique :**
```javascript
const timeoutStart = document.getElementById("timeout-start");
const timeoutStop = document.getElementById("timeout-stop");
let timerTimeout;

timeoutStart.addEventListener("click", () => {
    if (timerTimeout != null) return; // Éviter les doublons
    
    timerTimeout = setTimeout(() => {
        console.log("Timer déclenché !");
        timerTimeout = null;
    }, 1000);
});

timeoutStop.addEventListener("click", () => {
    clearTimeout(timerTimeout);
    timerTimeout = null;
});
```

#### 2. `setInterval` - Exécution répétée

**Exécute une fonction RÉPÉTITIVEMENT à intervalle régulier.**

```javascript
// Syntaxe
const timerId = setInterval(callback, intervalle);

// Exemple
let timerInterval;

// Démarrer
timerInterval = setInterval(() => {
    console.log("Exécuté toutes les secondes");
}, 1000);

// Arrêter
clearInterval(timerInterval);
timerInterval = null;
```

**Exemple pratique : Compteur**
```javascript
const intervalStart = document.getElementById("interval-start");
const intervalStop = document.getElementById("interval-stop");
const intervalDisplay = document.getElementById("interval-display");

let intervalCount = 0;
let timerInterval;

intervalStart.addEventListener("click", () => {
    if (timerInterval != null) return; // Déjà actif
    
    timerInterval = setInterval(() => {
        intervalCount++;
        intervalDisplay.textContent = intervalCount;
    }, 1000);
});

intervalStop.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
});
```

#### Comparaison

| Fonction | Usage | Répétition | Arrêt |
|----------|-------|------------|-------|
| `setTimeout` | Exécution différée | UNE fois | `clearTimeout()` |
| `setInterval` | Exécution répétée | MULTIPLE | `clearInterval()` |

> ⚠️ **Important** : Toujours stocker l'ID du timer et le nettoyer (`clear`) pour éviter les fuites mémoire !

---

## 📚 Exercices

Les exercices pratiques sont disponibles dans le fichier [`exercices.md`](./exercices.md).

### Liste des exercices :
1. **Exercice 01** - Informations utilisateur (variables + prompt)
2. **Exercice 02** - Version DOM (entrées/sorties)
3. **Exercice 03** - Année bissextile (conditions)
4. **Exercice 04** - Table de multiplication (boucles)
5. **Exercice 05** - 10 valeurs (tableaux + méthodes)
6. **Exercice 06** - Convertisseur d'unités (fonctions)
7. **Exercice 07** - Écran de veille (dates + timers)

---

## 💡 Conseils et bonnes pratiques

### 1. Conventions de nommage
```javascript
// Variables et fonctions : camelCase
let monNomDeVariable = 42;
function maFonction() {}

// Constantes globales : UPPER_SNAKE_CASE
const BASE_URL_API = "https://api.exemple.com";

// Classes : PascalCase
class MaClasse {}
```

### 2. Préférer `const` par défaut
```javascript
// ✅ Bon
const MAX_VALUE = 100;
const users = [];

// ❌ À éviter si non modifié
let MAX_VALUE = 100;
```

### 3. Utiliser `===` au lieu de `==`
```javascript
// ✅ Bon - Compare valeur ET type
if (value === 42) {}

// ❌ Éviter - Compare uniquement la valeur
if (value == 42) {}
```

### 4. Éviter les variables globales
```javascript
// ❌ Variable globale
var globalVar = 42;

// ✅ Scope limité
function maFonction() {
    const localVar = 42;
}
```

### 5. Commenter intelligemment
```javascript
// ❌ Commentaire inutile
let age = 18; // Déclare age

// ✅ Commentaire utile
// Le seuil est fixé à 18 ans selon la législation belge
const MAJORITE = 18;
```

---

## 🔗 Ressources supplémentaires

- [MDN Web Docs](https://developer.mozilla.org/fr/) - Documentation officielle JavaScript
- [JavaScript.info](https://javascript.info/) - Tutoriel moderne et complet
- [Can I Use](https://caniuse.com/) - Compatibilité des fonctionnalités JavaScript

---

## 📝 Notes du formateur

> Ce support de cours couvre les **bases du JavaScript**. Les notions de **DOM avancé** et de **consommation d'API** seront abordées dans les prochaines sessions.

**Quentin Geerts**  
Formateur .NET & JavaScript

---

*Dernière mise à jour : Janvier 2026*
