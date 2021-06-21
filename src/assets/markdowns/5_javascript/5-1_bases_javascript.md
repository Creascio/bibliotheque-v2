# Bases de Javascript

## Introduction

Le Javascript est un langage de programmation permettant de construire des applications logicielles ou web. C'est un langage proche du script extrêmement polyvalent qui est utilisé dans de nombreux domaines. Il est également la base de nombreux frameworks et autres outils spécialisés. Le but de ce cours est de vous présenter le fonctionnement de ce langage pour pouvoir ensuite l'exploiter dans un contexte d'application web.

## Structure

### Types

Le Javascript est un langage faiblement typé. Ils ne sont pas requis pour la manipulation de donnée mais il existe quand même des types de base :

+ ``number`` : nombre entier, relatif, etc.
+ ``string`` : chaîne de caractères
+ ``boolean`` : information booléenne
+ ``null, undefined`` : variable vide
+ ``symbol``

### Variables

Les variables fonctionnent comme dans n'importe quel autre langage de programmation, elles permettent de stocker une information, une valeur, pour pouvoir être traiter. Il y a plusieurs façon d'instancier une variable :

**Exemple** :

```js
var prenom = 'titi' // string
let nom = 'toto' // string
let age = 2 // number
var sexe = true // boolean
const vérité = 'Les chats sont mieux que les chiens'
```

Il existe de subtiles différences entre les mots clés `var` et `let`, les deux permettent d'instancier des variables et il est préférables d'utiliser `let` la majeure partie du temps. Le but de cet exemple était de présenter les possibilités mais nous n'allons pas nous attarder sur une vraie comparaison.

Le mot clé `const` permet d'instancier une constante, c'est à dire qu'une fois que cette variable se verra attribuer une première fois une valeur, cette valeur ne pourra plus être changée par la suite. Il est très fréquent d'utiliser des constantes en Javascript car on manipule souvent des références mais nous y reviendrons.

*Remarque : les fins d'instructions n'ont pas besoin d'être représentées en Javascript, le `;` n'est pas obligatoire*

*Remarque : les opérandes entre les données de type number (+, -, /, etc) restent inchangées.*

*Remarque : Il est possible de définir des strings avec les simples `''` ou les doubles cotes `""`. Le contexte web utilise les doubles cotes dans certains contextes et il est donc possibles d'utiliser des simples cotes à l'intérieur de doubles cotes (Ex : machin()="'phrase'")*

### Tableaux

En Javascript les tableaux sont eux aussi non typés et peuvent contenir tous types de valeurs.

**Exemple** :

```js
let membres = ['titi', 'toto', 'tutu']

let premierMembre = membres[0] // 'titi'
```

Les tableaux possèdent leur propre logique :

+ `length` : un attribut qui indique la taille du tableau c'est à dire le nombre d'éléments qu'il contient
+ `push(element)` : ajoute un élément à la fin du tableau
+ `unshift(element)` : ajoute un element au début du tableau
+ `pop()` : retire le dernier élément du tableau

**Exemple** :

```js
let membres = []
membres.push('titi') // membres = ['titi']
membres.unshift('toto') // membres = ['toto', 'titi']
let taille = membres.length // 2
membres.pop() // membres = ['toto']
```

### Objets

Les objets Javascript permettent de réunir plusieurs informations ou caractéristiques derrière une seule variable par association clé-valeur. Ils sont décrits par le biais de blocs qui contiennent leurs attributs :

**Exemple** :

```js
let chat = {
  nom: 'pito',
  age : 2
}

let nomDuChat = chat.nom // 'pito'
let ageDuChat = chat['age'] // 2
```

*Remarque : il est possible d'utiliser la syntaxe par pointeur ou par crochet pour accéder à la valeur d'un attribut d'un objet. Tout dépend des informations disponibles sur l'objet en fonction du contexte mais la syntaxe par pointeur reste la plus courante.*

Les éléments d'un tableau ainsi que les attributs d'un objet sont accédés par référence, c'est à dire que modifier ces éléments ne modifie pas le tableau ou l'objet en lui même. De ce fait les tableaux et les objets sont généralement déclarés comme des constantes :

**Exemple** :

```js
const membre = {
  nom : 'toto',
  age: 21
}

const membres = [membre] // un tableau contenant l'objet membre

membre.age = 22 // on modifie l'objet

console.log(membres) // Output : { nom: 'toto', age: 22 }
```

## Algoritmie

### Conditions

Les instructions `if / else / switch`, les opérateurs `<, >, <=, >=, !=` et `&&, ||` fonctionnent de manières similaires aux autres langages.

*Remarque : La comparaison `==` vérifie uniquement la valeur des deux variables, `===` permet de vérifier la valeur et le type des deux variables*

**Exemple** :

```js
let titi = 6
let toto = '6'

console.log(titi == toto) // true
console.log(titi === toto) // false
```

### Boucles de contrôle

La boucle `while` est présente en Javascript mais pas la boucle `do while`. Il existe plusieurs types de boucles `for` :

+ le for "classique"
+ le for...in
+ le for...of

**Exemple** :

```js
let membres = ['titi', 'toto', 'tutu']

for (let i = 0; i < membres.length; i++) {
  console.log('Tu es un membre !')
}

for (let i in members) {
  console.log(members[i] + ' est un SUPER membre !)
}

for (let member of members) {
  console.log(member + 'est un INCROYABLE membre)
}
```

*Remarque : le for...in n'est quasiment jamais utilisé au profit du for...of.*

### Fonctions

Les fonctions en Javascript fonctionnent légerement différement du au contexte sous typé. De plus elles possèdent des propriétés différentes que dans les autres langages mais nous n'aborderons ces propriétés qu'a partir des cours en contexte web.

**Exemple** :

```js
function afficherDesValeurs(valeur1, valeur2) {
  console.log('Première valeur : ' + valeur1)
  console.log('Deuxième valeur : ' + valeur2)
}

function additionner(nombre1, nombre2) {
  return nombre1 + nombre2
}

afficherDesValeurs(6, 'toto') // Output : Première valeur : 6 Deuxième valeur : toto
console.log(additionner(2, 7)) // Output : 9
```

*Remarque : la recursivité est possible en Javascript.*

### Exceptions

Le bloc `try catch` est présent en Javascript et se construit de cette manière :

```js
try {

// code susceptible à l'erreur ici

} catch (error) {

// réaction aux erreurs ici

}
```

## Classes et méthodes

Les classes sont des blocs qui permettent de réunir à la fois un modèle de données pour un objet mais aussi des fonctions qui lui sont propres grâce aux méthodes d'instances. Les types de données ainsi créés fonctionnent commes les autres types du Javascript à l'exception de l'instanciation.

**Exemple** :

```js
class Chat {

  constructor(nom, age) {
    this.nom = nom
    this.age = age
  }

  miauler() {
    console.log('miaou !')
  }

  static verite(nombre) {
    return 'Les chats sont ' + nombre + ' fois meilleurs que les chiens :)'
  }

}

let chat = new Chat('malo', 3)
chat.miauler() // 'miaou !'
const laVerite = Chat.verite(10) // 'Les chats sont 10 fois meilleurs que les chiens :)'
```

## Tests unitaires

*Coming soon...*

## Exercices

*Coming soon...*
