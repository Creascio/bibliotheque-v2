# Variables et Types primitifs

## Introduction

Un programme informatique a généralement pour but de manipuler des **données**.

Ces données peuvent être très diverses et sont représentées de manière tout aussi diverses selon les langages de programmation.

Dans la plupart des langages, on utilise des **types**, qu'on pourrait décrire comme des **catégories**, pour caractériser les données.

## Les Variables

Les variables sont les éléments de notre code qui vont nous permettre de stocker des informations de manière durables. Une variable possède une donnée ainsi qu'un nom.

Le nom permet d'identifier la variable donc il faut être assez clair lors du nommage pour que l'on comprenne la donnée qu'elle stocke.

Voici quelques exemples:

```
  quantite_de_farine = 100
  mot = patate
  je_suis_un_robot = vrai
```

Ce n'est pas du vrai code juste un exemple pour vous donnez une idée.

## Les types de donnée

Les variables possède un type même si c'est parfois implicites.

Il existe une multitude de types différents en fonction des langages de programmation mais certains se démarquent par le fait qu'ils sont présent dans tous les langages typés.

On appelle ces types des **types primitifs**. Ce sont les types les plus basiques. Ils sont rangés en plusieurs familles :

- Les nombres (**number**) : permettent de stocker des **nombres**.
  Ils sont parfois divisés en deux sous catégories :

- Les types entiers : permettent de stocker un **nombre entier**.
  Cette famille est composée de : **int**, **byte**, **short** et **long** (**int** est le plus courant).

```
  int quantiteDeFarine = 100
```

- Les types flottants : permettent de stocker un **nombre à virgule**.
  Cette famille est composée de : **float** et **double** (**float** est le plus courant).

```
  float poidDuLivre = 0.5
```

- Le type caractère **char** permet de stocker un seul caractère de la table **ASCII**. Cette table contient toutes les lettres, les chiffres et les symboles occidentaux.

```
  char lettre = 'a'
```

- Le type booléen **boolean** permet de stocker une information booléene, c'est-à-dire, une information à **deux** valeurs possibles (Ex : oui ou non, vrai ou faux, 1 ou 0, etc.).

```
  boolean jeSuisUnRobot = true
```

Enfin, dans tout les langages il existe des tableaux. Un tableau est généralement représenter par des crochets comme ceci [ ]. Un tableau ne peut contenir qu'un seul type de donnée soit des **char**, soit des **nombres**,...

```
  char mot[7] = { 'b','o','n','j','o','u','r'};
```

Ici le tableau a une taille de 7 cela veut dire qu'il stocke 7 éléments ni plus ni moins !

Un tableau comme son nom l'indique est une suite d'emplacements. Pour naviguer dans un tableau, on utilise un index qui représente la position d'un élement dans un tableau. Attention ! En programmation, on compte à partir de 0 et pas de 1 donc le premier élément est à l'index 0 et non pas 1.

```
  mot[0] // affiche b
  mot[1] // affiche o
  mot[6] // affiche r
```

## Exercices

_Coming soon..._

_Auteur : Sofia DA SILVA RIBEIRO._
