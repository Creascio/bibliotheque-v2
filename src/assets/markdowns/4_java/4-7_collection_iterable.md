# Collection et Iterable

## Prérequis

+ [Bibliotheques]()

## Introduction

Il existe de nombreuses façon d'organiser des données autrement qu'avec des tableaux en java. L'architecture des bibliothèques proposant des solutions est très vaste et nous allons la parcourir de manière succinte. Tout se base sur Collection et Iterable qui sont des interfaces (pas besoin de savoir ce qu'est une interface pour le moment) donnant leurs propriétés aux classes qui nous intéresse dans ce cours.

Il existe trois grandes familles d'iterable c'est à dire de structure de données pouvant être parcouru : Les List, Les Queue et Les Set. Toutes ces classes sont ce qu'on appelle des Collections.

Avant tout il faut savoir que les tableaux ainsi que les iterables peuvent être parcouru via une boucle particulière appelée le forEach

## forEach

Le forEach en java est une boucle très similaire au for et qui permet de parcourir des structures de données de manière plus intuitive.

Il se construit de cette façon : `for(Object o : [structure])`

Le paramètre de gauche indique le type d'objet que l'on souhaite chercher dans la structure. Il est important car une structure peut contenir différents types d'objets.
Le paramètre de droite est la variable qui représente la structure à parcourir.
`o` représente l'élement courant dans le parcours de la liste.

**Exemple** :

```java
Page[] livre = new Page[10];
for (Page page : livre){
    page.ecrire("Je suis une super page !");
}
```

Ici on parcourt le tableau de pages `livre`. Pour chaque page contenu dans `livre` on écrit dedans `Je suis une super page !`

*Remarque* : le forEach permet de parcourir toutes les structures de données que nous allons voir dans ce cours.

## List

Une List est une séquence d'objets qui peut être organisée comme on le souhaite. On peut y ajouter et en retirer des éléments, les doublons sont autorisé ainsi que les objets vide. On peut récupérer un élément grâce à son index tout comme on le ferait dans un tableau.
La différence majeure entre une liste et un tableau est que la liste est **dynamique** c'est à dire qu'elle adapte **automatiquement** sa **taille** en fonction des actions faite sur celle-ci (ajout et retrait d'éléments notamment).
Lorsqu'on instancie une liste on doit préciser le type d'objet qu'elle va contenir de cette façon :

```java
List<Chien> chiens = new ArrayList<>();
```

La liste `chiens` pourra donc stocker des objets de type `Chien`.

`List` n'est pas un objet on doit donc utiliser des implémentations de List pour pouvoir la manipuler. L'implémentation la plus courante de la liste est l'ArrayList.

*Remarque* : une liste ne peut stocker que des objets, si on souhaite stocker des variables de types primitifs on utilisera les classes correspondantes (ex : Integer pour int, Character pour char, etc.)

### ArrayList

L'ArrayList est l'une des implémentations de la liste la plus commune. En mémoire elle est équivalente à un **tableau dyamique**.
Cela implique qu'il est très **peu couteux d'accéder à un élément** dans la liste mais il est **plus compliqué d'ajouter ou de retirer des éléments** car ces deux actions ont des répercussions sur le tableau qui doit etre recrée afin d'avoir la bonne taille.

Voici quelques méthodes de cette classe :

+ `add(Object o)` : ajoute `o` à la liste si son type correspond
+ `remove(Object o)` : enlève une occurence de `o` de la liste s'il s'y trouve
+ `get(index i)` : récupère l'objet à l'index i (/!\ plante si la liste n'est pas aussi grande /!\)
+ `size()` : retourne la taille de la liste (nombre d'éléments dans la liste)
+ `contains(Object o)` : indique si une occurence de `o` se trouve dans la liste
+ `isEmpty()` : indique si la liste est vide (si la taille de la liste est égale à 0)

*Remarque* : il existe d'autres méthodes, celles-ci sont les plus communéments utilisées

**Exemple** :

```java
Page sommaire = new Page("Ceci est un sommaire");
List<Page> livre = new ArrayList<>();
if (livre.isEmpty()){
    page.add(sommaire);
}
```

### Instancier une liste

Instancier le contenu d'une liste peut être un travail fastidieux et peu élégant au niveau des lignes de code. Voici quelques astuces pour ajouter rapidement du contenu à une liste fraichement créée :

#### Usage d'un tableau

La classe `Arrays` contient de nombreuses méthodes de manipulation de tableau dont une qui nous est utile dans le cas de figure d'une instanciation de liste : `asList()`

**Exemple** :

```java
// le tableau de nombre [1, 2, 3] est transformé en liste
// pour instancier numbers
ArrayList<Integer> numbers = Arrays.asList(1, 2, 3);
```

*Remarque* : comme nous venons de parler de Arrays il peut etre bon de savoir qu'il existe d'autres méthodes dans cette classe notamment la méthode `sort()` qui, en fonction des éléments stockés dans le tableau, permet de le trier dans l'ordre croissant.

#### Appel de méthodes discrètes

On peut appeler des méthodes lors de la création d'un objet ce qui permet de le modifier de manière plus élégante et plus rapide (en termes de lignes de code).

**Exemple** :

```java
List<Integer> numbers = new ArrayList<>() {{
    add(1);
    add(2);
    add(3);
}}
```

*Remarque* : on ne rentrera pas dans le détail ici de comment fonctionne le bloc de code ci-dessus car cela implique des notions trop avancées pour le moment. Cependant maintenant vous savez que ceci est possible :^)

### Manipuler une liste avec Collections

La classe `Collections` permet de manipuler des listes et autres stuctures de données similaires (donc des collections), voici une liste non exhaustive de ses fonctionnalités :

+ `sort(list)` : tri le contenu de la liste par ordre croissant (ne fonctionne que si la comparaison est possible)
+ `shuffle(list)` : mélange le contenu de la liste (change l'ordre des éléments de manière aléatoire)
+ `max(collection)` : retourne la plus grande valeur de la collection (si la comparaison est possible)
+ `min(collection)` : retourne la plus petite valeur de la collection (si la comparaison est possible)
+ `addAll(collection, elements)` : permet d'ajouter `elements` à la collection, `elements` peut être un tableau ou bien les éléments listés un par un

*Remarque* : il existe beaucoup d'autres méthodes plus situationnelles dans la classe Collections.

*Remarque* : pour les méthodes ne marchant que si la comparaison est possible, il faut entendre qu'elles marchent automatiquement si on compare des types primitifs mais pas si on compare des types complexes auquel cas il faudra préciser un moyen de comparaison que nous verrons plus tard

### LinkedList

La LinkedList est une autre implémentation de la liste une peu moins commune. Elle représente en mémoire une **chaîne** ou une **file** de données. Plus préciséement une liste doublement chaînée c'est à dire que chaque élément stocké dans la liste est **relié à son précédent et à son suivant** ainsi il est très **peu couteux d'ajouter ou de retirer des éléments** mais il est **plus compliqué d'accéder à un élément** de la liste car on doit la parcourir depuis le départ pour arriver à la destination.

**Exemple** :

```java
List<Personne> fileAttente = new LinkedList<>();
fileAttente.addFirst(mario);
fileAttente.removeLast();
```

On verra ici les méthodes particulières à cette implémentation, la LinkedList possède les méthodes que l'on retrouve dans l'ArrayList en plus des siennes.

+ `addFirst(Object o)` et `addLast(Object o)` : ajoute `o` au début ou à la fin de la liste respectivement (des équivalents pour `remove`existent)
+ `getFirst()` et `getLast()` : retourne le premier ou le dernier élément de la liste respectivement
+ `push(Object o)` et `pop()` : ajoute un élément au départ ou bien retire le premier élément respectivement

*Remarque*  : `push` et `pop` sont des acquisitions des implémentations de listes LIFO (Last In First Out) en Java comme le Stack. Ainsi on préfère utiliser la LinkedList au Stack ou encore au Queue que nous allons voir à présent sauf dans des cas bien précis.

*Remarque* : il existe d'autres implémentations de List mais nous ne les verrons pas ici

## Queue

La Queue est une file de donnée, on l'utilise pour stocker des éléments de manière temporaire avant traitement. Elle n'offre aucune fonctionnalité particulière par rapport aux listes mais certaines de ces implémentations spécifiques peuvent être utile notamment la PriorityQueue

### PriorityQueue

La PriorityQueue est une file de donnée dont l'ajout de donnée provoque un tri automatique. La PriorityQueue détecte un élément de comparaison entre les objets qui la composent et les trie. Autrement elle ne possède aucune fonctionnalité particulière

*Remarque* : Il existe d'autres implémentations de Queue mais nous ne les verrons pas ici

## Set

Le Set est une structure de donnée similaire à la List mais il n'autorise pas de doublon. On ne peut pas récupérer un élément d'un Set, seulement ajouter, retirer et faire des vérifications. Un Set peut dont être utile dans les cas où l'on souhaite stocker des informations en interdisant les doublons.

*Remarque* : les Set sont des structures particulières et rarement utile, à utiliser avec précaution.

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

## Suivants

+ [Interface Utilisateur]()
