# Méthodes

## Introduction

Les méthodes représentent **l'ensemble des comportements d'un objet** ou bien encore **les actions qu'il peut accomplir** ou bien **les changements que l'on peut effectuer sur celui-ci**.

Les méthodes sont des fonctions qui font partie du bloc classe tout comme les attributs.

## Composition d'une méthode

Les méthodes sont des **blocs d'instructions composés** d'un **prototype** suivi d'une ou plusieurs lignes de code.

Le prototype d'une méthode suit cette structure : `visibilité propriété valeur_de_retour nom (paramètres_entrées)` comme ci-dessous :

```
public static int addition(int premierNombre, int deuxiemeNombre){
  return premierNombre + deuxiemeNombre;
}
```

La méthode est `public`, elle est donc **visible par tout notre code**, elle est également `static` donc elle peut être appelée **sans l'aide d'un objet**.

_Remarque : nous reviendrons sur la façon d'appeler une méthode un peu plus tard._

Elle s'appelle `addition` et prend en paramètre d'entrée deux nombres de type `int` : `premierNombre` et `deuxiemeNombre`.

Elle **renvoie la somme** de ces deux nombres sous la forme d'une valeur entière d'où `int`.

## Le constructeur

Le constructeur est une méthode particulière qui permet **d'instancier des objets** c'est à dire de les **initialiser** pour pouvoir ensuite les manipuler.

Généralement un constructeur permet de **donner des valeurs aux attributs** du futur objet à créer mais on peut s'en servir pour faire bien d'autres choses.

Il se déclare toujours par le **nom de la classe** en question. Comme toutes autres méthodes il peut prendre des paramètres d'entrées.

Voici un exemple :

```
public class Chien {
  private int age;
  private final String nom;

  public Chien(int age, String nom){
    this.age = age;
    this.nom = nom;
  }
}
```

Ici le constructeur de `Chien` nous permet d'attribuer des valeurs à l'`age` et au `nom` du chien que l'on souhaite créer.

Le `this` fait référence à **l'objet courant**.

_Remarque : une classe peut contenir plusieurs constructeurs tant que ceux ci ne créé pas des objets similaires, c'est à dire qu'ils ne prennent pas les mêmes paramètres d'entrées. Cela permet une plus versatilité des objets._

### L'objet courant

Dans le contexte d'une méthode Java, l'objet courant est **un objet du type de la classe dans laquelle on se situe**.

L'objet courant fait référence à **l'objet qui a appelé la méthode** ce qui nous permet d'accéder aux attributs de cet objet ou bien encore aux méthodes de la classe de cet objet.

_Remarque : dans le cadre du constructeur, `this` fait référence à l'objet qu'on est en train de créer_

C'est une notion assez abstraite alors voici un exemple :

```
public class Chien {
  private int age;
  private String nom;
  private String race;

  // créer un chien qui possède un nom, un age mais pas de race
  public Chien(int age, String nom) {
    // l'age du chien créé aura pour valeur celle passée en entrée
    this.age = age;
    // de même pour le nom
    this.nom = nom;
  }

  // créer un chien complet
  public Chien(int age, String nom, String race) {
    // on appelle le premier constructeur pour s'occuper de l'age et du nom de la même façon
    this(age, nom);
    // on associe la valeur pour la race du chien
    this.race = race;
  }
}
```

_Remarque : l'exemple ci dessus sert a montrer la capacité de `this` à accéder a des attributs tout comme des méthodes. Dans les faits faire deux constructeurs ici n'est pas très utile._

## Les Getters et Setters

Les getters et les setters sont des méthodes standardes de **manipulation d'attributs**.

Les getters permettent de **récupérer une valeur** et les setters permettent de **modifier une valeur**.

Par convention on nomme les getters `get[nomAttribut]` et les setters `set[nomAttribut]`.

En reprenant notre classe précédente :

```
public class Chien {
  private int age;
  private String nom;

  public int getAge(){
    // on récupère l'age du chien qui appelle la méthode
    return this.age;
  }

  public void setNom(String nom){
    // on modifie le nom du chien qui appelle la méthode
    this.nom = nom;
  }
}
```

_Remarque : Il est possible de générer automatiquement le constructeur, les getters et les setters sur la plupart des IDE modernes._

## La textualisation : toString

La méthode `toString` est par convention la méthode que l'on utilise pour **afficher les informations d'un objet**.

_Remarque : par convention la méthode `toString` ne permet pas d'afficher directement le message, seulement de le créer_

Elle se construit généralement de cette façon :

```
public String toString() {
  String s = // le message que l'on souhaite produire
  return s; // renvoie le message pour un affichage possible plus tard
}
```

Une fonctionnalité importante de la chaîne de caractère et donc de la génération de message est la **concaténation**.

### La concaténation

La concaténation est une propriété de la chaîne de caractère à pouvoir convertir des données de types différents en chaîne de caractères.

Pour cela on utilise le symbole `+`.

_Remarque : le symbole `+` ici n'a pas le même sens que le `+` de l'addition. C'est le cas d'autres symboles en Java ou dans d'autres langages. Leur sens dépend du contexte._

Voici un exemple :

```
String s = "Bonjour je m'appelle " + this.getNom() + " et j'ai " + 12 + " ans !";
```

On obtient par exemple : `Bonjour je m'appelle Toto et j'ai 12 ans !`

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
