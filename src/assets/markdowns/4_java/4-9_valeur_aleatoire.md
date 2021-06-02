# Les valeurs générées aléatoirement

## Prérequis

+ []()

## Introduction

Dans un programme informatique, on peut très souvent être ammené à utiliser des valeurs aléatoires ou plutôt pseudo-aléatoire. Il y'a plusieurs façons de générer des valeurs aléatoires en Java. Nous allons en voir deux.

## Random

La classe `Random` permet de générer des valeurs aléatoires dans différents types primitifs. On doit cependant indiqué la borne maximale dans le cas d'une génération de nombre.

**Exemple** :

```java
Random rand = new Random();
int i = rand.nextInt(100);
```

La valeur de `i` est comprise entre 0 et 99.

## Math.random

La méthode `random()` de la classe `Math` permet de générer une valeur aléatoire entre 0 et 1.

**Exemple** :

```java
float rand = Math.random();
```

Output : `0.5568515217910215`

```java
int rand = (int) (Math.random() * 100) + 1;
```

Dans l'exemple ci-dessus on voit apparaître une nouvelle notion : `(int)`. C'est ce qu'on appelle un cast.

## Le cast

Le cast est une fonctionnalité de l'orienté objet qui permet de transformer un objet d'un type en un autre si la conversion est possible, ce qui est loin d'être toujours le cas.
C'est une fonctionnalité qu'on peut être ammené à utiliser lorsqu'on manipule des bibliothèques car nombre d'entres elles utilisent leur propre système d'objets et des conversions sont parfois nécessaire pour articuler un programme.

**Exemple** :

```java
int resultat = (int) 12.7 + 15.3669; // = 28.0669 -> 28
```

Le résultat de cette ligne est normalement un nombre à virgule. Ici le cast en int va tronquer le résultat pour qu'il puisse être stocké dans la variable `resultat`.

## Exercices

### Exercice 1 : Envoie 'AMOUR' au 8 12 12

On souhaite créer une ~~arnaque~~ fonctionnalité permettant à un utilisateur d'entrer son nom ainsi que celui de son grand amour pour que l'application lui indique son taux de compatibilité avec celui ou celle qu'il ou elle aime. L'application peut délivrer différents résultats en fonction du taux de compatibilité :

+ Pour 0% : `[user1] et [user2] = bagarre`
+ Entre 1% et 25% : `[user1] et [user2] = osef`
+ Entre 26% et 50% : `[user1] et [user2] = potes à la compote`
+ Entre 51% et 75% : `[user1] et [user2] = BFF`
+ Entre 76% et 99% : `[user1] et [user2] = amour`
+ Pour 100% : `[user1] et [user2] = muy caliente`

Développez une interface utilisateur permettant de récupérer le nom des deux utilisateurs et de produire un message aléatoire (l'amour c'est plus ce que c'était...)

## Suivants

+ []()
