# Les méthodes

## Prérequis

+ []()

## Introduction

Les méthodes représentent l'ensemble des comportements d'un objet ou bien encore les actions qu'il peut accomplir ou bien les changements que l'on peut effectuer sur celui-ci. Les méthodes sont des fonctions qui font partie du bloc classe tout comme les attributs.

## Composition

Les méthodes sont des **blocs d'instructions composés** d'un **prototype** suivi d'une ou plusieurs lignes de code.
Le prototype d'une méthode suit cette structure : `visibilité propriété valeur_de_retour nom (paramètres_entrées)`

**Exemple** :

```java
public static int addition(int premierNombre, int deuxiemeNombre){
    return premierNombre + deuxiemeNombre;
}
```

La méthode est `public`, elle est donc visible par tout notre code, elle est également `static` donc elle peut être appelée sans l'aide d'un objet.
Elle s'appelle `addition` et prend en entrée deux nombres : `premierNombre`et `deuxiemeNombre`.
Elle renvoie la somme de ces deux nombres sous la forme d'une valeur entière d'où `int`.

## Le constructeur

Le constructeur est une méthode particulière qui permet **d'instancier des objets** c'est à dire de les **initialiser** pour pouvoir ensuite les manipuler. Généralement un constructeur permet de **donner des valeurs aux attributs** du futur objet mais on peut s'en servir pour faire bien d'autres choses. Il se déclare toujours avec le **nom de la classe** en question. Comme toutes autres méthodes il peut prendre des paramètres d'entrées.

**Exemple** :

```java
public class Chien {
    private int age;
    private String nom;

    public Chien(int age, String nom){
        this.age = age;
        this.nom = nom;
    }
}
```

Ici le constructeur de `Chien` nous permet d'attribuer des valeurs à l'`age` et au `nom` du chien que l'on souhaite créer. Le `this`fait référence à l'objet courant.

*Remarque* : une classe peut contenir plusieurs constructeurs tant que ceux ci ne créer pas des objets similaires, c'est à dire qu'ils ne prennent pas les mêmes paramètres d'entrées

### Objet courant

Dans le contexte d'une méthode java, l'objet courant est **un objet de la classe dans laquelle on se situe**. L'objet courant fait référence à **l'objet qui a appelé la méthode** ce qui nous permet d'accéder aux attributs de cet objet ou bien encore aux méthodes de la classe de cet objet.

*Remarque : dans le cadre du constructeur, `this` fait référence à l'objet qu'on est en train de créer*

**Exemple** :

```java
public class Chien {
    private int age;
    private String nom;
    private String race;

    // créer un chien qui possède un nom, un age mais pas de race
    public Chien(int age, String nom){ 
        this.age = age;
        this.nom = nom;
    }

    // créer un chien complet
    // appelle le constructeur prenant seulement un age et un nom
    // en paramètre et procède à l'instanciation
    public Chien(int age, String nom, String race){ 
        this(age, nom);
        this.race = race;
    }
}
```

*Remarque* : l'exemple ci dessus sert a montrer la capacité de this a accéder a des attributs tout comme des méthodes. Dans les faits faire deux constructeurs ici n'est pas très utile

## Getter et Setter

Les getters et les setters sont des méthodes standardes de **manipulation d'attributs**. Les getters permettent de **récupérer une valeur** et les setters permettent de **modifier une valeur**. Par convention on nomme les getters `get[nomAttribut]` et les setters `set[nomAttribut]`.

**Exemple** :

```java
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

## ToString

La méthode toString est par convention la méthode que l'on utilise pour **afficher les informations d'un objet**.
Elle se construit généralement de cette façon :

```java
public String toString(){
    String s = // le message que l'on souhaite produire
    return s;
}
```

*Remarque* : la méthode toString permet uniquement de générer un message, pas de l'afficher !

Une fonctionnalité importante de la chaîne de caractère et donc de la génération de message est la **concaténation**.

### La concaténation

La concaténation est une propriété de la chaîne de caractère à pouvoir convertir des données de types différents en chaîne de caractères.
Pour cela on utilise le symbole `+`.

**Exemple** :

```java
String s = "Bonjour je m'appelle " + this.getNom() 
  + " et j'ai " + 12 + " ans !";
```

*Output* : `Bonjour je m'appelle Toto et j'ai 12 ans !`

## Exercices

+ []()

## Suivants

+ []()
