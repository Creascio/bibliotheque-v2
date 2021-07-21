# Collection et Iterable

## Introduction

Il existe de nombreuses façon d'**organiser des données** autrement qu'avec des tableaux en Java.

L'architecture des bibliothèques proposant des solutions est **très vaste** et nous allons la parcourir de manière succinte.

Toutes se basent sur `Collection` et `Iterable` qui sont des interfaces (pas besoin de savoir ce qu'est une interface pour le moment) donnant leurs propriétés aux classes qui nous intéresse dans ce cours.

Il existe trois grandes familles d'iterable c'est à dire de **structure de données pouvant être parcourue** : Les `List`, Les `Queue` et Les `Set`.

Toutes ces classes sont ce qu'on appelle des `Collection` car elles regroupent un ensemble de données accessible en un point.

Avant tout il faut savoir que les tableaux ainsi que les iterables peuvent être **parcouru via une boucle particulière** appelée le `forEach`.

## La boucle forEach

Le `forEach` en Java est une boucle très similaire au `for` et qui permet de **parcourir des structures de données de manière plus intuitive**.

Il se construit de cette façon : `for([type_objet] [nom_objet] : [structure à parcourir])`

Le paramètre de gauche représente un objet dans la structure à parcourir. C'est **l'objet courant dans la boucle**. Le nom de l'objet importe peu tout comme l'index dans un `for` classique.

Le paramètre de droite est la variable qui représente la structure à parcourir. L'interêt majeur du `forEach` est que l'on a pas besoin de se soucier de la taille de structure à parcourir contrairement à un `for` classique.

Voici un exemple d'utilisation :

```
// une variable représentation un livre
// sous la forme d'un tableau d'objet
// de type Page
Page[] livre = new Page[10];

// la boucle forEach parcourt
// chaque page du livre
for (Page page : livre) {
  // on écrit sur chaque page
  // du livre
  page.ecrire("Je suis une super page !");
}
```

_Remarque : on part du principe que la classe `Page` contient une méthode s'appelant `ecrire`. Son fonctionnement n'est pas le propos de l'exemple._

Ici on parcourt le tableau de pages `livre`. Pour chaque page contenu dans `livre` on écrit dedans `Je suis une super page !`

_Remarque : la boucle forEach permet de parcourir toutes les structures de données que nous allons voir dans ce cours._

## Les listes

Une `List` est une séquence d'objets qui peut être **organisée comme on le souhaite**.

On peut y **ajouter** et en **retirer** des éléments, **les doublons sont autorisé** ainsi que les **objets vide**.

On peut **récupérer** un élément grâce à son **index** tout comme on le ferait dans un tableau.

La différence majeure entre une liste et un tableau est que la liste est **dynamique** c'est à dire qu'elle adapte **automatiquement** sa **taille** en fonction des actions faite sur celle-ci (ajout et retrait d'éléments notamment).

Lorsqu'on instancie une liste on doit préciser le type d'objet qu'elle va contenir de cette façon :

```
List<Chien> chiens = new ArrayList<>();
```

La liste `chiens` pourra donc stocker des objets de type `Chien`. On indique le type d'objet attendu dans la liste entre chevrons `<>`.

`List` n'est pas un objet mais une interface on doit donc utiliser une implémentations de `List` pour pouvoir la manipuler.

L'implémentation la plus courante de `List` est `ArrayList`.

Une liste ne peut stocker que des objets, si on souhaite stocker des variables de types primitifs on utilisera les classes correspondantes (ex : `Integer` pour `int`, `Character` pour `char`, etc.).

Voici un exemple :

```
// un tableau peut stocker
// des variables de
// types primitifs
int[] notes;

// son équivalent
// sous forme de liste
ArrayList<Integer> notes;
```

_Remarque : ces objets fonctionnent de manière similaire aux types primitifs mais, tout comme les autres classes, possèdent des méthodes permettant des manipulations plus avancées (se referer à la documentation). Il ne faut cependant pas en abuser et remplacer tout vos types primitifs par des objets si ce n'est pas nécessaire !_

### l'ArrayList

L'ArrayList est l'une des implémentations de la liste la plus commune. En mémoire elle est équivalente à un **tableau dyamique**.

Cela implique qu'il est très **peu couteux d'accéder à un élément** dans la liste mais il est **plus compliqué d'ajouter ou de retirer des éléments** car ces deux actions ont des répercussions sur le tableau qui doit etre recréér afin d'avoir la bonne taille.

Voici quelques méthodes de cette classe :

- `add(Object o)` : ajoute l'objet `o` à la liste si son type correspond
- `remove(Object o)` : enlève une occurence de l'objet `o` de la liste s'il s'y trouve au moins 1 fois
- `get(index i)` : récupère l'objet de la liste à l'index `i`
- `size()` : retourne la taille de la liste (nombre d'éléments dans la liste)
- `contains(Object o)` : indique si une occurence de l'objet `o` se trouve dans la liste ou non
- `isEmpty()` : indique si la liste est vide (si la taille de la liste est égale à 0)

_Remarque : la méthode `get` ne marche pas si la liste contient un objet à l'index donné. Sinon la méthode fait planter le programme donc faite attention !_

_Remarque : il existe d'autres méthodes dans la classe `ArrayList`, celles-ci sont les plus communéments utilisées._

Voici un petit exemple de manipulation d'une `ArrayList` :

```
Page sommaire = new Page("Ceci est un sommaire");
List<Page> livre = new ArrayList<>();

// si le livre est vide
// donc qu'il 0 page
if (livre.isEmpty()) {
  // on ajoute la page sommaire
  // dans le livre
  livre.add(sommaire);
}
```

### Manipuler une liste avec Collections

La classe `Collections` permet de manipuler des listes et autres stuctures de données similaires (donc des collections), voici une liste non exhaustive de ses fonctionnalités :

- `sort(list)` : tri le contenu de la liste par **ordre croissant**
- `shuffle(list)` : mélange le contenu de la liste (change l'ordre des éléments de manière aléatoire)
- `max(collection)` : retourne la plus grande valeur de la collection
- `min(collection)` : retourne la plus petite valeur de la collection
- `addAll(collection, elements)` : permet d'ajouter `elements` à la collection, `elements` peut être un tableau ou bien les éléments listés un par un

_Remarque : il existe beaucoup d'autres méthodes plus situationnelles dans la classe `Collections`._

_Remarque : la plupart des méthodes de `Collections` se basent sur la comparaison des objets contenus pour fonctionner. Cette comparaison marche très bien et automatiquement pour des variables de type primitif mais pas pour des types complexes._

### La LinkedList

La `LinkedList` est une autre implémentation de la liste une peu moins commune. Elle représente en mémoire une **chaîne** ou une **file** de données. Chaque élément à un ordre dans la liste.

Plus précisément, la `LinkedList` est une liste **doublement chaînée** c'est à dire que chaque élément stocké dans la liste est **relié à son précédent et à son suivant** ainsi il est très **peu couteux d'ajouter ou de retirer des éléments** mais il est **plus compliqué d'accéder à un élément** de la liste car on doit la parcourir depuis le départ pour arriver à la destination.

Voici un exemple :

```
List<Personne> fileAttente = new LinkedList<>();
```

En plus des méthodes que l'on retrouve dans les autres implémentations de `List` comme `ArrayList`, la `LinkedList` propose les fonctionnalitées suivantes :

- `addFirst(Object o)` : ajoute l'objet `o` au **début** de la liste
- `addLast(Object o)` : ajoute l'objet `o` à la **fin** de la liste
- `removeFirst()` : retire le **premier** élément de la liste
- `removeLast()` : retite le **dernier** élément de la liste
- `getFirst()` : retourne le **premier** élément de la liste
- `getLast()` : retourne le **dernier** élément de la liste

_Remarque : il existe d'autres implémentations de List mais nous ne les verrons pas ici._

## Les Queue

La `Queue` est une **file de donnée**, on l'utilise pour stocker des éléments de **manière temporaire avant traitement**.

Elle n'offre aucune fonctionnalité particulière par rapport aux listes mais certaines de ces implémentations spécifiques peuvent être utile notamment la `PriorityQueue`.

Ses méthodes d'usages sont les suivantes :

- `push(Objet o)` : ajoute l'objet `o` au début de la file
- `pop()` : retire le premier élément de la file

Voici un exemple :

```
// quelques personnes
// pour notre exemple
Personne toto = new Personne();
Personne titi = new Personne();

// une file d'attente
// contenant des personnes
Queue<Personne> fileAttente = new Queue<>();

// on insère toto dans
// la file d'attente
fileAttente.push(toto);
// puis on insère titi
fileAttente.push(titi);
// on retite la première
// personne dans la file
// à savoir toto
fileAttente.pop();
// à partir de cette ligne
// il ne reste que titi
// dans la file d'attente
```

### La PriorityQueue

La `PriorityQueue` est une file de donnée dont l'ajout de donnée provoque un tri automatique. La PriorityQueue détecte un élément de comparaison entre les objets qui la composent et les trie. Autrement elle ne possède aucune fonctionnalité particulière supplémentaire.

_Remarque : Il existe d'autres implémentations de Queue mais nous ne les verrons pas ici._

## Les Set

Le `Set` est une structure de donnée similaire à la `List` mais il **n'autorise pas de doublon**.

On ne peut pas récupérer un élément précis dans un `Set`, seulement **ajouter**, **retirer** et **faire des vérifications**.

Un `Set` peut dont être utile dans les cas où l'on souhaite stocker des informations en interdisant les doublons.

_Remarque : les Set sont des structures particulières et rarement utile, à utiliser avec précaution._

## Exercices

### Exercice 1 : Le Grand Hotel

On souhaite représenter l'ensemble des chambres d'un hotel de luxe ainsi que sa clientèle. L'hotel n'a besoin que de connaitre le nom de ses clients.
L'hotel possède une infinité d'étages, chaque étage possède au maximum 2 chambres. Une chambre possède un numéro de chambre unique.
Une chambre peut accueillir jusqu'a 3 personnes, elle peut également être vide.

On doit pouvoir générer pour chaque chambre le message suivant : `Chambre n°[numero_chambre] - Etage n°[numero_etage] - Clients ([noms_clients])`
`noms_clients` se construit de cette façon : `Toto Titi Tutu` si la chambre contient 3 clients se nommant ainsi. Si la chambre est vide `noms_clients` = `vide`

1. Identifiez les **objets** à implémenter et créez en conséquence les **classes** nécessaires. Identifiez ensuite les **attributs** de ces objets et implémentez les dans vos classes. Vous créerez également les **constructeurs**, **getters**, **setters** et autres méthodes nécessaires à la manipulation de vos objets.

2. Développez un **programme principal** ou l'appel de la méthode `toString()` de la classe `Hotel` permet de produire ce résultat :

`Chambre n°1 - Etage n°1 - Clients (Toto)`

`Chambre n°2 - Etage n°1 - Clients (vide)`

`Chambre n°3 - Etage n°2 - Clients (Titi Tata Tutu)`

_Auteur : Léo SALLARD._
