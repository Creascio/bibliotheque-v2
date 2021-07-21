# Boucles de Contrôle

## Introduction

Il est très fréquent de vouloir **répéter une instruction** ou une action dans un programme pour traiter un groupe de données par exemple.

Plutôt que de devoir répéter le même code plusieurs fois il est possible d'utiliser ce que l'on appelle des **boucles de contrôles** qui, comme leur nom l'indique, permettent de créer des **boucles** dans notre programme avec des conditions d'entrée et de sortie.

## Fonctionnement

Toutes les types de boucles de contrôles respectent un certain fonctionnement. Toute boucle possède une **condition** et un **bloc de code**. Le bloc de code sera **répété** un certain nombre de fois en fonction de la condition et du type de boucle.

On appelle **une répétition** du bloc de code d'une boucle un **tour de boucle**.

## La boucle while

La boucle `while` peut se traduire en langage littéral par **"TANT QUE"**.

Cette boucle est composée d'une **condition booléenne**. Son bloc de code peut contenir plusieurs instructions qui seront répétées **tant que** la condition du `while` est **valide**.

_Remarque : la nature même de la boucle `while` fait qu'elle peut provoquer ce que l'on appelle une boucle infinie en fonction de sa condition. Le programme sera alors bloqué dans la boucle et ce jusqu'à son arrêt._

Voici comment se contruit une boucle `while` :

```
while (condition) {
  // instructions
  // à répéter
}
// suite du programme
```

Et voici un exemple d'utilisation de la boucle :

```
int compteur = 3;

while (compteur > 0) {
  print(compteur);
  compteur--;
}
print("C'est fini !");
```

Dans l'exemple du dessus, on utilise la boucle `while` pour créer une sorte de compte à rebours. La variable `compteur` à pour valeur initiale "3".

**Tant que** la valeur de `compteur` a pour valeur un nombre positif au dessus de "0", à chaque **tour de boucle** on affiche sa valeur et on diminue ensuite de 1 cette valeur.

On obtient alors un affiche similaire à celui-ci :

`3`
`2`
`1`
`C'est fini !`

## La boucle do while

La boucle `do...while` est extremement similaire à la boucle `while`. La seule différence est que la condition de la boucle est testée **en fin de tour de boucle**.

Cela se traduit par le fait que le bloc de code d'une boucle `do...while` est toujours exécuté **au moins une fois**, ce qui n'est pas le cas dans une boucle `while`.

La boucle se construit de cette façon :

```
do {
  // instructions
  // à répéter
} while (condition);
print("C'est fini !");
// suite du programme
```

Si l'on souhaite reproduire le même résultat que dans l'exemple du compte à rebours ci-dessus, cela donne :

```
int compteur = 3;

do {
  print(compteur);
  compteur--;
} while (compteur > 0);
```

_Remarque : une utilisation pratique de la boucle `do..while` peut être dans les menus ou autres interfaces utilisateurs. Autrement on priorise la boucle `while`._

## La boucle for

La boucle `for` est la boucle la plus communément utilisée. Il existe différentes formes de la boucle `for` mais nous verrons uniquement dans ce cours la plus simple.

Une boucle `for` classique permet de condenser plusieurs informations à la fois. La boucle a besoin d'une **initialisation**, d'une **condition** et enfin d'une **incrementation**.

La boucle `for` nécessite une **variable numérique** servant de **compteur de boucle** pour pouvoir fonctionner. La valeur de cette variable représente l'index de la boucle, c'est-à-dire au combientième tour en est la boucle. C'est une sorte de **compteur intégré**.

C'est cette variable compteur qui est concernée par les étapes d'**initialisation** et d'**incrémentation** de la boucle `for`.

L'initialisation permet d'indiquer quelle sera la **valeur de départ** du compteur au **départ de la boucle**. L'incrémentation permet d'indiquer de quelle façon évolue **la valeur du compteur** à chaque tour de boucle.

Une boucle `for` se construit de cette façon :

```
for (initialisation ; condition ; incrementation) {
  // instructions
  // à répéter
}
// suite du programme
```

Voici un exemple d'utilisation classique :

```
for (int i = 0; i < 3; i++) {
  print("YOUPI");
}
```

_Remarque : il est possible d'initialiser la variable compteur en dehors de la boucle mais généralement on procède comme montré dans l'exemple._

Dans cet exemple, le compteur `i` est initialisé à 0. Sa valeur augmente de 1 **à chaque tour de boucle**. Lorsque la valeur du compteur atteint 3, on quitte la boucle.

On obtient alors un affiche similaire à celui-ci :

`YOUPI`
`YOUPI`
`YOUPI`

Voici un exemple de compte-à-rebours similaire aux précédents :

```
for (int i = 3; i > 0; i--) {
  print(i);
}
print("C'est fini !");
```

Dans cet exemple, le compteur démarre à 3 et **diminue de 1 à chaque tour**. La boucle s'arrête quand il atteint 0. On se sert de sa valeur pour affiche notre compte à rebours.

_Remarque : la condition porte généralement sur la variable compteur comme ici mais ce n'est pas obligatoire._

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD, Sofia DA SILVA RIBEIRO._
