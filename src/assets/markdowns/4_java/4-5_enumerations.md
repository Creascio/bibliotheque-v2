# Enumerations

## Introduction

Les énumerations, ou Enum, permettent de créer une **famille de valeurs possibles pour représenter un concept**.

L'Enum n'est pas une classe et ces valeurs ne sont pas des objets à part entière. Un Enum est **une liste de constantes**.

## Usage

On peut se servir des valeurs d'un Enum pour attribuer une valeur à **des attributs ou des variables**.

Les Enums sont utiles lorsque **l'on sait que l'on va avoir des valeurs qui ne vont jamais changer** comme les mois, les jours de la semaine ou encore les couleurs.

## Composition et Utilisation

Un Enum contient essentiellement des valeurs possibles :

```
public Enum Couleur {
  rouge, vert, bleu, jaune;
}
```

Voici un cas d'utilisation dans une classe :

```
public class Peinture {
  private int prix;
  private Couleur couleur;
}
```

Et un exemple d'instanciation :

```
Peinture p = new Peinture();
p.couleur = Couleur.rouge;
```

On voit ici un cas concret d'utilisation d'un Enum et comment accéder à une valeur de cet Enum.

Ici l'Enum est très simple et ne stocke que des valeurs mais il peut être plus complexe.

## Paramétrage

Un Enum peut avoir des **attributs**. **Chacune de ses constantes** possède une valeur pour ses attributs. On dit que l'Enum est **paramétré**.

Voici un exemple :

```
public Enum Couleur {
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

Dans l'exemple du dessus, on associe à chaque couleur un `symbole` représenté par un caractère.

Si un Enum est paramétré alors on créé un **constructeur privé** capable d'instancier toutes ses constantes et éventuellement des **getters et des setters**.

_Remarque : le constructeur n'est utile que pour paramétrer les constantes existantes ou pour ajouter de nouvelles constantes durant le programme (ici de nouvelles couleurs), on n'a pas besoin d'instancier les constantes d'un Enum avant emploi car ce ne sont pas des objets !_

## Méthodes

Les méthodes de la classe `Enum` sont les suivantes :

- `values()` : renvoie toutes les constantes de l'Enum sous forme de tableau
- `ordinal()` : renvoie l'index de la constante appelante dans la liste de constantes
- `valueOf(String)` : retourne la constante correspondante à la chaine de caractère si la constante du même nom existe dans l'Enum

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD._
