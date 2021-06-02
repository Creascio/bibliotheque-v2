# Classes et attributs

## Prérequis

+ []()

## Introduction

Une classe Java est une **structure** permettant de décrire l'implémentation d'un **objet** dans notre programme. C'est le code de cette classe qui va nous permettre de décrire à quoi va ressembler notre objet à sa création et les actions possibles sur celui-ci.

Dans ce cous nous allons voir comment se construit un bloc classe ainsi que les objets et leurs caractéristiques.

## Composition

Une classe est un bloc de code qui va contenir toutes les informations concernant nos objets.

**Exemple** :

```java
public class Toto {
    // code goes here
}
```

Ici la classe Toto va nous permettre de pouvoir manipuler des objets de type `Toto`.

Pour décrire un objet, la classe est composée d'**attributs** et de **méthodes**.

### Les attributs

Les attributs sont des **variables** qui décrivent l'état d'un objet. Comme toute variable ils possèdent un **nom** et un **type de donnée**. Ils possèdent également une **visibilité** et éventuellement des **propriétés**.

**Exemple** :

```java
private int age;
```

Ici on représente l'**age** d'un individu par un **nombre entier**. La variable s'appelle age et n'a pas encore de valeur. L'attribut est en private.

### Nommage

Par convention on nomme les classes en respectant le `PascalCase` (majuscule à chaque mot, pas d'espace ou de tiret).
On nomme les attributs et les méthodes en respectant le `camelCase` (majuscule à partir du deuxième mot, pas d'espace ou de tiret).

### Types

Ils existent en java comme dans les autres langages deux catégories de type de donnée. Les types **primitifs** et les types **complexes**.
Les types primitifs sont les suivants :

+ **int** : pour stocker des nombres entiers
+ **float** : pour stocker des nombres à virgule
+ **char** : pour stocker des caractères (lettres, chiffres, symboles, etc.)
+ **boolean** : pour stocker une information booléenne c'est à dire qui ne peut prendre que deux valeurs (ex : vrai ou faux, 0 ou 1)

Les types complexes sont des types composés eux même d'autres types comme par exemple `String` ou notre classe `Toto`.

## Les Tableaux

Tout comme dans de nombreux autres langages il est possible de créer des tableaux d'objets en java. Ces tableaux peuvent stocker des objets d'un type donné dans des cases mémoires. Un tableau à une taille non dynamique, on peut effectuer des actions simples dessus comme la récupération, l'ajout ou le retrait d'éléments.

**Exemple** :

```java
public class Toto {
    private int age;
    private int[] notes;
}
```

## Visibilité

Il existe plusieurs niveau de visibilité pour les classes, les attributs ou bien encore les méthodes :

+ **public** : visible et accessible par **tout le reste du programme**
+ **private** : visible et accessible uniquement dans la **classe**
+ **protected** : visible et accessible uniquement dans le **package**

## Propriétés

Il existe plusieurs propriétés pour les attributs ou bien encore les méthodes :

+ **static** (pour les attributs) : la valeur de l'attribut est commune à toutes les instances de la classe.
+ **static** (pour les méthodes) : la méthode peut être appelée sans recourir a un objet.
+ **final** (pour les attributs) : la valeur de l'attribut ne peut pas être modifier après la première instanciation.

**Exemple** :

```java
public class Chien {
    private static final boolean estMoinsBienQueLesChats = true; 
}
```

Ici l'attribut indique que pour n'importe quel chien, son attribut `estMoinsBienQueLesChats` est **toujours vrai** et il **ne peut pas être modifié**. :P

## Exercices

+ []()

## Suivants

+ []()
