# Conditions Booléennes

## Introduction

Lorsque l'on manipule des données dans un programme, il est très fréquent de se poser des **questions** sur le contenu ou l'état de cette donnée pour pouvoir réagir de manières **différentes** en fonction de la donnée et ainsi produire un programme qui ne fait pas **toujours la même chose**.

Pour représenter ces questions dans notre code on utilise des **conditions** logiques et avant tout **booléennes** c'est-à-dire que la condition sera remplie, donc **vraie**, ou non, donc **fausse**.

## Construire une condition

Il existe différents symboles permettant de créer des conditions :

+ `==` : est égal à
+ `>` : est supérieur à
+ `<` : est inférieur à
+ `>=` est supérieur ou égal à
+ `<=` est inférieur ou égal à
+ `!=` est différent de

Voici quelques exemples qui ne sont pas encore sous forme de vrai code pour comprendre le sens de ces symboles :

la condition `3 == 2` est **fausse**.
la condition `3 > 2` est **vraie**.
la condition `3 >= 2` est **vraie**.
La condition `3 != 3` est **fausse**.

## Fonctionnement d'une condition

Grâce aux symboles présentés au dessus il est possible de comparer de différentes manières **tous les types de données primitifs**.

_Remarque : pour les types de données non numérique (ex: char, boolean), certains symboles de comparaison n'ont pas de sens et ne sont donc pas utile comme par exemple le symbole `<` pour comparer deux lettres._

Dans tous les cas, peu importe la **nature** des données comparées, une condition correspond toujours à une **information booléenne** à savoir si la réponse à la question posée par la condition est **vrai** ou **faux**.

Lorsque l'on exécute le code d'une condition, le compilateur renvoie ensuite une **information booléenne** qui varie en fonction du langage du code (1 ou 0, true ou false, etc.)

## Types de condition

### if

Le condition `if` se traduit en langage littéral par la condition **"SI ALORS"**. Elle se forme par la mot clé `if` suivi d'une **condition booléenne** et enfin par **la ou les instructions de code à executer** si la condition est remplie.

Voici un exemple de structure :

```
if (condition_a_remplir) {
  // ALORS
  // le code qui sera
  // executé si la
  // condition est remplie
}
// suite du programme ici
```

Lorsque l'on compile notre programme, le compilateur, une fois arrivé au `if`, va vérifier si la condition est remplie ou non (vraie ou fausse). 

Si la condition est remplie on "rentre" dans le bloc de code du `if`, sinon, on passe directement à la ligne juste en dessous du bloc de code, le `if` est ignoré.

_Remarque : lorsque le bloc de code d'un `if` n'est constitué que d'une seule ligne de code, on peut s'abstenir d'entourer le bloc de code par des parenthèses. On appelle cette pratique le "lazy if" et elle n'est pas recommandé pour les débutants._

Voici un exemple plus concret :

```
if (age >= 18) {
  print("Vous etes majeur !");
}
```

Dans cet exemple, en partant du principe qu'il existe une variable `age` de type `int` dans notre programme, sa valeur sera testée au moment du `if`.

Si la valeur de cette variable `age` est **supérieure ou égale** à 18, la condition du `if` est remplie et on execute son bloc de code. Ici un message sera affiché dans la console.

### else

La condition `else` se traduit en langage littéral par **"SINON"**. Elle fonctionne de paire avec la condition `if`.

**SI** la condition du `if` n'est **pas remplie**, **ALORS** on execute le bloc de code de la condition `else`. Un `else` ne peut pas exister sans le `if` correspondant et il doit toujours être placé **après** la condition `if`.

Voici un exemple :

```
if (age >= 18) {
  print("Vous etes majeur !");
}
else {
  print("Vous êtes mineur !");
}
// suite du programme
```

Ici, en fonction de la valeur de la variable `age`, le programme pourra produire deux résultats **différents**. Si la valeur de `age` est supérieure ou égale à 18, on affiche le message "Vous etes majeur !" et on continue le programme.

**Sinon**, on affiche le message "Vous êtes mineur !" et on continue le programme.

Il est **impossible** de vérifier la condition d'un `if` et de son `else` en même temps.

### else if

La condition `else if` se traduit en langage littéral par **"SINON SI"**. C'est une combinaison de la condition `if` et de la condition `else`, on l'utilise lorsque l'on veut effectuer un second test si le premier test du `if` a échoué.

Un `else if` doit donc toujours être placé **après** la condition `if` et **avant** la condition `else`.

Voici un exemple :

```
if (note >= 15) {
  print("C'est une très bonne note !");
}
else if (note >= 10) {
  print("C'est une bonne note !");
}
else {
  print("coup dur.");
}
```

_Remarque : la condition du `else if` ne porte pas obligatoirement sur la même donnée que la condition du `if` correspondant._

Ici, si la `note` vaut 16, on affichera "C'est une très bonne note !". Le **premier test** est validé donc même si la condition du `else if` est également valide (16 > 10), elle sera **ignorée** (tout comme le `else`).

En revanche si la `note` vaut 12, le premier test du `if` n'est pas validé et on teste alors la condition du `else if` qui, quand à elle, est valide. On affichera donc "C'est une bonne note !". Le `else` est toujours ignoré.

Pour que l'on affiche "coup dur.", il faut que la `note` soit **inférieure ou égale** à 9.

_Remarque : Il est tout a fait possible d'effectuer plus qu'un second test après le `if`. On peut placer une infinité de conditions `else if` après un premier test `if`. On verra cependant à la fin du cours une structure plus optimisée lorsqu'il est nécessaire d'effectuer plus de deux tests._

## Combinaison de condition

Il est possible de combiner plusieurs conditions dans un seul test grâce à différents symboles permettent de **lier** des conditions entre elles :

+ `&&` : signifie **"ET"**, les **deux** conditions liées doivent être vraies pour que le test soit validé.
+ `||` : signifie **"OU"**, **au moins une** des conditions liées doivent être vraies pour que le test soit validé.

Voici un exemple :

```
if (age >= 18 && age < 25) {
  print("Bonjour jeune homme.");
}
else if (age >= 25 || argent >= 1000000) {
  print("Mes hommages Monseigneur.");
}
```

Enfin il existe un dernier symbole permettant **d'inverser** une condition. La condition sera alors considérée comme validée si elle est fausse :

+ `!` : signifie **"NON"**, la condition doit être fausse pour que le test soit validé.

Le symbole `!` doit être placé **juste avant** la condition à inverser.

Voici un exemple :

```
if (!(age < 10)) {
  print("Vous n'êtes plus un enfant !");
}
```

La condition de l'exemple peut donc se traduire par : "**SI** `age` N'est **PAS** inférieur à 10". Ainsi la condition est validée si la valeur de `age` est supérieure ou égale à 10.

## Le switch

Le `switch` est une structure qui permet d'éviter la répétition dans une longue suite de tests. Il permet de remplacer plus efficacement un enchaînement de condition `else if`.

On peut utiliser un `switch` pour vérifier des **exactitudes** donc des **égalités**. Ainsi un `switch` est utile lorsque l'on connait **les réponses possibles à une question** ainsi que le **nombre** de réponses possibles.

Dans du code cela se traduit par connaître **toutes les valeurs possibles** que peut prendre une variable pour réagir en fonction. Un switch est donc impossible et inutile à mettre en place s'il existe une **infinité** de valeurs possibles ou bien une **inconnue**.

On dit qu'un `switch` possède des `case` qui représent chacun une valeur possible.

Voici un exemple, d'abord d'un morceau de code sans `switch`, puis le même avec un `switch` en place :

```
if (age == 2) {
    print("Bonjour mon bébé !");
}
else if (age == 10) {
    print("Bonjour mon enfant !");
}
else if (age == 18) {
    print("Bonjour jeune homme !");
}
else if (age == 35) {
    print("Bonjour monsieur !");
}
else if (age == 69) {
    print("Salut papy !");
}
else {
    print("Qui êtes vous enfin ?");
}
```

Sous forme de `switch` on obtient :

```
switch (age) {
case 2:
  print("Bonjour mon bébé !");
  break;
case 10:
  print("Bonjour mon enfant !");
  break;
case 18:
  print("Bonjour jeune homme !");
  break;
case 35:
  print("Bonjour monsieur !");
  break;
case 69:
  print("Salut papy !");
  break;
default:
  print("Qui êtes vous enfin ?");
  break;
}
```

Le `switch` effectue des tests sur la variable `age`. Entre accolades sont placés tous les tests d'égalités représentés par les `case`.

_Remarque : on utilise ici le mot clé `break` pour éviter de valider plusieurs `case` à la fois. En effet `break` permet de sortir du bloc de code dans lequel on se situe, ici on sort complétement du `switch`._

_Remarque : le cas `default` représente le cas standard donc le comportement à adopter pour toute autre valeur de `age` que celles indiquées dans les autres `case` (ex: 29)._

## Le ternaire

L'opérateur conditionnel ternaire est un symbole permettant de condenser une expression `if...else` en une seule ligne. Pour cela on utilise le symbole `?`.

Voici un exemple avec et sans l'utilisation d'un ternaire :

```
boolean majeur = true;

if (majeur) {
  message = "Vous êtes majeur !";
}
else {
  message = "Vous êtes mineur !";
}
```

Et maintenant avec un ternaire :

```
message = (majeur) ? "Vous êtes majeur !" : "Vous êtes mineur !";
```

Dans cet exemple, la valeur du booléen `majeur` représente la condition à remplir.

L'opérateur ternaire `?` est placé après la condition et est suivi dans l'ordre par le résultat souhaité si la condition est validée puis le résultat souhaité si la condition est incorrecte séparé par un `:`.

## Exercices

_Coming soon..._

_Auteur : Léo SALLARD, Sofia DA SILVA RIBEIRO._
