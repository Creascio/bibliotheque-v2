# Valeurs Aléatoires

## Introduction

Dans un programme informatique, on peut très souvent être ammené à devoir utiliser des **valeurs aléatoires** ou plutôt **pseudo-aléatoires**.

Il y'a plusieurs façons de générer des valeurs aléatoires en Java. Nous allons en voir deux dans ce cours.

## Random

La classe `Random` permet de générer des valeurs aléatoires de **différents types primitifs**.

On doit cependant indiquer la **borne maximale** dans le cas d'une génération de nombre c'est à dire la plus grande valeur possible que va générer l'objet `Random`.

Voici un exemple pour une génération de nombre entier :

```
// création de l'objet
Random rand = new Random();

// on génère un nombre
// pseudo aléatoire
// que l'on stocke dans i
int i = rand.nextInt(100);
```

_Remarque : pour pouvoir utilise la classe `Random` il faut d'abord l'importer dans votre programme._

Dans cet exemple, la valeur de `i` sera comprise entre 0 et 99. A chaque éxécution du programme sa valeur sera regénerée.

Un autre exemple qui simule un pile ou face (une situation avec une probabilité 50/50) :

```
Random rand = new Random();

// booléen aléatoire
// true ou false
boolean coinFlip = rand.nextBoolean();

// si coinFlip
// vaut true
if (coinFlip) {
  System.out.println("PILE");
} else {
  System.out.println("FACE");
}
```

_Remarque : il est tout a fait possible d'obtenir la même valeur plusieurs fois d'affilée. Tout est une question de probabilité._

## Math.random

La méthode `random()` de la classe `Math` permet de générer une valeur aléatoire **entre 0 et 1**. Le résultat est donc un nombre à virgule

_Remarque : l'utilisation de la classe `Math` et de ses méthodes ne requiert pas d'import supplémentaire dans le programme car elle est comprise dans les imports de base d'un projet Java._

Voici un exemple :

```
float rand = Math.random();
```

Un valeur possible pour le résultat stocké dans `rand` pourrait être ici : `0.5568515217910215`

Si l'on souhaitait reproduire l'exemple proposé pour la classe `Random` pour une génération de nombre entier aléatoire il faudrait faire ceci :

```
int rand = (int) (Math.random() * 100);
```

_Remarque : `(int)` est ce qu'on appelle un cast qui permet de changer le type d'une valeur. Ici le cast permet de tronquer le résultat de `random` qui renvoie un nombre à virgule (`float`) en nombre entier (`int`) pour pouvoir le stocker dans `rand` de type `int` (ex: 14,1872 devient 14)_

_Remarque : les cast sont a manipuler avec précautions et ne fontionnent généralement qu'entre types primitifs similaires._

## Exercices

### Exercice 1 : Envoie 'AMOUR' au 8 12 12

On souhaite créer une ~~arnaque~~ fonctionnalité permettant à un utilisateur d'entrer son nom ainsi que celui de son grand amour pour que l'application lui indique son taux de compatibilité avec celui ou celle qu'il ou elle aime. L'application peut délivrer différents résultats en fonction du taux de compatibilité :

- Pour 0% : `[user1] et [user2] = bagarre`
- Entre 1% et 25% : `[user1] et [user2] = osef`
- Entre 26% et 50% : `[user1] et [user2] = potes à la compote`
- Entre 51% et 75% : `[user1] et [user2] = BFF`
- Entre 76% et 99% : `[user1] et [user2] = amour`
- Pour 100% : `[user1] et [user2] = muy caliente`

Développez une interface utilisateur permettant de récupérer le nom des deux utilisateurs et de produire un message aléatoire (l'amour c'est plus ce que c'était...)
