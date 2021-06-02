# Les énumerations

## Prérequis

+ []()

## Introduction

Les énumerations, ou enum, permettent de créer une **famille de valeurs possibles pour représenter un concept**. L'enum n'est pas une classe et ces valeurs ne sont pas des objets à part entière. Un enum est une liste de constantes.

## Usage

On peut se servir d'un enum pour des attributs ou des variables. Les enums sont utiles lorsque l'on sait que l'on va avoir des valeurs qui ne vont jamais changer comme les mois, les jours de la semaine ou encore les couleurs.

## Composition

Un enum contient essentiellement des valeurs possibles :

**Exemple** :

```java
public enum Couleur {
    rouge, vert, bleu, jaune;
}
```

```java
public class Peinture {
    private int prix;
    private Couleur couleur;
}
```

```java
Peinture p = new Peinture();
p.couleur = Couleur.rouge;
```

On voit ici un cas concret d'utilisation d'un enum et comment accéder à une valeur de cet enum.
Ici l'enum est très simple et ne stocke que des valeurs mais il peut être plus complexe :

```java
public enum Couleur {
    rouge('r'),
    vert('v'),
    bleu('b'),
    jaune('j');

    private char symbole;

    private Couleur(char symbole){
        this.symbole = symbole;
    }

    public char getSymbole(){
        return this.symbole;
    }
}
```

Un enum peut avoir des attributs et alors chaque valeur de l'enum aura des valeur pour ses attributs.
Si un enum est paramétré alors on créé un constructeur privé capable d'instancier toutes les valeurs et éventuellement des getters et des setters.

*Remarque* : le constructeur n'est utile que pour ajouter de nouvelles valeurs (ici de nouvelles couleurs), on n'a pas besoin d'instancier les valeurs d'un enum car ce ne sont pas des objets mais des constantes !

Les méthodes de la classe Enum sont les suivantes :

+ `values()` : renvoie toutes les valeurs de l'enum sous forme de tableau
+ `ordinal()` : renvoie l'index de la valeur appelante dans la liste de valeurs
+ `valueOf(String)` : retourne la valeur correspondante à la chaine de caractère si la valeur existe

## Exercices

+ []()

## Suivants

+ []()
