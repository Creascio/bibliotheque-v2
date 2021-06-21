# Classes et Attributs

## Introduction

Une classe Java est une **structure** permettant de décrire l'implémentation d'un **objet** dans notre programme. C'est le code de cette classe qui va nous permettre de décrire **à quoi va ressembler** notre objet à sa création et les **actions possibles** sur celui-ci.

Dans ce cous nous allons voir comment se construit un bloc classe ainsi que les objets et leurs caractéristiques.

## Composition

Une classe est un bloc de code qui va contenir toutes les informations concernant nos objets :

```
public class Toto {
  // code goes here
}
```

Ici la classe `Toto` va nous permettre de pouvoir manipuler des objets de type `Toto`.

Pour décrire un objet, la classe est composée d'**attributs** et de **méthodes**.

### Les attributs

Les attributs sont des **variables** qui décrivent l'état d'un objet. Comme toute variable, ils possèdent un **nom** et un **type de donnée**. Ils possèdent également une **visibilité** et éventuellement des **propriétés**.

Voici un exemple tout simple :

```
int age;
```

Ici on représente l'**age** d'un individu par un **nombre entier**. La variable s'appelle `age` et n'a pas encore de valeur.

### Nommage

Par convention on nomme **les classes** en respectant le **PascalCase** (majuscule à chaque mot, pas d'espace ou de tiret).
On nomme **les attributs et les méthodes** en respectant le **camelCase** (majuscule à partir du deuxième mot, pas d'espace ou de tiret).

### Types

Ils existent en Java comme dans les autres langages deux catégories de type de donnée. Les types **primitifs** et les types **complexes**.

Les types primitifs sont les suivants :

+ `int, byte, short, long` : pour stocker des **nombres entiers**
+ `float, double` : pour stocker des **nombres à virgule**
+ `char` : pour stocker des **caractères** (lettres, chiffres, symboles, etc.)
+ `boolean` : pour stocker une information booléenne c'est à dire qui ne peut prendre que **deux valeurs** (ex : vrai ou faux, 0 ou 1)

*Remarque : les différents types permettants de stocker des nombres entier ou à virgule ne varie que par la taille de l'emplacement mémoire qui leur est attribué. Cela change la valeur maximale ou minimale que la variable peut prendre.*

*Remarque : pour les nombres entier le `int` est le type le plus courant, pour les nombres à virgule c'est le `float`*

Les types complexes sont des types composés eux même d'autres types comme par exemple `String` ou notre propre type `Toto`.

On peut créer des objets de types complexes mais **pas de types primitifs**.

Quelques cas concrets :

```
int age = 20;
float moyenne = 13.65;
char note = 'A'
boolean estGenial = true;
```

## Les Tableaux

Tout comme dans de nombreux autres langages il est possible de créer des tableaux d'objets ou de valeurs en Java.

Ces tableaux peuvent stocker des objets d'un type donné dans des **cases mémoires**.

Un tableau à une taille **non dynamique**, on peut effectuer des actions simples dessus comme **la récupération, l'ajout ou le retrait** d'éléments.

*Remarque : il existe de nombreuses autres actions plus complexes sur les tableaux mais nous en parlerons plus tard.*

**Exemple** :

```
public class Toto {
  int age;
  int[] notes;
}
```

## Visibilité

Il existe plusieurs niveau de visibilité pour les classes, les attributs ou bien encore les méthodes :

+ `public` : visible et accessible par **tout le reste du programme**.
+ `private` : visible et accessible uniquement dans la **classe**.
+ `protected` : visible et accessible uniquement dans le **package**.

Une bonne utilisation de la visibilité serait la suivante :

```
public class Toto {
  private String nom;
  private int age;
  public boolean estUnIdiot = true;
}
```

Dans le bloc de code ci-dessus, la classe `Toto` est en `public` car on souhaite pouvoir accéder aux informations décrivant un objet de type `Toto` dans le reste du code pour pouvoir par exemple **créer et manipuler** des objets de ce type.

Les attributs `nom` et `age` sont en `private` car la valeur de ces attributs ne doit être modifiable que par l'objet qui les stocke.

L'attribut `estUnIdiot` est en public, la valeur de ce booléen peut être modifié n'importe où dans le code également.

*Remarque : dans la grande majorité du temps les attributs d'objets sont en `private` pour maintenir la sécurité du code, on appelle ça l'encapsulation de donnée.*

*Remarque : bien que la visibilité `protected` existe, on ne l'utilise quasiment jamais car il est rare de créer une situation où elle serait utile.*

## Propriétés

Il existe plusieurs propriétés pour les attributs :

+ **static** : la valeur de l'attribut est **commune à toutes les instances de la classe**.
+ **final** : la valeur de l'attribut **ne peut pas être modifié après la première instanciation**.

Pour reprendre l'exemple au dessus :

```
public class Toto {
  private final String nom;
  private int age;
  public static boolean estUnIdiot = true;
}
```

L'attribut `nom` est en `final` car on ne change pas de nom une fois qu'on en a un généralement. C'est une **constante**.
L'attribut `age` n'est en `final` car sa valeur va être amenée à **changer plusieurs fois**. (en tout cas on l'espère pour Toto).
L'attribut `estUnIdiot` est en `static` ce qui indique que la valeur de cette attribut est **commune à tous les objets de type** `Toto`. Elle peut cependant être modifié ce qui effectuera la modification pour tous les `Toto`

Voici un exemple plus spécifique :

```
public class Chien {
  private static final boolean estMoinsBienQueLesChats = true;
}
```

Ici l'attribut indique que **pour n'importe quel chien**, son attribut `estMoinsBienQueLesChats` est **toujours vrai** et il **ne peut pas être modifié**.

## Exercices

*Coming soon...*
