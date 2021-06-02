# Le Main

## Prérequis

+ []()

## Introduction

Le main en java est une **méthode** qui représente le **programme principal**, c'est le bloc de code qui sera executé au lancement du projet.
Le main est généralement dans **une classe à part**. On peut le générer facilement dans tous les frameworks.
C'est dans celui-ci qu'on **instancie nos objets** et qu'on **intéragit avec l'utilisateur** via la console par exemple.

## Instancier des objets

On doit instancier nos objets java pour pouvoir les manipuler. Pour cela on leur attribut de l'espace mémoire grâce à l'outil `new`.

**Exemple** :

```java
Chien chien = new Chien(4, "Pluto");
```

Ici on instancie un objet de type `Chien`. Le nom de variable de l'objet est `chien`. Le chien a 4 ans et il s'appelle Pluto.

`chien.age : 4`
`chien.nom : Pluto`

*Remarque* : on doit également instancier un tableau avant d'en faire usage.

**Exemple** :

```java
int tab[] = new int[10] // 10 indique la taille du tableau
```

## Affichage console

On peut afficher des **chaînes de caractères** dans la console via la commande `print()` ou `println()` (la deuxième est la plus courante et permet de sauter une ligne après avoir afficher le contenu).

**Exemple** :

```java
System.out.println("Hello World !");
```

*Output* : `Hello world !`

## Exercices

### Exercice 1 : Tel chien, tel maître

On souhaite représenter un chien et son maitre. Tous les deux possède un nom. Le maitre ne peut posséder qu'un seul chien.
Le maître doit pouvoir produire le message suivant : `Je m'appelle [nom_du_maitre] et voici mon chien [nom_du_chien] !`

1. Identifiez les **objets** à implémenter et créez en conséquence les **classes** nécessaires. Identifiez ensuite les **attributs** de ces objets et implémentez les dans vos classes. Vous créerez également les **constructeurs**, **getters**, **setters** et autres méthodes nécessaires à la manipulation de vos objets.

2. Développez un **programme principal** permettant de produire ce résultat :

`Je m'appelle Mario et voici mon chien Pito !`

`Je m'appelle Luigi et voici mon chien Malo !`

`Je m'appelle Mario et voici mon chien Malo !`

Il n'y a pas d'**intervention utilisateur** dans le programme principal. Celui ci doit uniquement **instancier des objets** et **afficher le résultat** potentiel de méthodes dans la console. Il ne doit pas y avoir d'**algorithmie** dans le programme principal !

### Exercice 2 : Compte bancaire

On souhaite représenter un utilisateur et son compte bancaire. Chaque utilisateur possède un nom et un solde de compte (en euros).
L'utilisateur doit pouvoir produire le message suivant : `Je m'appelle [nom_utilisateur] et j'ai [solde_compte] euros !`

On doit pouvoir débiter et créditer le compte. Le débit ne peut se faire que si la somme souhaitée est présente sur le compte. L'action de débiter ou créditer doit produire des messages de réussite ou d'erreur comme suit :

+ Pour le crédit : `Compte de [nom_utilisateur] crédité de [somme] euros !`
+ Pour le débit (succès) : `Compte de [nom_utilisateur] débité de [somme] euros !`
+ Pour le débit (échec) : `Erreur : Impossible de débiter le compte de [nom_utilisateur] de [somme] euros, solde insuffisant :(`

1. Identifiez les **objets** à implémenter et créez en conséquence les **classes** nécessaires. Identifiez ensuite les **attributs** de ces objets et implémentez les dans vos classes. Vous créerez également les **constructeurs**, **getters**, **setters** et autres méthodes nécessaires à la manipulation de vos objets.

2. Développez un **programme principal** permettant de produire ce résultat :

`Je m'appelle Clubbo et j'ai 10 euros !`

`Erreur : Impossible de débiter le compte de Clubbo de 20 euros, solde insuffisant :(`

`Compte de Clubbo crédité de 35 euros !`

`Compte de Clubbo débité de 20 euros !`

`Je m'appelle Clubbo et j'ai 25 euros !`

Il n'y a pas d'**intervention utilisateur** dans le programme principal. Celui ci doit uniquement **instancier des objets** et **afficher le résultat** potentiel de méthodes dans la console. Il ne doit pas y avoir d'**algorithmie** dans le programme principal !

### Exercice 3 : Tableau de chasse

Le but de cet exercice est de reprendre les structures de données de l'exercice 1 et d'automatiser le processus de production de message pour un **groupe de maître et de chien**. On doit pouvoir stocker en mémoire 5 maîtres et 5 chiens différents et **pour chacun** des maîtres produire leur message respectif.

Développez un **programme principal** permettant de produire ce résultat :

`Je m'appelle Tata et voici mon chien Dada !`

`Je m'appelle Tete et voici mon chien Dede !`

`Je m'appelle Titi et voici mon chien Didi !`

`Je m'appelle Toto et voici mon chien Dodo !`

`Je m'appelle Tutu et voici mon chien Dudu !`

**Attention !** Votre programme ne doit contenir qu'**un seul appel à la console** (un seul `System.out.print()`) !

## Suivants

+ []()